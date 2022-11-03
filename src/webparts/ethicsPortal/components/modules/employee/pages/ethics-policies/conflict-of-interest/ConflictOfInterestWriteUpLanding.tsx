import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { errorAlert } from "../../../../../utils/toast-messages";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";

import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";
import { PaginationContainer } from "../../../components/pagination/PaginationContainer";
import { WriteUpLandingComponent } from "../../../components/WriteUpLandingComponent";

export const ConflictOfInterestWriteUpLanding = () => {
  return (
    <WriteUpLandingComponent
      backgroundImage="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
      pageTitle="Conflict of Interest Write Up"
      filter={BlogSectionEnums.Conflict}
    />
  );
};
