import {
  Button,
  CircularProgress,
  DialogActions,
  Typography,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import {
  errorAlert,
  successAlert,
} from "../../../../../../utils/toast-messages";
import { DeleteDefaulters } from "../../apis/DeleteDefaulters";

type Props = {
  open: boolean;
  onClose: (item?: any) => void;
  defaulters: any;
  id: number;
};

export const RemoveDefaulterModal: React.FC<Props> = ({
  open,
  onClose,
  defaulters,
  id,
}) => {
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const mutation = useMutation(
    (id: number) => {
      return DeleteDefaulters(id);
    },
    {
      onSuccess: () => {
        successAlert(toast, "Delete successful");
        queryClient.invalidateQueries(["getAllDefaulters"]);
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
          Are you sure you want to <strong>remove</strong>{" "}
          {defaulters?.PolicyBreachTitle}?<br></br>
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
