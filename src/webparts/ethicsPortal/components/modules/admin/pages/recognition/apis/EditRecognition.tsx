import { sp } from "@pnp/sp";

export const editRecognition = async (id: number, data: any) => {
  try {
    const res = await sp.web.lists
      .getByTitle("EthicsRecognition")
      .items.getById(id)
      .update(data);
    return res.data;
  } catch (e) {
    return e;
  }
};
