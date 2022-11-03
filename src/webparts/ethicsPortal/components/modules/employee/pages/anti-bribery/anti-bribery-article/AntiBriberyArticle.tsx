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
import { WriteUpLandingComponent } from "../../../components/WriteUpLandingComponent";

export const AntiBriberyWriteUpLanding = () => {
 

  return (
<WriteUpLandingComponent
backgroundImage="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/government-officials-receiving-bribe-money-from-businessman-concept-corruption-antibribery.png?csf=1&web=1&e=AUOvdx"
pageTitle="Anti Bribery and Corruption"
filter={BlogSectionEnums.Anti_bribery}
/>
  );
};
