import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../themes/themes";

export const AppContainer = styled(Box)({
  width: "85vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.common.white,
});

export const MLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.common.black,
});

export const TopContainer = styled.div<{ bg: string; height: string }>(
  (props) => ({
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    margin: "0 auto",
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
  backgroundImage: `url(${props.bg})`,
  width: "280px",
  height: "100%",
  backgroundSize: "contain",
  // backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  color: theme.palette.common.black,
  boxSizing: "border-box",
  position: "relative",
  // justifyContent: "space-between",
  "&:hover": {
    backgroundImage: `linear-gradient(95.9deg, rgba(0, 0, 0, 0.2) 36.21%, rgba(0, 0, 0, 0) 54.68%),url('${props.bg}')`,
    backgroundSize: "cover",
    borderRadius: "10px",
    // transform: "scale(1.1)",
    // transform: "translateY(0px)",
  },
  "&:hover > *": {
    display: "flex",

    // transition: "all .8s",
    // borderRadius: "10px",
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
  position: "relative",
  top: 0,
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
    minWidth: props?.open ? "350px" : "100px",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    top: "20%",
    minHeight: "300px",
    left: props?.open ? "85%" : "100%",
    boxShadow: "3px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "26px",
    transition: "all .2s ease-in-out",
    boxSizing: "border-box",
    zIndex: "99",
  })
);
