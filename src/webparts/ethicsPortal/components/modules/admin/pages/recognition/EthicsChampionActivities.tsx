import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";
import { locations } from "../gallery/forms/GalleryForm";
import { PeoplePicker, StaffData } from "../users/components/PeoplePicker";

export const EthicsChampionsActivtiesCreate = () => {
  const [ethicalMessage, setEthicalMessage] = React.useState("");

  const queryClient = useQueryClient();

  const toast = useToasts().addToast;
  const submitHandler = async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("EthicsChampionActivities")
        .items.add({
          EthicalMessage: ethicalMessage,
        });

      return res;
    } catch (e) {
      return e;
    }
  };

  const mutation = useMutation(submitHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllEthicalChampionActivities"]);
      successAlert(toast, "Ethics Champion Activities Added");

      setEthicalMessage("");
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
        <Typography>Ethics Champion Activities</Typography>

        <TextField
          variant="outlined"
          value={ethicalMessage}
          minRows={6}
          onChange={(e) => setEthicalMessage(e.target.value)}
          label="Ethical Message"
          fullWidth
          required
          multiline
          style={{ margin: "1rem 0" }}
        />

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
