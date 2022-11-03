import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { errorAlert } from "../../../../../utils/toast-messages";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";


import { ResourcesDisplayComponent } from "../../../components/resources/ResourcesDisplayComponent";

export const GiftEntertainmentTrainingLanding = () => {
 
  return (
    <ResourcesDisplayComponent
      backgroundImage="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/gift%26entertainmnet.png?csf=1&web=1&e=ANsodQ"
      pageTitle="Gift and Entertainment Training Slides"
      filter={TrainingCategoryEnum.Gift_Entertainment}
    />
  );
};

