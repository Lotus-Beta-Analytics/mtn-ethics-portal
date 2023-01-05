import React from "react";
import { ContentType } from "../../../../../../admin/pages/recognition/EthicsActivity";
import { Box,  Typography } from "@material-ui/core";

type Props = {
  EthicsActivitiesTitle: string;
  content: string;
  ActivityType: ContentType;
};

export const ListItem: React.FC<Props> = ({
  content,
  EthicsActivitiesTitle: title,
  ActivityType: type,
}) => {
  const getContentType = () => {
    switch (type) {
      case ContentType.Photo:
        return (
          <img
            src={content}
            width="300px"
            height="250px"
            style={{
              objectFit: "contain",
            }}
          />
        );
      case ContentType.Video:
        return (
          <video
            src={content}
            width="300px"
            height="250px"
            style={{
              objectFit: "cover",
            }}
            controls
            autoPlay={false}
          />
        );
      case ContentType.Write_Up:
        return (
          <Typography variant="body2" style={{ fontStyle: "italic" }}>
            {content}
          </Typography>
        );
    }
  };

  return (
    <Box
      style={{
        borderBottom: "1px solid #e6e6e6",
        boxSizing: "border-box",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {getContentType()}
    </Box>
  );
};
