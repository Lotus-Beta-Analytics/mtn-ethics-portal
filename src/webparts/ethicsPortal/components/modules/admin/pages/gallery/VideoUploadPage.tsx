import { Box } from "@material-ui/core";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { GalleryData, GalleryForm } from "./forms/GalleryForm";
import { useHistory } from "react-router-dom";

type Props = {
  context: WebPartContext;
};

export const VideoUploadPage: React.FC<Props> = ({ context }) => {
  const [galleryData, setGalleryData] = React.useState<GalleryData>();
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const history = useHistory();
  const mutation = useMutation(
    async () => {
      try {
        const data = sp.web.lists.getByTitle("Gallery").items.add(galleryData);
        return data;
      } catch (e) {
        return e;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["gallery"]);
        successAlert(toast, "upload Successful");
        setGalleryData(null);
        setTimeout(() => {
          history.push("/admin/gallery");
        }, 1000);
      },

      onError: () => {
        errorAlert(toast);
      },
    }
  );
  return (
    <AdminWrapper>
      <Box>
        <GalleryForm
          onUpdate={(data) => setGalleryData(data)}
          buttonLabel="Add Video"
          context={context}
          galleryData={galleryData}
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          isLoading={mutation.isLoading}
          accept={{
            "video/mp4": [".mp4"],
          }}
          uploadLabel="Select video to upload"
        />
      </Box>
    </AdminWrapper>
  );
};
