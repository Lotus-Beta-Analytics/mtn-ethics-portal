import { Box, Button, CircularProgress, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import * as React from "react";
import { FileUpload } from "../../../../shared/components/input-fields/FileUpload";
import { TrainingCategoryEnum } from "../enums/TrainingCategoryEnum";
import { TrainingType } from "../types/TrainingTypes";

type Props = {
  training: TrainingType;
  onUpdate: React.Dispatch<TrainingType>;
  onSubmit: (e: React.FormEvent) => void;
  context: WebPartContext;
  label?: string;
  isLoading: boolean;
};

export const VideoCourseForm: React.FC<Props> = ({
  training,
  onUpdate,
  onSubmit,
  context,
  label,
  isLoading,
}) => {
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <TextField
        label="Course Title"
        value={training?.TrainingTitle ?? ""}
        variant="outlined"
        fullWidth
        onChange={(e) =>
          onUpdate({ ...training, TrainingTitle: e.target.value })
        }
      />
      <Autocomplete
        id="type"
        freeSolo={false}
        options={courseCategories?.map((option) => option)}
        fullWidth
        value={training?.Category ?? ""}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Course Category"
            margin="normal"
            variant="outlined"
          />
        )}
        onChange={(e, newValue) =>
          onUpdate({
            ...training,
            Category: newValue as TrainingCategoryEnum,
          })
        }
      />
      <FileUpload
        context={context}
        fileControl={training?.Video}
        onUpdate={(newValue) =>
          onUpdate({
            ...training,
            Video: newValue,
          })
        }
        accept={{ "video/mp4": [".mp4"] }}
      />
      <Box>
        <Button
          type="submit"
          endIcon={isLoading ? <CircularProgress size={20} /> : <></>}
          variant="contained"
          color="secondary"
        >
          {label || "Create"}
        </Button>
      </Box>
    </form>
  );
};

const courseCategories = [
  TrainingCategoryEnum.Business_Ethics,
  TrainingCategoryEnum.Mtn_Ethics,
  TrainingCategoryEnum.Organisation_Ethics,
];