import { sp } from "@pnp/sp";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { successAlert, errorAlert } from "../../../../../utils/toast-messages";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { TrainingCategoryEnum } from "../enums/TrainingCategoryEnum";
import { TrainingType } from "../types/TrainingTypes";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { VideoCourseForm } from "../forms/VideoCourseForm";

type Props = {
  open: boolean;
  onClose: (item?: TrainingType) => void;
  id: number;
  training: TrainingType;
  context: WebPartContext;
};

export const UpdateCourseVideoModal: React.FC<Props> = ({
  id,
  onClose,
  open,
  training,
  context,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const [itemToUpdate, setItemToUpdate] = React.useState<TrainingType>({
    Category: training?.Category as TrainingCategoryEnum,
    TrainingTitle: training?.TrainingTitle,
    Video: training?.Video,
  });

  const mutation = useMutation(
    async () => {
      console.log();

      try {
        const res = await sp.web.lists
          .getByTitle("Training")
          .items.getById(id)
          .update(itemToUpdate);
        return res;
      } catch (e) {
        return e;
      }
    },
    {
      onSuccess: (data) => {
        successAlert(toast, "update successfull");
        onClose();
        queryClient.invalidateQueries(["getVideoCourses"]);
      },
      onError: (error) => {
        console.log(error);
        errorAlert(toast);
      },
    }
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Box style={{ boxSizing: "border-box", padding: "2rem" }}>
          <VideoCourseForm
            context={context}
            isLoading={mutation?.isLoading}
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate();
            }}
            onUpdate={(newValue) => {
              setItemToUpdate(newValue);
            }}
            training={training}
            label="Update"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
