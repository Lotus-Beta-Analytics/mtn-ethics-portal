import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
  isLoading?: boolean;
  onClose?: () => void;
};

export const CancelButton: React.FC<Props> = ({ isLoading, onClose }) => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        disabled={isLoading}
        onClick={() => (onClose ? onClose() : history.push("/admin/dashboard"))}
      >
        Cancel
      </Button>
      {open && (
        <CancelModal
          open={true}
          onClose={(status) => {
            if (status) {
              history.push("/admin/dashboard");
              setOpen(false);
            } else {
              setOpen(false);
            }
          }}
        />
      )}
    </>
  );
};

const CancelModal: React.FC<{
  open: boolean;
  onClose: (response: boolean) => void;
}> = ({ onClose, open }) => {
  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button>No</Button>
        <Button>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
