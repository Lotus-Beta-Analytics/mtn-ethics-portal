import { sp } from "@pnp/sp";

export const getAllRecognition = async () => {
  return await sp.web.lists.getByTitle("EthicsRecognition").items.getAll();
};
export const getRecognition = async (id: number) => {
  return await sp.web.lists
    .getByTitle("EthicsRecognition")
    .items.getById(id)
    .get();
};
