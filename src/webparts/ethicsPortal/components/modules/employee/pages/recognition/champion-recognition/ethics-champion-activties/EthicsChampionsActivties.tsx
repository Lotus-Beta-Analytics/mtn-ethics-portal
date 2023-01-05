import * as React from "react";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../../shared/components/LandingPageHeaderWithImage";

export const EthicsChampionsActivties = () => {
  return (
    <EmployeeWrapper pageNavigation={false} backButton={true} showFooter={true}>
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png"
        text="Champion Recognition"
      />
    </EmployeeWrapper>
  );
};
