import * as React from "react";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";
import { ResourcesDisplayComponent } from "../../../components/resources/ResourcesDisplayComponent";

export const ConflictResourcesPage = () => {
  return (
    <ResourcesDisplayComponent
      backgroundImage="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
      pageTitle="Conflict of Interest Resources"
      filter={TrainingCategoryEnum.Conflict_Interest}
    />
  );
};
