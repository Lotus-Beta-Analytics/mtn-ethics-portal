import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";

import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";

import { ResourcesDisplayComponent } from "../../../components/resources/ResourcesDisplayComponent";

export const WhistleBlowingTrainingLanding = () => {

  return (
    <ResourcesDisplayComponent
      backgroundImage="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/classic-gold-metal-coaches-whistle-white-background-3d-rendering.png?csf=1&web=1&e=hfJAnE"
      pageTitle="Whistle Blowing Training Slides"
      filter={TrainingCategoryEnum.Whistle_Blowing}
    />
  );
};

