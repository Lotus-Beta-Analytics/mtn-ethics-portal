import * as React from "react";
import { DoumentEditorButton } from "../../DocumentEditor";
import ImageIcon from "@material-ui/icons/Image";

export const ImageMenu = ({ editor }) => {
  const [open, setOpen] = React.useState(false);

  const blobToDataURL = (blob, callback) => {
    const a = new FileReader();
    a.onload = function (e) {
      callback(e.target.result);
    };
    a.readAsDataURL(blob);
  };

  return (
    <>
      <DoumentEditorButton
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <ImageIcon fontSize="small" />
      </DoumentEditorButton>
    </>
  );
};
