import { Box } from "@material-ui/core";
import * as React from "react";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";

export const ConflictOfInterestWriteUpLanding = () => {
  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
          text="Conflict Of Interest Write-Ups"
        />
        <PostPreviewContainer>
          {posts.map((post) => (
            <PostPreviewItem post={post} key={post.id} />
          ))}
        </PostPreviewContainer>
      </PageWrapper>
    </EmployeeWrapper>
  );
};

const posts = [
  { id: 1, title: "lorem ipsum", date: "16th September" },
  { id: 2, title: "lorem ipsum", date: "16th September" },
  { id: 3, title: "lorem ipsum", date: "16th September" },
];
