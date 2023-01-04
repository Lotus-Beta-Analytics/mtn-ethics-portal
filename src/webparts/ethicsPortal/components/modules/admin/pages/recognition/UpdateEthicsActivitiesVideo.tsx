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
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { CancelButton } from "../../../shared/components/buttons/CancelButton";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";
import { ButtonContainerStyles } from "../../../shared/components/TableCompHelpers";
import { Container } from "../ethics-policies-management/components/PolicyDetailWrapper";
import { editEthicsActivitiesPhoto } from "./apis/EditRecognition";

export const UpdateEthicsActivitiesVideos: React.FC<{
  context: WebPartContext;
}> = ({ context }) => {
  const { activitiesPhotoId } = useParams();

  const queryClient = useQueryClient();
  const toast = useToasts().addToast;

  const [file, setFile] = React.useState("");
  const [name, setName] = React.useState("");

  const { data, isLoading, isError } = useQuery<any>(
    ["getEthicsPhotoActivities", activitiesPhotoId],
    async () => {
      try {
        const res = await sp.web.lists
          .getByTitle("EthicsActivitiesPhoto")
          .items.getById(activitiesPhotoId)
          .get();
        setFile(res?.PhotoFile);
        setName(res?.EthicsActivitiesPhotoTitle);

        return res;
      } catch (err) {
        return err;
      }
    },
    {
      enabled: !!activitiesPhotoId,
    }
  );

  const history = useHistory();

  const mutation = useMutation(
    () =>
      editEthicsActivitiesPhoto(activitiesPhotoId, {
        EthicsActivitiesPhotoTitle: name,
        PhotoFile: file,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getAllEthicsPhotoActivities"]);
        successAlert(toast, "Ethics Activities Updated Successfully");
        setTimeout(() => {
          history.goBack();
        });
      },
      onError: () => {
        errorAlert(toast);
      },
    }
  );

  if (isError) return <>An error occured</>;

  if (isLoading) return <>Loading...</>;

  return (
    <AdminWrapper>
      <Container style={{ minHeight: "100vh" }}>
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
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Ethics Activity Title"
            fullWidth
            required
            style={{ margin: "1rem 0" }}
          />
          <Box>
            <Typography>Upload Image</Typography>
            <FileUpload
              fileControl={file}
              onUpdate={(fileUrl) => setFile(fileUrl)}
              context={context}
            />
          </Box>

          <Box
            style={{
              ...ButtonContainerStyles,
            }}
            my={2}
          >
            <CancelButton isLoading={mutation.isLoading} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={
                mutation.isLoading ? <CircularProgress size={20} /> : <Add />
              }
              disabled={mutation.isLoading}
            >
              Update
            </Button>
          </Box>
        </form>
      </Container>
    </AdminWrapper>
  );
};
