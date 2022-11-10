import { sp } from "@pnp/sp";

export const DeleteDefaulters = async (id: number) => {
  try {
    await sp.web.lists
      .getByTitle("EthicsDefaulters")
      .items.getById(id)
      .delete();
    return true;
  } catch (e) {
    return e;
  }
};
