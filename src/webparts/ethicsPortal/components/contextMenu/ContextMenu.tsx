import { Box, ClickAwayListener, Popper, styled } from "@material-ui/core";
import * as React from "react";
import { FC } from "react";

type Props = {
  handleClickAway: (e: MouseEvent | TouchEvent) => void;
  open: boolean;
  anchorEl: HTMLElement;
  id: any;
};
export const ContextMenu: FC<Props> = ({
  handleClickAway,
  open,
  anchorEl,
  children,
  id,
}) => {
  return (
    //@ts-ignore
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        style={{
          display: "flex",
          justifyContent: "end",
          width: "200px",
          height: "250px",
        }}
      >
        {open ? (
          <Popper open={open} anchorEl={anchorEl} placement="bottom" id={id}>
            <ContextMenuWrapper>{children}</ContextMenuWrapper>
          </Popper>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export const ContextMenuWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "none",
  textTransform: "none",
  boxShadow: "#00000003 0px 3px 6px",
  mt: 0.5,
  borderRadius: "0.5rem",
  height: "inherit",
  width: "inherit",
  overflow: "0.5rem",
  border: "none",
}));
