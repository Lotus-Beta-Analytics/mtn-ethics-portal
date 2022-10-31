import {
  Typography,
  DialogActions,
  CircularProgress,
  Dialog,
  DialogContent,
  Button,
} from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { successAlert, errorAlert } from "../../../../../utils/toast-messages";

type Props = {
  QuizTitle: string;
  QuizId: number;
  onClose: (res?: boolean) => void;
  open: boolean;
};

export const DeleteQuizModal: React.FC<Props> = ({
  QuizTitle,
  QuizId,
  onClose,
  open,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const mutation = useMutation(
    async (id: number) => {
      try {
        await sp.web.lists
          .getByTitle("QuizQuestions")
          .items.getById(id)
          .delete();
        return true;
      } catch (err) {
        return err;
      }
    },
    {
      onSuccess: () => {
        successAlert(toast, "Delete successful");
        onClose(true);
      },
      onError: () => {
        errorAlert(toast);
      },
    }
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Typography style={{ boxSizing: "border-box", padding: "3rem" }}>
          Are you sure you want to <strong>remove</strong> {QuizTitle}?<br></br>
          This action is irreversible. Click <strong>Proceed</strong> to
          continue.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => onClose()} variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={() => {
            mutation.mutate(QuizId);
          }}
          endIcon={mutation?.isLoading ? <CircularProgress size={20} /> : <></>}
          variant="contained"
          color="secondary"
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};
