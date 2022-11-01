import {
  Box,
  Button,
  ButtonProps,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import "./styles/styles.css";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaDownload,
} from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  data: string;
};

export const ViewerWrapper: React.FC<Props> = ({ children, onClose, data }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        overflowX: "hidden",
        height: "100%",
        gap: 0.5,
      }}
    >
      <Box style={{ flex: 1 }}>{children}</Box>
      <DrawerContainer open={open}>
        <Box
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
          }}
        >
          <Tooltip
            title={`${open ? "Hide Content Box" : "Show Content Box"}`}
            arrow
          >
            {open ? (
              <FaAngleDoubleRight style={{ fontSize: "1.5rem" }} />
            ) : (
              <FaAngleDoubleLeft style={{ fontSize: "1.5rem" }} />
            )}
          </Tooltip>
        </Box>

        {open && (
          <Tooltip title="Close" arrow>
            <IconButton
              style={{
                position: "absolute",
                right: 55,
                zIndex: 999,
                top: 30,
              }}
              onClick={() => onClose()}
            >
              <CloseIcon style={{ color: "#fff", fontSize: "1.5rem" }} />
            </IconButton>
          </Tooltip>
        )}

        <Box
          style={{
            display: open ? "flex" : "none",
            width: "100%",
            height: open ? "100%" : "40px",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
            mt={5}
          >
            <Box width="150px" height="60px"></Box>

            <Box>
              <Typography
                style={{
                  color: "#707070",
                  fontWeight: "bold",
                }}
                variant="body2"
              >
                Course Title
              </Typography>

              <Typography
                variant="body2"
                style={{ color: "#ABABAB" }}
              ></Typography>
            </Box>
          </Box>
        </Box>
      </DrawerContainer>
    </Box>
  );
};

const DrawerContainer = styled.div<{ open: boolean }>((props) => ({
  display: "flex",
  backgroundColor: props.open ? "#003049" : "none",
  height: props?.open ? "100%" : "30px",
  transition: "width .3s ease-in-out",
  boxSizing: "border-box",
  padding: "1rem",
  flex: props?.open ? 0.5 : 0,
  color: props.open ? "#fff" : "#003049",
}));

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "#fff",
  backgroundColor: "none",
  outline: "1px solid #fff",
  border: "1px solid #fff",
}));
