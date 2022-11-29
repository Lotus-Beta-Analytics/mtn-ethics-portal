import { Box, Typography } from "@material-ui/core";
import React from "react";

type Props = {
  header: string;
  content: string;
};

export const Label: React.FC<Props> = ({ header, content }) => {
  return (
    <Box
      display="grid"
      style={{ gap: ".5rem", gridTemplateColumns: ".5fr 1.5fr" }}
      width="100%"
      color="#000"
    >
      <Typography
        variant="body2"
        style={{ fontWeight: "bold", fontSize: "13px", marginLeft: "15px" }}
      >
        {header}:
      </Typography>
      {(() => {
        if (content?.length < 61) {
          return (
            <Typography
              variant="body2"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {content}
            </Typography>
          );
        }
        return (
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", fontSize: "14px" }}
          >
            {content.substring(0, 60)}...
          </Typography>
        );
      })()}
    </Box>
  );
};
