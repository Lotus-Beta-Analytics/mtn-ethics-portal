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

export const GiftandEntertainmentPolicy = () => {
  return (
    <PolicyComponent section={BlogSectionEnums.Gift} />
  );
};
