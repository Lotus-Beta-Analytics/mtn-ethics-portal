import * as React from "react";
import { DoumentEditorButton } from "../../DocumentEditor";
import ImageIcon from "@material-ui/icons/Image";
import { PictureModal } from "./PictureModal";
import { WebContext } from "../../../../../../../EthicsPortal";
import { sp } from "@pnp/sp";

export const ImageMenu = ({ editor }) => {
  const [open, setOpen] = React.useState(false);
  const { context } = React.useContext(WebContext);

  return (
    <>
      {open && (
        <PictureModal
          openModal={open}
          close={async (result) => {
            setOpen(false);
            if (!result) return;
            const res = await sp.web
              .getFolderByServerRelativeUrl("assets")
              .files.add(`${result?.file?.name}`, result?.file?.name, true);
            await res.file.listItemAllFields.get();
            const src = `${context.pageContext.web.absoluteUrl}/assets/${result?.file?.name}`;
            editor
              .chain()
              .focus()
              .setImage({
                src,
                style: { minWidth: "100px", minHeight: "100px" },
              })
              .run();
          }}
        />
      )}
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
