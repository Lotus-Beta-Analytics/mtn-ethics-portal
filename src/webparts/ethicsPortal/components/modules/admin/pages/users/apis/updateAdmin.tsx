import { sp } from "@pnp/sp";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../../utils/toast-messages";
import { User } from "../forms/UserForm";

export const updateAdmin = async (adminId: string, data: User) => {
  const toast = useToasts().addToast;
  try {
    const res = await sp.web.lists
      .getByTitle("Admin")
      .items.getItemByStringId(adminId)
      .update(data);
    return res.data;
  } catch (err) {
    return err;
  }
};
