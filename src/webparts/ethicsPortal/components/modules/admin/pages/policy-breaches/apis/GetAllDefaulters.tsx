import { sp } from "@pnp/sp";
import { useQueryClient } from "@tanstack/react-query";

export const getAllDefaulters = async () => {
  try {
    const res = await sp.web.lists
      .getByTitle("EthicsDefaulters")
      .items.getAll();
    return res;
  } catch (err) {
    return err;
  }
};
export const getDefaulters = async (id: number) => {
  try {
    const res = await sp.web.lists
      .getByTitle("EthicsDefaulters")
      .items.getById(id)
      .get();

    return res;
  } catch (err) {
    return err;
  }
};
