import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { TopContainer } from "../../../../../styles/styles";
import { theme } from "../../../../../themes/themes";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../../shared/components/Navigation/page-navigation/PageNavigation";

const pageMenu: PageNav[] = [
  {
    id: 1,
    text: "Conflict of interest write-up",
    link: "/conflict/writeup",
  },
  {
    id: 2,
    text: "Conflict of interest policy",
    link: "",
  },
  {
    id: 3,
    text: "Conflict of interest training slides",
    link: "",
  },
  {
    id: 4,
    text: "Declare conflict of interest",
    link: "",
  },
];

export const ConflictOfInterestLanding = () => {
  return (
    <EmployeeWrapper
      pageMenu={pageMenu}
      pageNavigation={true}
      backButton={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
        text="Conflict Of Interest"
      />
      <Box> </Box>
    </EmployeeWrapper>
  );
};
