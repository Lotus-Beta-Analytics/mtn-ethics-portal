import { Box, TextField, Typography } from "@material-ui/core";
import * as React from "react";
import { AdminWrapper } from "../../../../shared/components/app-wrapper/admin/AdminWrapper";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { FileUpload } from "../../../../shared/components/input-fields/FileUpload";
import { AdminNavigation } from "../../../../shared/components/Navigation/admin-navigation/AdminNavigation";
import { Accept } from "react-dropzone";

export interface GalleryData {
  file: string;
  imageLabel: string;
}

type Props = {
  galleryData: GalleryData;
  onUpdate: React.Dispatch<GalleryData>;
  context: WebPartContext;
  buttonLabel: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  uploadLabel?: string;
  accept?: Accept;
};

export const CreatePolicyBreaches: React.FC<Props> = ({
  galleryData,
  onUpdate,
  context,
  buttonLabel,
  onSubmit,
  isLoading,
  uploadLabel = "Image File",
  accept,
}) => {
  return (
    <AdminWrapper>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        <Box>
          <Typography>{uploadLabel}</Typography>
          <FileUpload
            context={context}
            fileControl={galleryData?.file}
            onUpdate={(newFile) =>
              onUpdate({
                ...galleryData,
                file: newFile,
              })
            }
            accept={accept}
          />
        </Box>

        <TextField
          label="Enter Policy Breach Title"
          value={galleryData?.imageLabel ?? ""}
          fullWidth
          required
          variant="outlined"
          onChange={(e) =>
            onUpdate({
              ...galleryData,
              imageLabel: e.target.value,
            })
          }
        />
        <TextField
          label="Write Up"
          value={galleryData?.imageLabel ?? ""}
          fullWidth
          required
          variant="outlined"
          onChange={(e) =>
            onUpdate({
              ...galleryData,
              imageLabel: e.target.value,
            })
          }
          multiline
          minRows={10}
        />
      </form>
    </AdminWrapper>
  );
};
