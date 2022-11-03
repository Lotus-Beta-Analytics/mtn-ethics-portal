import { sp } from "@pnp/sp";
import { useQueryClient } from "@tanstack/react-query";

export const getAllPolicies = async () => {
  try {
    const res = await sp.web.lists.getByTitle("Policies").items.getAll();
    return res;
  } catch (err) {
    return err;
  }
};
export const getPolicy = async (id: number) => {
  try {
    const res = await sp.web.lists
      .getByTitle("Policies")
      .items.getById(id)
      .get();

    return res;
  } catch (err) {
    return err;
  }
};
