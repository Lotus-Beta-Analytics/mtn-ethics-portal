import { sp } from "@pnp/sp";

export const deletePost = async (id: number) => {
  try {
    await sp.web.lists.getByTitle("Post").items.getById(id).delete();
    return true;
  } catch (e) {
    return e;
  }
};
