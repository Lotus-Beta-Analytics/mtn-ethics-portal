import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import styled from "styled-components";
import { theme } from "../../../../../themes/themes";
import { TopContainer } from "../../../../../styles/styles";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";

type Props = {};

export const PhotoCategories = (props: Props) => {
  return (
    <EmployeeWrapper>
      <PageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
        text="Photo Gallery"
      />
      <Box></Box>
    </EmployeeWrapper>
  );
};
