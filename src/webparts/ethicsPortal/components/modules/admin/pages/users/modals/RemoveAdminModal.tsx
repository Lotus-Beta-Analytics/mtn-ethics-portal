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
import { deleteAdmin } from "../apis/deleteAdmin";
import { updateAdmin } from "../apis/updateAdmin";
import { User, UserForm } from "../forms/UserForm";
import { Data } from "../ManageAdminPage";

type Props = {
  open: boolean;
  onClose: (item?: User) => void;
  user: User;
  id: string;
};

export const RemoveAdminModal: React.FC<Props> = ({
  open,
  onClose,
  user,
  id,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const mutation = useMutation(
    (id: string) => {
      return deleteAdmin(id);
    },
    {
      onSuccess: () => {
        successAlert(toast, "Delete successful");
        queryClient.invalidateQueries(["getAdmins"]);
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
          Are you sure you want to <strong>remove</strong> {user?.StaffName}?
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
