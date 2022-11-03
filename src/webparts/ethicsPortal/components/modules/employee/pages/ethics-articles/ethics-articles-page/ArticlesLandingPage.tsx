import * as React from "react";
import { sp } from "@pnp/sp";
import { CircularProgress } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";
import { errorAlert } from "../../../../../utils/toast-messages";
import { useToasts } from "react-toast-notifications";
import { PaginationContainer } from "../../../components/pagination/PaginationContainer";

const pageMenu = [
  { id: 1, text: "Ethics Articles Blog", link: "/ethics/article/blog" },
];

export const ArticlesLandingPage = () => {
  const [pageSize, setPageSize] = React.useState(null);
  const rowsPerPage = 6;
  const [items, setItems] = React.useState([]);

  const { data, isLoading } = useQuery<any>(["post"], async () => {
    try {
      const res = await sp.web.lists.getByTitle("Post").items.getAll();
      setPageSize(Math.ceil(res.length / rowsPerPage));
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
      <PaginationContainer
        data={data}
        onUpdate={(splicedItems) => setItems(splicedItems)}
        pageSize={pageSize}
        rowsPerPage={rowsPerPage}
      >
        <PostPreviewContainer>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {items?.map((post) => (
                <PostPreviewItem post={post} key={post.Id} />
              ))}
            </>
          )}
        </PostPreviewContainer>
      </PaginationContainer>
    </EmployeeWrapper>
  );
};
