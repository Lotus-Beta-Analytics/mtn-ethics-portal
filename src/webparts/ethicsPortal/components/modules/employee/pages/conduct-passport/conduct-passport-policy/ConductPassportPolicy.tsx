import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PageNav } from "../../../../shared/components/Navigation/page-navigation/PageNavigation";
import "../gift.css"



const pageMenu: PageNav[] = [
  {
    id: 1,
    text: "Conduct Passport write-up",
    link: "/conductpassport/writeup",
  },
  {
    id: 2,
    text: "Conduct Passport policy",
    link: "/conductpassport/policy",
  },
  {
    id: 3,
    text: "Conduct Passport Videos",
    link: "/conductpassport/videos",
  },
 
];

export const ConductPassportPolicy = () => {
  return (
    <EmployeeWrapper
      pageMenu={pageMenu}
      pageNavigation={true}
      backButton={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/happy-excited-colleagues-using-laptop-video-call.png?csf=1&web=1&e=2Ygsjp"
        text="Conduct Passport Policy"
      />
      <Box className="giftHomeContainer">
       <h2>Conduct Passport Policy </h2>

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
