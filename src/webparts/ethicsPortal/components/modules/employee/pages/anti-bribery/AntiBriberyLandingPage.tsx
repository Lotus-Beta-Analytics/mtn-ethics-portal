import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import "./gift.css"
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../shared/components/Navigation/page-navigation/PageNavigation";


const pageMenu: PageNav[] = [
    {
      id: 1,
      text: "Anti bribery write-up",
      link: "/antibribery/writeup",
    },
    {
      id: 2,
      text: "Anti bribery policy",
      link: "/antibribery/policy",
    },
    {
      id: 3,
      text: "Anti bribery Training",
      link: "/antibribery/training",
    },
   
  ];

export const AntiBribery = () => {
  return (
    <EmployeeWrapper
pageMenu={pageMenu}
pageNavigation={true}
backButton={false}
>
<LandingPageHeaderWithImage
  bg="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/government-officials-receiving-bribe-money-from-businessman-concept-corruption-antibribery.png?csf=1&web=1&e=AUOvdx"
  text="Anti Bribery and Corruption"
/>
<Box> </Box>
</EmployeeWrapper>
  );
};

