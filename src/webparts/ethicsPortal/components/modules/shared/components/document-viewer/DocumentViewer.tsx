import { Box, Dialog, DialogContent } from "@material-ui/core";
import * as React from "react";
import { ViewerWrapper } from "./ViewerWrapper";

type Props = {
  open: boolean;
  onClose: () => void;
  url: string;
};

export const DocumentViewer: React.FC<Props> = ({ open, onClose, url }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogContent>
        <Box
          sx={{
            width: "100%",
            height: "80vh",
          }}
        >
          <ViewerWrapper data={url} onClose={onClose}>
            {url && (
              <iframe
                src={url}
                title="file"
                width="100%"
                height="100%"
              ></iframe>
            )}
          </ViewerWrapper>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
