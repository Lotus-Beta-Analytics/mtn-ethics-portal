import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import { AdminWrapper } from "../../../../shared/components/app-wrapper/admin/AdminWrapper";
import { useHistory } from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
import { useToasts } from "react-toast-notifications";
import { sp } from "@pnp/sp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { locations } from "../../gallery/forms/GalleryForm";
import { FileUpload } from "../../../../shared/components/input-fields/FileUpload";
import { Add } from "@material-ui/icons";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";

export const AdminEthicsDefaulter = ({ context }) => {
  const [ethicsHandler, setEthicsHandler] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [division, setDivision] = React.useState("");
  const [ethicsMessage, setEthicsMessage] = React.useState("");
  const [ethicsImageUrl, setEthicsImageUrl] = React.useState("");

  const queryClient = useQueryClient();

  const history = useHistory();

  const toast = useToasts().addToast;
  const submitHandler = async () => {
    try {
      const res = await sp.web.lists.getByTitle("EthicsDefaulters").items.add({
        FirstName: firstName,
        LastName: lastName,
        Location: location,
        Division: division,
        EthicsDefaulterMessage: ethicsMessage,
        EthicsFileUrl: ethicsImageUrl,
      });

      return res;
    } catch (e) {
      return e;
    }
  };

  const manageHandler = () => {
    history.push("/admin/manage/ethicsdefaulters");
  };

  const mutation = useMutation(submitHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getEthicsDefaulter"]);
      successAlert(toast, "Ethics Defaulter Added");
      setEthicsImageUrl("");
      setLocation("");
      setDivision("");
      setEthicsMessage("");
      setFirstName("");
      setLastName("");
    },
    onError: () => {
      errorAlert(toast);
    },
  });

  return (
    <AdminWrapper>
      <Box style={{ float: "right" }}>
        <select
          onChange={(e) => setEthicsHandler(e.target.value)}
          value={ethicsHandler}
          style={{
            padding: "0.5rem 3rem",
            borderRadius: "26px",
            border: "none",
            outline: "none",
            height: "3rem",
          }}
        >
          <option>Add Defaulters</option>
          <option onClick={manageHandler}>Manage Defaulters</option>
        </select>
      </Box>
      <Box
        style={{
          width: "90%",
          marginTop: "60px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
        >
          <Typography>First Name</Typography>
          <TextField
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            fullWidth
            required
            style={{ margin: "1rem 0" }}
          />
          <Typography>Last Name</Typography>
          <TextField
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            fullWidth
            required
            style={{ margin: "1rem 0" }}
          />
          <Typography>Location</Typography>
          <Autocomplete
            id="type"
            freeSolo={false}
            options={locations?.map((option) => option)}
            fullWidth
            value={location}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Location"
                margin="normal"
                variant="outlined"
                required
              />
            )}
            onChange={(e, newvalue) => setLocation(newvalue)}
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

          <Box style={{ marginBottom: "20px" }}>
            <Typography>Upload Image</Typography>
            <FileUpload
              fileControl={ethicsImageUrl}
              onUpdate={(fileUrl) => setEthicsImageUrl(fileUrl)}
              context={context}
            />
          </Box>

          <Typography>Ethics Message</Typography>
          <TextField
            variant="outlined"
            value={ethicsMessage}
            onChange={(e) => setEthicsMessage(e.target.value)}
            label="Ethics Message"
            fullWidth
            required
            style={{ margin: "1rem 0" }}
            multiline
            minRows={10}
          />

          <Box
            style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
              }}
              variant="outlined"
              color="secondary"
              size="large"
              disabled={mutation.isLoading}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#FFCC00",
                color: "#000000",
              }}
              type="submit"
              variant="contained"
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
      </Box>
    </AdminWrapper>
  );
};