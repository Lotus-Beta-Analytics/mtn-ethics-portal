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
      <Typography variant="body2" style={{ fontWeight: "bold" }}>
        {header}:
      </Typography>
      <Typography variant="body2">{content}</Typography>
    </Box>
  );
};
