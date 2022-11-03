import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../../shared/components/Navigation/page-navigation/PageNavigation";
import { PolicyComponent } from "../../../components/PolicyComponent";
import "../gift.css"



const pageMenu: PageNav[] = [
  {
    id: 1,
    text: "Anti Bribery write-up",
    link: "/antibribery/writeup",
  },
  {
    id: 2,
    text: "Anti Bribery policy",
    link: "/antibribery/policy",
  },
  {
    id: 3,
    text: "Anti Bribery Training",
    link: "/antibribery/training",
  },
 
];

export const AntiBriberyPolicy = () => {
  return (
    <PolicyComponent section={BlogSectionEnums.Anti_bribery} />
  );
};
