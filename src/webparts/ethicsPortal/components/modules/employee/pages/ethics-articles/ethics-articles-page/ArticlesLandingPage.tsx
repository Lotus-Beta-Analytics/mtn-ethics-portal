import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ImageContainerEthics, MLink } from "../../../../../styles/styles";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { MButton } from "../../../../shared/components/buttons/MButton";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";

const pageMenu = [
  { id: 1, text: "Ethics Articles Blog", link: "/ethics/article/blog" },
];

export const ArticlesLandingPage = () => {
  return (
    <EmployeeWrapper
      pageNavigation={true}
      backButton={false}
      showFooter={true}
      pageMenu={pageMenu}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article-ethics.png"
        text="Ethics Articles"
      />
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          // width: "980px",
          height: "400px",
          margin: "auto",
          marginTop: "20px",
          position: "relative",
          marginBottom: "20px",
          padding: "0.5rem",
          gap: "1.5rem",
          backgroundSize: "cover",
          borderRadius: "2rem",
          overflow: "hidden",
        }}
      >
        {homeItems.map((item) => (
          <>
            <ImageContainerEthics bg={item.image}>
              <Box></Box>
              <Typography
                variant="h5"
                style={{
                  fontStyle: "italic",
                  // paddingRight: "13rem",
                  boxSizing: "border-box",
                  fontWeight: "bold",
                  fontSize: "20px",
                  padding: ".5rem",
                  width: "55%",
                }}
              >
                {item.title}
              </Typography>
              <MLink
                to={item.link}
                style={{
                  marginTop: "60px",
                  padding: ".5rem",
                }}
              >
                <MButton endIcon={<FaAngleDoubleRight />} text="Read More..." />
              </MLink>
            </ImageContainerEthics>
          </>
        ))}
      </Box>
    </EmployeeWrapper>
  );
};

const homeItems = [
  {
    id: 1,
    title: "Ethical Leadership Series",
    link: "/ethical/leadership/series",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article1.png",
  },
  {
    id: 1,
    title: "Dealing with Harassement at Work",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article2.png",
  },
  {
    id: 1,
    title: "Ethical Leadership Series",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article3.png",
  },
];
