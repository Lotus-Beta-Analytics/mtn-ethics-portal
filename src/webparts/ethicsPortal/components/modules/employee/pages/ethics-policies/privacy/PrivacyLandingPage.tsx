import { Box } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../../shared/components/Navigation/page-navigation/PageNavigation";

const pageMenu: PageNav[] = [
  {
    id: 1,
    text: "Data Protection write-up",
    link: "privacy/posts",
  },
  {
    id: 2,
    text: "Conduct Passport Policy",
    link: "privacy/policy",
  },
  {
    id: 3,
    text: "Conduct Passport Resources",
    link: "privacy/resources",
  },
];

export const PrivacyLandingPage = () => {
  return (
    <EmployeeWrapper
      pageMenu={pageMenu}
      pageNavigation={true}
      backButton={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/privacy.png"
        text="Privacy and Data Protection"
      />
      <Box minHeight="500px"> </Box>
    </EmployeeWrapper>
  );
};
