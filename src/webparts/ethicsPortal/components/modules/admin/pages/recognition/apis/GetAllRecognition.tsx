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

export const getEthicsPhotoActivities = async (id: number) => {
  return await sp.web.lists
    .getByTitle("EthicsActivitiesPhoto")
    .items.getById(id)
    .get();
};

export const getAllEthicsPhotoActivities = async () => {
  return await sp.web.lists.getByTitle("EthicsActivities").items.getAll();
};

export const getAllEthicsVideoActivities = async () => {
  return await sp.web.lists.getByTitle("EthicsActivities").items.getAll();
};

export const getAllEthicsWriteUpActivities = async () => {
  return await sp.web.lists.getByTitle("EthicsActivities").items.getAll();
};
