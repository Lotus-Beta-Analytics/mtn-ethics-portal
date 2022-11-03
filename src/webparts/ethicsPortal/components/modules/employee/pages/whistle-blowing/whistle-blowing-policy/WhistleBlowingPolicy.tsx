import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { PageNav } from "../../../../shared/components/Navigation/page-navigation/PageNavigation";
import { PolicyComponent } from "../../../components/PolicyComponent";
import "../gift.css"



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
      link: "/whistleblowing/Training",
    },
   
  ];

export const WhistleBlowingPolicy = () => {
  return (
    <PolicyComponent section={BlogSectionEnums.Whistle_Blowing} />
  );
};
