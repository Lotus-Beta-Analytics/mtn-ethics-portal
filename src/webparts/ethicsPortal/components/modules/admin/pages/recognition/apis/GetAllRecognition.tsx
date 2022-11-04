import { sp } from "@pnp/sp";
import { useQueryClient } from "@tanstack/react-query";

export const getAllRecognition = async () => {
  try {
    const res = await sp.web.lists.getByTitle("EthicsRecognition").items.getAll();
    return res;
  } catch (err) {
    return err;
  }
};
export const getRecognition = async (id: number) => {
  try {
    const res = await sp.web.lists
      .getByTitle("EthicsRecognition")
      .items.getById(id)
      .get();

    return res;
  } catch (err) {
    return err;
  }
};
