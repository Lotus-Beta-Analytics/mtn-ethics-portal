import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../themes/themes";

export const AppContainer = styled(Box)({
  minWidth: "80vw",
  minHeight: "100vh",
  border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
});

export const MLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.common.black,
});
