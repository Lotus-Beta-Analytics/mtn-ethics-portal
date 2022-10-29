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
import { deletePost } from "../apis/deletePost";

type Props = {
  open: boolean;
  onClose: (item?: any) => void;
  post: any;
  id: number;
};

export const RemoveAdminModal: React.FC<Props> = ({
  open,
  onClose,
  post,
  id,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const mutation = useMutation(
    (id: number) => {
      return deletePost(id);
    },
    {
      onSuccess: () => {
        successAlert(toast, "Delete successful");
        queryClient.invalidateQueries(["getAllPosts"]);
        onClose();
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
          Are you sure you want to <strong>remove</strong> {post?.PostTitle}?
          <br></br>
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
            mutation.mutate(id);
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
