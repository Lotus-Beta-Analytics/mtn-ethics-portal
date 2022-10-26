import { Box } from "@material-ui/core";
import * as React from "react";
import { BlogContent } from "./BlogContent";
import { DocumentEditor } from "./editor/DocumentEditor";

type Props = {
  onUpdate: React.Dispatch<any>;
};

export const PostEditor: React.FC<Props> = ({ onUpdate }) => {
  return (
    <>
      <Box mt={5} height="300px" width="100%">
        <DocumentEditor onChange={(data, type) => onUpdate({ data, type })} />
      </Box>
    </>
  );
};
