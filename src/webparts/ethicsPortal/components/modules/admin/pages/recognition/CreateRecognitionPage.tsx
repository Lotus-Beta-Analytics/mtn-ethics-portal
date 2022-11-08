import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";

type Props = {
  context: WebPartContext;
};

export const CreateRecognition: React.FC<Props> = ({ context }) => {
  const [file, setFile] = React.useState("");
  const [division, setDivision] = React.useState("");
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [ethicalMessage, setEthicalMessage] = React.useState("");
  const queryClient = useQueryClient();

  const toast = useToasts().addToast;
  const submitHandler = async () => {
    try {
      const res = await sp.web.lists.getByTitle("EthicsRecognition").items.add({
        Name: name,
        Location: location,
        Division: division,
        EthicalMessage: ethicalMessage,
        RecognitionImage: file,
      });

      return res;
    } catch (e) {
      return e;
    }
  };

  const mutation = useMutation(submitHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllEthicalRecognition"]);
      successAlert(toast, "Ethical Recognition Added");
      setFile("");
      setLocation("");
      setDivision("");
      setEthicalMessage("");
      setName("");
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
          width: "80%",
          margin: "auto",
          boxSizing: "border-box",
          padding: "1.5rem 1rem",
        }}
      >
        <Typography>Ethics Champion</Typography>
        <TextField
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
          fullWidth
          required
          style={{ margin: "1rem 0" }}
        />

        <Typography>Location</Typography>
        <TextField
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="Location"
          fullWidth
          required
          style={{ margin: "1rem 0" }}
        />

        <Typography>Division</Typography>
        <TextField
          variant="outlined"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          label="Division"
          fullWidth
          required
          style={{ margin: "1rem 0" }}
        />
        <Typography>Ethical Message</Typography>
        <TextField
          variant="outlined"
          value={ethicalMessage}
          minRows={6}
          onChange={(e) => setEthicalMessage(e.target.value)}
          label="Ethical Message"
          fullWidth
          required
          style={{ margin: "1rem 0" }}
        />

        <Box style={{ marginBottom: "20px" }}>
          <Typography>Upload Image</Typography>
          <FileUpload
            fileControl={file}
            onUpdate={(fileUrl) => setFile(fileUrl)}
            context={context}
          />
        </Box>

        <Box
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            disabled={mutation.isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
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
