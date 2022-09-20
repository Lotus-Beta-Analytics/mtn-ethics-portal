import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../themes/themes";

export const AppContainer = styled(Box)({
  width: "85vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const MLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.common.black,
});

export const TopContainer = styled.div<{ bg: string; height: string }>(
  (props) => ({
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url(${props.bg})`,
    width: "100%",
    height: props.height ? props.height : "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "25px",
  })
);

export const HomeItemContainer = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `url(${props.bg})`,
  width: "280px",
  height: "100%",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  paddingLeft: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  color: theme.palette.common.black,
  boxSizing: "border-box",
  justifyContent: "space-between",
  "&:hover": {
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url(${props.bg})`,
    backgroundSize: "cover",
  },
}));

export const CarouselContainer = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url(${props.bg})`,
  width: "100%",
  height: "450px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: theme.spacing(16),
  color: theme.palette.common.white,
  position: "relative",
  top: theme.spacing(17),
}));
