import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { FaFilePdf, FaFilePowerpoint, FaImage, FaVideo } from "react-icons/fa";
import { TrainingType } from "../../../admin/pages/training/types/TrainingTypes";

type Props = {
  onClick: () => void;
  resource: TrainingType;
};

export const ResourcePreview: React.FC<Props> = ({ onClick, resource }) => {
  return (
    <Box
      onClick={() => {
        onClick();
      }}
      style={{ cursor: "pointer" }}
      width="auto"
    >
      <Box>
        {/([A-Z])\.mp4/i.test(resource?.Video) ? (
          <FaVideo className="icon" />
        ) : /([A-Z])\.pdf/i.test(resource?.Video) ? (
          <FaFilePdf className="icon" />
        ) : /([A-Z])\.pptx/i.test(resource?.Video) ? (
          <FaFilePowerpoint className="icon" />
        ) : (
          <FaImage className="icon" />
        )}
      </Box>
      <Typography>{resource?.TrainingTitle}</Typography>
    </Box>
  );
};
