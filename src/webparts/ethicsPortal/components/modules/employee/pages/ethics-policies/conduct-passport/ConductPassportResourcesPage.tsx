import * as React from "react";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";
import { ResourcesDisplayComponent } from "../../../components/resources/ResourcesDisplayComponent";

export const ConductPassportResourcesPage = () => {
  return (
    <ResourcesDisplayComponent
      backgroundImage=""
      pageTitle="Conduct Passport Resources"
      filter={TrainingCategoryEnum.Conduct_Passport}
    />
  );
};
