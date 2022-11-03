import * as React from "react";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { WriteUpLandingComponent } from "../../../components/WriteUpLandingComponent";

export const PrivacyBlogPostsPage = () => {
  return (
    <WriteUpLandingComponent
      backgroundImage="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/privacy.png"
      pageTitle="Privacy and Data Protection"
      filter={BlogSectionEnums.Privacy}
    />
  );
};
