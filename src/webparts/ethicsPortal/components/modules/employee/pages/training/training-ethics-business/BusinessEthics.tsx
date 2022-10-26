import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import "./styles.css";

export const BusinessEthics = () => {
  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-training.png"
          text="Training"
        />
        <div className="titleH3">
          <h3>Business Ethics Everyone's Responsibilities Videos</h3>
        </div>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
