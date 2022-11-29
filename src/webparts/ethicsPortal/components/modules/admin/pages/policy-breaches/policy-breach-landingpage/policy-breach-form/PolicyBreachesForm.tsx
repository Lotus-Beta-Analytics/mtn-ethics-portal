import { WebPartContext } from "@microsoft/sp-webpart-base";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { sp } from "@pnp/sp";
import {
  errorAlert,
  successAlert,
} from "../../../../../../utils/toast-messages";
import { FileUpload } from "../../../../../shared/components/input-fields/FileUpload";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { AdminWrapper } from "../../../../../shared/components/app-wrapper/admin/AdminWrapper";
import { Add } from "@material-ui/icons";
import { ButtonContainerStyles } from "../../../../../shared/components/TableCompHelpers";
import { CancelButton } from "../../../../../shared/components/buttons/CancelButton";

type Props = {
  context: WebPartContext;
};

export const PolicyBreachesForm: React.FC<Props> = ({ context }) => {
  const [file, setFile] = React.useState("");
  const [policyBreachesTitle, setPolicyBreachesTitle] = React.useState("");
  const [writeUp, setWriteUp] = React.useState("");
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;

  const submitHandler = async () => {
    try {
      const res = await sp.web.lists.getByTitle("PolicyBreaches").items.add({
        PolicyBreachImage: file,
        PolicyBreachTitle: policyBreachesTitle,
        PolicyBreachWriteUp: writeUp,
      });

      return res;
    } catch (e) {
      return e;
    }
  };

  const mutation = useMutation(submitHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllPolicyBreaches"]);
      successAlert(toast, "Policy Breaches Added");
      setFile("");
      setPolicyBreachesTitle("");
      setWriteUp("");
    },
    onError: () => {
      errorAlert(toast);
    },
  });

  return (
    <AdminWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        <Box style={{ marginBottom: "20px" }}>
          <Typography>Upload Image File</Typography>
          <FileUpload
            fileControl={file}
            onUpdate={(fileUrl) => setFile(fileUrl)}
            context={context}
          />
        </Box>

        <Typography>Policy Breach Title</Typography>
        <TextField
          variant="outlined"
          value={policyBreachesTitle}
          onChange={(e) => setPolicyBreachesTitle(e.target.value)}
          label="Enter Policy Breach Title"
          fullWidth
          required
          //   style={{ margin: "1rem 0" }}
        />

        <Typography>Policy Breach Write Up</Typography>
        <TextField
          label="Write Up"
          value={writeUp}
          fullWidth
          required
          variant="outlined"
          onChange={(e) => setWriteUp(e.target.value)}
          multiline
          minRows={10}
          //   style={{ margin: "1rem 0" }}
        />

        <Box
          style={{
            ...ButtonContainerStyles,
          }}
        >
          <CancelButton />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              mutation.isLoading ? <CircularProgress size={20} /> : <Add />
            }
            disabled={mutation.isLoading}
          >
            Create
          </Button>
        </Box>
      </form>
    </AdminWrapper>
  );
};
