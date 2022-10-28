import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";
import { updateAdmin } from "../apis/updateAdmin";
import { User, UserForm } from "../forms/UserForm";
import { Data } from "../ManageAdminPage";

type Props = {
  open: boolean;
  onClose: (item?: User) => void;
  user: User;
  id: string;
};

export const UpdateAdminModal: React.FC<Props> = ({
  user,
  onClose,
  open,
  id,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const [admin, setAdmin] = React.useState<User>({
    StaffEmail: user.StaffEmail ?? "",
    StaffName: user?.StaffName ?? "",
  });
  const mutation = useMutation(
    (data: Data) => {
      return updateAdmin(data.adminId, data.data);
    },
    {
      onSuccess: () => {
        successAlert(toast, "Admin updated successfully");
        queryClient.invalidateQueries(["getAdmins"]);
        onClose();
      },
      onError: (error) => {
        console.log(error);
        errorAlert(toast);
      },
    }
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box style={{ boxSizing: "border-box", padding: "2rem" }}>
          <UserForm user={admin} onUpdate={(item) => setAdmin(item)} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            mutation.mutate({
              adminId: id,
              data: admin,
            });
          }}
          endIcon={mutation?.isLoading ? <CircularProgress size={20} /> : <></>}
          variant="contained"
          color="secondary"
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};
