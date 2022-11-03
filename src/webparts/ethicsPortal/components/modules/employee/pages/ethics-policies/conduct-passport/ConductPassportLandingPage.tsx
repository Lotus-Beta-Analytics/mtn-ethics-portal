import { Box } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../../shared/components/Navigation/page-navigation/PageNavigation";

const pageMenu: PageNav[] = [
  {
    id: 1,
    text: "Conduct Passport write-up",
    link: "conduct-passport/posts",
  },
  {
    id: 2,
    text: "Conduct Passport Policy",
    link: "conduct-passport/policy",
  },
  {
    id: 3,
    text: "Conduct Passport Resources",
    link: "conduct-passport/resources",
  },
];

export const ConductPassportLandingPage = () => {
  return (
    <EmployeeWrapper
      pageMenu={pageMenu}
      pageNavigation={true}
      backButton={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/happy-excited-colleagues-using-laptop-video-call.png"
        text="Conduct Passport"
      />
      <Box> </Box>
    </EmployeeWrapper>
  );
};
