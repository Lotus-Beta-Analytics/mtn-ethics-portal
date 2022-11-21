import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../themes/themes";

export const AppContainer = styled(Box)({
  minWidth: "95vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.common.white,
  marginRight: "auto",
  boxSizing: "border-box",
  padding: "0.5rem",
});

export const MLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.common.black,
});

export const TopContainer = styled.div<{ bg: string; height: string }>(
  (props) => ({
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
    width: "100%",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
  })
);
export const LandingTopContainer = styled.div<{ bg: string; height: string }>(
  (props) => ({
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
    width: "100%",
    height: props.height ? props.height : "450px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1.5rem",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    top: 0,
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
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
    backgroundSize: "cover",
  },
}));

export const ImageContainerEthics = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
  width: "auto",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  color: theme.palette.common.black,
  boxSizing: "border-box",
  position: "relative",
  borderRadius: "26px",

  "&:hover > *": {
    display: "flex",
    borderRadius: "26px",
  },
}));

export const CarouselContainer = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
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
}));

export const PostPreviewContainer = styled(Box)({
  display: "grid",
  width: "100%",
  height: "60%",
  gridTemplateColumns: "1fr 1fr 1fr",
  boxSizing: "border-box",
});

export const PageNavigationContainer = styled.div<{ open: boolean }>(
  (props) => ({
    minWidth: props?.open ? "250px" : "100px",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    top: "12%",
    minHeight: "250px",
    left: props?.open ? "90%" : "105%",
    boxShadow: "3px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    transition: "all .2s ease-in-out",
    boxSizing: "border-box",
    zIndex: "99",
  })
);
