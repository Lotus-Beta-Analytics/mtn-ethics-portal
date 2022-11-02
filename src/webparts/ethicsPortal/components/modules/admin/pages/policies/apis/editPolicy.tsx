import { sp } from "@pnp/sp";

export const editPolicy = async (id: number, data: any) => {
  try {
    const res = await sp.web.lists
      .getByTitle("Policies")
      .items.getById(id)
      .update(data);
    return res.data;
  } catch (e) {
    return e;
  }
};
