import * as React from "react";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";
import { ResourcesDisplayComponent } from "../../../components/resources/ResourcesDisplayComponent";

export const ConductPassportResourcesPage = () => {
  return (
    <ResourcesDisplayComponent
      backgroundImage="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/happy-excited-colleagues-using-laptop-video-call.png"
      pageTitle="Conduct Passport Resources"
      filter={TrainingCategoryEnum.Conduct_Passport}
    />
  );
};
