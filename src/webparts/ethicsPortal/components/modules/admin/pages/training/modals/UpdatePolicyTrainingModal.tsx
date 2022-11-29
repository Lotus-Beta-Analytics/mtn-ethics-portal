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
import { WebContext } from "../../../../../EthicsPortal";
import { TrainingFormForPolicy } from "../forms/TrainingFormForPolicy";

type Props = {
  open: boolean;
  onClose: (item?: TrainingType) => void;
  id: number;
  training: TrainingType;
};

export const UpdatePolicyTrainingModal: React.FC<Props> = ({
  id,
  onClose,
  open,
  training,
}) => {
  const queryClient = useQueryClient();
  const { context } = React.useContext(WebContext);
  const toast = useToasts().addToast;
  const [itemToUpdate, setItemToUpdate] = React.useState<TrainingType>({
    Category: training?.Category as TrainingCategoryEnum,
    TrainingTitle: training?.TrainingTitle,
    Video: training?.Video,
  });

  const mutation = useMutation(
    async () => {
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
        onClose();
        queryClient.invalidateQueries(["trainings-policies"]);
        successAlert(toast, "update successfull");
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
          <TrainingFormForPolicy
            isLoading={mutation.isLoading}
            training={training}
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate();
            }}
            onUpdate={(value) => setItemToUpdate(value)}
            label="Update"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
