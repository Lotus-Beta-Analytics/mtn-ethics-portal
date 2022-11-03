import * as React from "react";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { PolicyComponent } from "../../../components/PolicyComponent";

export const ConductPolicyPage = () => {
  return <PolicyComponent section={BlogSectionEnums.Conduct} />;
};
