import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { TopContainer } from "../../../../styles/styles";
import { theme } from "../../../../themes/themes";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";

type Props = {};

export const VideoCategories = (props: Props) => {
  return (
    <EmployeeWrapper>
      <TopContainer bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png">
        <Typography
          variant="h1"
          style={{
            color: theme.palette.common.white,
          }}
        >
          Video Gallery
        </Typography>
      </TopContainer>
      <Box></Box>
    </EmployeeWrapper>
  );
};
