import * as React from "react";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";
import { ResourcesDisplayComponent } from "../../../components/resources/ResourcesDisplayComponent";

export const PrivacyResourcesPage = () => {
  return (
    <ResourcesDisplayComponent
      backgroundImage="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/privacy.png"
      pageTitle="Privacy and Data Protection Resources"
      filter={TrainingCategoryEnum.Privacy_Data_Protection}
    />
  );
};
