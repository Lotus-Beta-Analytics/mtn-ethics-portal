import * as React from "react";
import { sp } from "@pnp/sp";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  ImageContainerEthics,
  MLink,
  PostPreviewContainer,
} from "../../../../../styles/styles";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { MButton } from "../../../../shared/components/buttons/MButton";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { errorAlert } from "../../../../../utils/toast-messages";
import { useToasts } from "react-toast-notifications";
import { Pagination } from "@material-ui/lab";

const pageMenu = [
  { id: 1, text: "Ethics Articles Blog", link: "/ethics/article/blog" },
];

export const ArticlesLandingPage = () => {
  const { data, isLoading, isSuccess } = useQuery<any>(["post"], async () => {
    try {
      const res = await sp.web.lists.getByTitle("Post").items.getAll();
      return res;
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  return (
    <EmployeeWrapper
      pageNavigation={true}
      backButton={false}
      showFooter={true}
      pageMenu={pageMenu}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article-ethics.png"
        text="Ethics Articles"
      />
      <PostPreviewContainer>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {data.map((post) => (
              <PostPreviewItem post={post} key={post.Id} />
            ))}
            <Pagination
              count={5}
              showFirstButton={true}
              showLastButton={true}
              page={1}
              hideNextButton={false}
              hidePrevButton={false}
              siblingCount={1}
              size="large"
              color="primary"
            />
          </>
        )}
      </PostPreviewContainer>
    </EmployeeWrapper>
  );
};

const homeItems = [
  {
    id: 1,
    title: "Ethical Leadership Series",
    link: "/ethical/leadership/series",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article1.png",
  },
  {
    id: 1,
    title: "Dealing with Harassement at Work",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article2.png",
  },
  {
    id: 1,
    title: "Ethical Leadership Series",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/article3.png",
  },
];
