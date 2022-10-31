import { Box, Typography, Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { WebPartContext } from "@microsoft/sp-webpart-base";

import * as React from "react";
import { FileUpload } from "../../../../shared/components/input-fields/FileUpload";

export interface GalleryData {
  file: string;
  location: string;
  imageLabel: string;
}

type Props = {
  galleryData: GalleryData;
  onUpdate: React.Dispatch<GalleryData>;
  context: WebPartContext;
  buttonLabel: string;
  onSubmit: () => void;
};

export const GalleryForm: React.FC<Props> = ({
  galleryData,
  onUpdate,
  context,
  buttonLabel,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault;
        onSubmit();
      }}
    >
      <TextField
        label="Enter a Title for this Upload"
        value={galleryData?.imageLabel}
        onChange={(e) =>
          onUpdate({
            ...galleryData,
            imageLabel: e.target.value,
          })
        }
      />
      <Autocomplete
        id="type"
        freeSolo={false}
        options={locations?.map((option) => option)}
        fullWidth
        value={galleryData?.location}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose Location"
            margin="normal"
            variant="outlined"
          />
        )}
        onChange={(e, newvalue) =>
          onUpdate({
            ...galleryData,
            location: newvalue,
          })
        }
      />
      <Box>
        <Typography>Select Image</Typography>
        <FileUpload
          context={context}
          fileControl={galleryData?.file}
          onUpdate={(newFile) =>
            onUpdate({
              ...galleryData,
              file: newFile,
            })
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button color="primary" variant="contained" type="submit">
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};

const locations = [];
