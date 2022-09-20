import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import styled from "styled-components";
import { theme } from "../../../../../themes/themes";
import { TopContainer } from "../../../../../styles/styles";

type Props = {};

export const PhotoCategories = (props: Props) => {
  return (
    <EmployeeWrapper>
      <TopContainer bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png">
        <Typography
          variant="h1"
          style={{
            color: theme.palette.common.white,
          }}
        >
          Photo Gallery
        </Typography>
      </TopContainer>
      <Box></Box>
    </EmployeeWrapper>
  );
};
