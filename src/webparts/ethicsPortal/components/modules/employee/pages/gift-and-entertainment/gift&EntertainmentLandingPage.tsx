import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import "./gift.css"
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../shared/components/Navigation/page-navigation/PageNavigation";


const pageMenu: PageNav[] = [
    {
      id: 1,
      text: "Gift and Entertainment write-up",
      link: "/giftandentertainment/writeup",
    },
    {
      id: 2,
      text: "Gift and Entertainment policy",
      link: "/giftandentertainment/policy",
    },
    {
      id: 3,
      text: "Gift and Entertainment training slides",
      link: "/giftandentertainment/trainingslides",
    },
   
  ];

export const GiftandEntertainment = () => {
  return (
    <EmployeeWrapper
    pageMenu={pageMenu}
    pageNavigation={true}
    backButton={false}
    >
    <LandingPageHeaderWithImage
      bg="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/gift%26entertainmnet.png?csf=1&web=1&e=ANsodQ"
      text="Gift and Entertainment"
    />
    <Box> </Box>
    </EmployeeWrapper>
  );
};


