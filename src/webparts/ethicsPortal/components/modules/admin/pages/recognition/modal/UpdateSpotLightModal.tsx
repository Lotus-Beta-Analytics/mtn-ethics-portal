import {
  DialogActions,
  CircularProgress,
  Dialog,
  DialogContent,
  Button,
  Typography,
} from "@material-ui/core";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { successAlert, errorAlert } from "../../../../../utils/toast-messages";
import { ModalCloseButton } from "../../../components/ModalCloseButton";
import { deleteEthicsActivity } from "../apis/DeleteRecoggnition";

type Props = {
  open: boolean;
  onClose: (item?: any) => void;
  recognition: any;
  id: number;
};

export const UpdateSpotLightModal: React.FC<Props> = ({
  open,
  onClose,
  recognition,
  id,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const mutation = useMutation(
    (id: number) => {
      return deleteEthicsActivity(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getAllEthicsActivities"],
        });
        onClose();
        successAlert(toast, "Spotlight Updated Successfully");
      },
      onError: () => {
        errorAlert(toast);
      },
    }
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <ModalCloseButton onClose={onClose} />
      <DialogContent>
        <Typography
          style={{ boxSizing: "border-box", padding: "3rem" }}
        ></Typography>
        <></>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => onClose()} variant="contained">
          Cancel
        </Button>
        <Button
          onClick={() => {
            mutation.mutate(id);
          }}
          endIcon={mutation?.isLoading ? <CircularProgress size={20} /> : <></>}
          variant="contained"
          color="primary"
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};
