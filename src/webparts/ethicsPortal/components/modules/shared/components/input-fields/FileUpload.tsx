import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import * as React from "react";
import Dropzone, { Accept } from "react-dropzone";
import { FaFile } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import { fileUploadErrorDisplay } from "../../../../utils/fileUploadErrorFeedback";
import { errorAlert } from "../../../../utils/toast-messages";

type Props = {
  fileControl: string;
  onUpdate: React.Dispatch<string>;
  context: WebPartContext;
  accept?: Accept;
};

export const FileUpload: React.FC<Props> = ({
  fileControl,
  onUpdate,
  context,
  accept = { "image/*": [".jpg", ".jpeg"] },
}) => {
  const toast = useToasts().addToast;

  const [upload, setUpload] = React.useState(false);

  const fileHandler = (file: File) => {
    const pix = file;
    setUpload(true);
    sp.web
      .getFolderByServerRelativeUrl("assets")
      .files.add(`${pix.name}`, pix, true)
      .then((result) => {
        result.file.listItemAllFields.get().then((listItemAllFields) => {
          onUpdate(`${context.pageContext.web.absoluteUrl}/assets/${pix.name}`);
          setUpload(false);
        });
      })
      .catch((e) => {
        setUpload(false);
        errorAlert(toast);
        console.log(e.response);
      });
  };

  return (
    <>
      {!!fileControl && (
        <Box
          style={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderRadius: "0.5rem",
            width: "content-fit",
            justifyContent: "space-between",
            boxSizing: "border-box",
            height: "200px",
          }}
        >
          {/([A-Z])\.mp4/i.test(fileControl) ? (
            <iframe src={fileControl} width="200px" height="150px"></iframe>
          ) : (
            <img
              src={fileControl}
              width="200px"
              height="150px"
              style={{
                objectFit: "cover",
              }}
            />
          )}

          <IconButton onClick={() => onUpdate(null)}>
            <ClearRoundedIcon />
          </IconButton>
        </Box>
      )}

      <Dropzone
        onDrop={(acceptedFiles, error) => {
          if (error?.length) return;
          fileHandler(acceptedFiles[0]);
        }}
        accept={accept}
        multiple={false}
        maxSize={10000000}
        onDropRejected={(error) => {
          fileUploadErrorDisplay(toast, error);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <Box
              {...getRootProps()}
              sx={{
                border: "1px dashed #707070",
                borderRadius: "6px",
                padding: "1.5rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <input {...getInputProps()} />
              <p>
                Drag and drop file <br></br> -or-{" "}
              </p>
              <Button
                style={{ margin: 0, textTransform: "none" }}
                variant="contained"
                color="secondary"
                endIcon={upload ? <CircularProgress size={20} /> : <FaFile />}
                size="large"
              >
                Browse Computer Files
              </Button>
            </Box>
          </section>
        )}
      </Dropzone>
    </>
  );
};
