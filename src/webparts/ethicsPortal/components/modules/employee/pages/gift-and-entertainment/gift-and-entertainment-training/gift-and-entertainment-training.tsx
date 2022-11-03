import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { errorAlert } from "../../../../../utils/toast-messages";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";

import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";

export const GiftEntertainmentTrainingLanding = () => {
  const { data, isLoading, isSuccess } = useQuery<any>(["post"], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("Training")
        .items.filter(`Category eq '${TrainingCategoryEnum.Gift_Entertainment}'`)
        .get();
        console.log(res)
      return res;
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;
const viewHandler = (post) => {
console.log("this us",post.Video)
}
  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/:i:/r/sites/MTNAppDevelopment/ethicsportal/assets/gift%26entertainmnet.png?csf=1&web=1&e=ANsodQ"
          text="Gifts and Entertainment Training"
        />

        <PostPreviewContainer>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {data.map((post) => (
                // <PostPreviewItem post={post} key={post.Id} />
                <div  key={post.Id}>
                  <h1>{post.TrainingTitle}</h1>
                  <button onClick={(post)=>viewHandler(post)}>{post.Video}</button>
                  </div>
              ))}
            </>
          )}
        </PostPreviewContainer>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
