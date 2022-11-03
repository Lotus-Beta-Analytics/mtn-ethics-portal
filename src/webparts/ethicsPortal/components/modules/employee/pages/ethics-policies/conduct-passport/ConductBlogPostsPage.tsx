import * as React from "react";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { WriteUpLandingComponent } from "../../../components/WriteUpLandingComponent";

export const ConductBlogPostsPage = () => {
  return (
    <WriteUpLandingComponent
      backgroundImage="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/happy-excited-colleagues-using-laptop-video-call.png"
      pageTitle="Conduct Passport"
      filter={BlogSectionEnums.Conduct}
    />
  );
};
