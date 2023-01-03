import styled from "styled-components";
import React from "react";
import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { errorAlert } from "../../../../../utils/toast-messages";

export const EthicsChampionSpotLight = () => {
  const [champion, setChampion] = React.useState("");
  React.useEffect(() => {
    asyncHandler(async () => {
      const res = await sp.web.lists.getByTitle("SPOTLIGHT").items.get();
      console.log(res);
    })();
  }, []);
  return champion ? (
    <StyledContainer>
      <CurvedImageContainer bg={champion}></CurvedImageContainer>
      <Box></Box>
    </StyledContainer>
  ) : (
    <Box
      style={{
        flex: "0.5",
      }}
    >
      <ImageContainer
        bg={
          "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/PostFiles/who-2.png"
        }
      ></ImageContainer>
    </Box>
  );
};

const StyledContainer = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `url('${props.bg}')`,
  flex: "0.5",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "1rem",
  borderRadius: "26px",
}));
const CurvedImageContainer = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `url('${props.bg}')`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "1rem",
  borderRadius: "26px",
}));
const ImageContainer = styled.div<{ bg: string }>((props) => ({
  backgroundImage: `url('${props.bg}')`,
  width: "100%",
  height: "100%",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "1rem",
  borderRadius: "26px",
}));

const asyncHandler = (fn) => () =>
  Promise.resolve(fn()).catch((err) => {
    console.log(err);
    errorAlert();
  });
