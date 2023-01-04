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
<<<<<<< HEAD
      style={{ gap: ".5rem", gridTemplateColumns: ".5fr 1.5fr" }}
      width="80%"
=======
      style={{ gap: ".2rem", gridTemplateColumns: ".5fr 1fr" }}
      width="100%"
>>>>>>> 2a9ed8da66558a652b9e9984133ebe0b9889b72e
      color="#000"
    >
      <Typography
        variant="body2"
<<<<<<< HEAD
        style={{ fontWeight: "bold", fontSize: "10px", marginLeft: "15px" }}
=======
        style={{ fontWeight: "bold", fontSize: "12px", marginLeft: "15px" }}
>>>>>>> 2a9ed8da66558a652b9e9984133ebe0b9889b72e
      >
        {header}:
      </Typography>
      {(() => {
        if (content?.length < 251) {
          return (
            <Typography
              variant="body2"
<<<<<<< HEAD
              style={{ fontWeight: "bold", fontSize: "10px" }}
=======
              style={{ fontWeight: "bold", fontSize: "13px" }}
>>>>>>> 2a9ed8da66558a652b9e9984133ebe0b9889b72e
            >
              {content}
            </Typography>
          );
        }
        return (
          <Typography
            variant="body2"
<<<<<<< HEAD
            style={{ fontWeight: "bold", fontSize: "10px" }}
=======
            style={{ fontWeight: "bold", fontSize: "13px" }}
>>>>>>> 2a9ed8da66558a652b9e9984133ebe0b9889b72e
          >
            {content?.substring(0, 250)}...
          </Typography>
        );
      })()}
    </Box>
  );
};
