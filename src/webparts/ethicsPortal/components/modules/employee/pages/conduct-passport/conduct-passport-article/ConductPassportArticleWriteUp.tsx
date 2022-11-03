import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { errorAlert } from "../../../../../utils/toast-messages";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";

import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";

export const ConductPassportWriteUpLanding = () => {
  const { data, isLoading, isSuccess } = useQuery<any>(["post"], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("Post")
        .items.filter(`PostSection eq '${BlogSectionEnums.Conduct}'`)
        .get();
      return res;
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/happy-excited-colleagues-using-laptop-video-call.png?csf=1&web=1&e=2Ygsjp"
          text="Conduct Passport Write up"
        />

        <PostPreviewContainer>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {data.map((post) => (
                <PostPreviewItem post={post} key={post.Id} />
              ))}
            </>
          )}
        </PostPreviewContainer>
      </PageWrapper>
    </EmployeeWrapper>
  );
};