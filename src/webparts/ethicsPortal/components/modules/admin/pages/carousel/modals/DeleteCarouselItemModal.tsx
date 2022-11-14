import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";
import { CarouselData, CarouselItemForm } from "../forms/CarouselItemForm";

type Props = {
  open: boolean;
  onClose: () => void;
  item: CarouselData;
};

export const DeleteCarouselItemModal: React.FC<Props> = ({
  open,
  onClose,
  item,
}) => {
  const toast = useToasts().addToast;
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    () => {
      return sp.web.lists
        .getByTitle("CarouselItems")
        .items.getById(item?.Id)
        .delete();
    },
    {
      onSuccess(data, variables, context) {
        successAlert(toast, "Item Deleted");
        queryClient.invalidateQueries(["carouselItems"]);
        onClose();
      },
      onError(error: Error, variables, context) {
        errorAlert(toast, error.message);
      },
    }
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Typography style={{ boxSizing: "border-box", padding: "3rem" }}>
          Are you sure you want to <strong>remove</strong> {item?.CarouselTitle}
          ?<br></br>
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
            mutate();
          }}
          endIcon={isLoading ? <CircularProgress size={20} /> : <></>}
          variant="contained"
          color="secondary"
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};
