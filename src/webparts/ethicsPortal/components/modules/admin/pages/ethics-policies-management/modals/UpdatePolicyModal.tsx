import {
  colors,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";
import { Policy } from "../../../../employee/components/PolicyLandingComponent";
import { CreatePolicyForm } from "../forms/CreatePolicyForm";

type Props = {
  open: boolean;
  onClose: () => void;
  policy: Policy;
};

export const UpdatePolicyModal: React.FC<Props> = ({
  onClose,
  open,
  policy,
}) => {
  const [policyTitle, setPolicyTitle] = React.useState<Policy>(policy);
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;
  const mutation = useMutation(
    async () => {
      return await sp.web.lists
        .getByTitle("PolicyConfiguration")
        .items.getById(policy?.Id)
        .update({ PolicyTitle: policyTitle?.PolicyTitle });
    },
    {
      onSuccess(data, variables, context) {
        queryClient.invalidateQueries(["adminPolicies"]);
        successAlert(toast, "Policy updated");
        onClose();
      },
      onError(error: Error, variables, context) {
        errorAlert(toast, error.message);
      },
    }
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Update Policy
        <IconButton
          aria-label="close"
          onClick={() => onClose()}
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            color: colors.grey[500],
          }}
        >
          <FaTimesCircle />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <CreatePolicyForm
          isLoading={mutation.isLoading}
          policy={policyTitle}
          onUpdate={(policy) => setPolicyTitle(policy)}
          onClose={onClose}
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          label="Update"
        />
      </DialogContent>
    </Dialog>
  );
};
