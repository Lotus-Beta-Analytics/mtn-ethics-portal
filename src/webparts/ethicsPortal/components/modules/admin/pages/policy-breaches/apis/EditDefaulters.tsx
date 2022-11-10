import { sp } from "@pnp/sp";

export const EditDefaulters = async (id: number, data: any) => {
  try {
    const res = await sp.web.lists
      .getByTitle("EthicsDefaulters")
      .items.getById(id)
      .update(data);
    return res.data;
  } catch (e) {
    return e;
  }
};
