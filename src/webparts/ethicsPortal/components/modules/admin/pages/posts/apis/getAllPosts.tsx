import { sp } from "@pnp/sp";
import { useQueryClient } from "@tanstack/react-query";

export const getAllPosts = async () => {
  try {
    const res = await sp.web.lists.getByTitle("Post").items.getAll();
    return res;
  } catch (err) {
    return err;
  }
};
export const getPost = async (id: number) => {
  try {
    const res = await sp.web.lists.getByTitle("Post").items.getById(id).get();
    console.log(res, "from api");

    return res;
  } catch (err) {
    return err;
  }
};
