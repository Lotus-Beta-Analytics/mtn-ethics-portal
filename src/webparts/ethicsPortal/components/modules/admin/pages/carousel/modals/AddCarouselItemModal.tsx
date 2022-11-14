import { Dialog, DialogContent } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";
import { CarouselData, CarouselItemForm } from "../forms/CarouselItemForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const AddCarouselItemModal: React.FC<Props> = ({ open, onClose }) => {
  const [formData, setFormData] = React.useState<CarouselData>();
  const toast = useToasts().addToast;
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    () => {
      return sp.web.lists.getByTitle("CarouselItems").items.add(formData);
    },
    {
      onSuccess(data, variables, context) {
        successAlert(toast, "Item Added");
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
        <CarouselItemForm
          formData={formData}
          isLoading={isLoading}
          onUpdate={(values) => setFormData(values)}
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};
