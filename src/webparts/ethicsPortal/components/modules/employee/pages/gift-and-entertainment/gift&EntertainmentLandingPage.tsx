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
        text="Gifts and Entertainment"
      />
      <Box className="giftHomeContainer">
       <h2>MTNN Gift and Entertainment </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo, semper pellentesque id lacus, purus nisl nunc. Porttitor eros mi leo augue pulvinar vitae. Semper habitasse lacinia ultricies vestibulum quis lorem imperdiet. Hendrerit a pellentesque pharetra elementum, magna leo volutpat aenean massa.</p>

        <p>Quis lacinia dignissim vestibulum duis leo magna. Sed libero libero pretium aliquet orci quis sodales. Convallis ullamcorper commodo nisi leo interdum massa neque vitae netus. Dolor feugiat nunc mauris.</p>

        <p>Quis lacinia dignissim vestibulum duis leo magna. Sed libero libero pretium aliquet orci quis sodales. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo, semper pellentesque id lacus, purus nisl nunc. Porttitor eros mi leo augue pulvinar vitae. Semper habitasse lacinia ultricies vestibulum quis lorem imperdiet. Hendrerit a pellentesque pharetra elementum, magna leo volutpat aenean massa.</p>

        <p>Quis lacinia dignissim vestibulum duis leo magna. Sed libero libero pretium aliquet orci quis sodales. Convallis ullamcorper commodo nisi leo interdum massa neque vitae netus. Dolor feugiat nunc mauris, aliquet hac in facilisis. Nulla tortor, vel suspendisse pellentesque diam. Ut vestibulum donec magna quis cursus velit. Sit pretium vel sed id convallis sed ac. Id lacus sit viverra vulputate auctor massa, purus, nullam eu.</p>

        <p>Quis lacinia dignissim vestibulum duis leo magna. Sed libero libero pretium aliquet orci quis sodales. Convallis ullamcorper commodo nisi leo interdum massa neque vitae netus. Dolor feugiat nunc mauris, aliquet hac in facilisis. Nulla tortor, vel suspendisse pellentesque diam. Ut vestibulum donec magna quis cursus velit. Sit pretium vel sed id convallis sed ac. Id lacus sit viverra vulputate auctor massa, purus, nullam eu.</p>

      </Box>
    </EmployeeWrapper>
  );
};
