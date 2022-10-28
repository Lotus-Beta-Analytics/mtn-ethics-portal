import { sp } from "@pnp/sp";
import { User } from "../forms/UserForm";

export const updateAdmin = async (adminId: string, data: User) => {
  try {
    const res = await sp.web.lists
      .getByTitle("Admin")
      .items.getById(Number(adminId))
      .update({
        StaffName: data?.StaffName,
        StaffEmail: data?.StaffEmail,
      });
    return res.data;
  } catch (err) {
    return err;
  }
};
