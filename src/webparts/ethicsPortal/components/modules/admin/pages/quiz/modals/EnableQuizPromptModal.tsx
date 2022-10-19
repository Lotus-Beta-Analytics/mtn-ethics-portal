import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import * as React from "react";

type Props = {
  onClose: (response: boolean) => void;
  open: boolean;
  type: QuizStatus;
};

export const EnableQuizPromptModal: React.FC<Props> = ({
  onClose,
  open,
  type,
}) => {
  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Typography>
          {type === QuizStatus.Is_Enabled
            ? "Are you sure you want to enable this Quiz? Click proceed to continue."
            : "Are you sure you want to disable this Quiz? Click proceed to continue."}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => onClose(false)}>
          Cancel
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => onClose(true)}
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export enum QuizStatus {
  Is_Enabled = "enable",
  Is_Disabled = "disable",
}
