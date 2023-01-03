import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";
import { Container } from "../ethics-policies-management/components/PolicyDetailWrapper";
import { getAllRecognition } from "./apis/GetAllRecognition";
import { RecognitionTable } from "./components/RecognitionTable";
import "./styles.css";
import { Typography, Button } from "@material-ui/core";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { CancelButton } from "../../../shared/components/buttons/CancelButton";
import { ButtonContainerStyles } from "../../../shared/components/TableCompHelpers";

// type Props = {
//   context: WebPartContext;
//   buttonLabel: string;
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

// };

export const EthicsActivitesTable = ({ context }) => {
  const [component, setComponent] = React.useState("form");
  const [secComponent, setSecComponent] = React.useState("manage-form");

  const [activitiesTitle, setActivitiesTitle] = React.useState("");
  const [ethicsImageUrl, setEthicsImageUrl] = React.useState("");

  const { data, isLoading, isError } = useQuery<any>(
    ["getAllRecognition"],
    getAllRecognition
  );

  if (isError) return <>An Error Occured...</>;

  return (
    <AdminWrapper>
      <Container
        styles={{
          minHeight: "100vh",
        }}
      >
        <div className="table__title">
          <Select
            value={component}
            onChange={(e) => setComponent(e.target.value as string)}
          >
            <MenuItem value="form">Photos</MenuItem>
            <MenuItem value="table">Videos</MenuItem>
            <MenuItem value="table-up">Write-Ups</MenuItem>
          </Select>

          <Select
            value={secComponent}
            onChange={(e) => setSecComponent(e.target.value as string)}
          >
            <MenuItem value="manage-form">Manage Photos</MenuItem>
            <MenuItem value="add-photo">Add Photo</MenuItem>
          </Select>
        </div>
        <Box>
          {(() => {
            if (secComponent === "manage-form") {
              return (
                <RecognitionTable
                  recognition={data}
                  loading={isLoading}
                  title="Ethics Champions Activities"
                />
              );
            }

            return (
              <form>
                <TextField
                  variant="outlined"
                  value={activitiesTitle}
                  onChange={(e) => setActivitiesTitle(e.target.value)}
                  label="Ethics Activity Title"
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
                    // label="Upload Image"
                  />
                </Box>
                <Box
                  style={{
                    ...ButtonContainerStyles,
                  }}
                  mt={3}
                >
                  <CancelButton />
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    endIcon={
                      isLoading ? (
                        <CircularProgress size={20} color="secondary" />
                      ) : (
                        <></>
                      )
                    }
                  >
                    {/* {buttonLabel} */}
                  </Button>
                </Box>
              </form>
            );
          })()}
        </Box>
      </Container>
    </AdminWrapper>
  );
};
