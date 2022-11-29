import { sp } from "@pnp/sp";

export const deleteRecognition = async (id: number) => {
  return await sp.web.lists
    .getByTitle("EthicsRecognition")
    .items.getById(id)
    .delete();
};
