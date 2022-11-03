import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import "./gift.css"
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../shared/components/Navigation/page-navigation/PageNavigation";


const pageMenu: PageNav[] = [
    {
      id: 1,
      text: "Whistle Blowing write-up",
      link: "/whistleblowing/writeup",
    },
    {
      id: 2,
      text: "Whistle Blowing policy",
      link: "/whistleblowing/policy",
    },
    {
      id: 3,
      text: "Whistle Blowing Training",
      link: "/whistleblowing/training",
    },
   
  ];

export const WhistleBLowing = () => {
  return (
    <EmployeeWrapper
    pageMenu={pageMenu}
    pageNavigation={true}
    backButton={false}
    >
    <LandingPageHeaderWithImage
      bg="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/classic-gold-metal-coaches-whistle-white-background-3d-rendering.png?csf=1&web=1&e=hfJAnE"
      text="Whistle Blowing"
    />
    <Box> </Box>
    </EmployeeWrapper>
  );
};


