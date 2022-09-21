import { Box } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";

export const VideoCategories = () => {
  return (
    <EmployeeWrapper>
      <PageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
        text="Video Gallery"
      />
      <Box></Box>
    </EmployeeWrapper>
  );
};
