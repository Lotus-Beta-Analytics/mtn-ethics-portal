import React from "react";
import { BlogSectionEnums } from "../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { WriteUpLandingComponent } from "../../components/WriteUpLandingComponent";
import { useParams } from "react-router-dom";

export const WriteUpPage = () => {
  const { sectionId } = useParams();
  return <WriteUpLandingComponent sectionId={sectionId} />;
};
