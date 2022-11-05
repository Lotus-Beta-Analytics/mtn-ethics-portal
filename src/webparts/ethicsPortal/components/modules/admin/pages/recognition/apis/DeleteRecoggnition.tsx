import { sp } from "@pnp/sp";

export const deletePolicy = async (id: number) => {
  try {
    await sp.web.lists.getByTitle("EthicsRecognition").items.getById(id).delete();
    return true;
  } catch (e) {
    return e;
  }
};