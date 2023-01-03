import * as React from "react";
import { sp } from "@pnp/sp";
import { CircularProgress } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import { PostPreviewContainer } from "../../../../../styles/styles";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { PostPreviewItem } from "../../../components/blog/PostPreviewItem";
import { errorAlert } from "../../../../../utils/toast-messages";
import { PaginationContainer } from "../../../components/pagination/PaginationContainer";
import { ReadOnlyURLSearchParams } from "../../../../admin/pages/policies/ManagePoliciesPage";
import { useLocation } from "react-router-dom";
import { PostSection } from "../../../../admin/components/blog-set-up/sections/CreateSection";

export const SectionedBlogPosts = () => {
  const [pageSize, setPageSize] = React.useState(null);
  const rowsPerPage = 6;
  const [items, setItems] = React.useState([]);
  //   const [data, setData] = React.useState([]);

  const { search } = useLocation();
  const searchParams = React.useMemo(
    () => new URLSearchParams(search) as ReadOnlyURLSearchParams,
    [search]
  );

  const { isLoading, data } = useQuery<any>(
    ["post", searchParams.get("postSection")],
    async () => {
      return await sp.web.lists
        .getByTitle("Post")
        .items.filter(`PostSection eq '${searchParams.get("postSection")}'`)
        .getAll();
    },
    {
      onSuccess(data) {
        console.log(data, ">>");
        setPageSize(Math.ceil(data.length / rowsPerPage));
      },
      onError(err) {
        errorAlert();
      },
    }
  );

  const getBg = () => {
    switch (searchParams.get("postSection")) {
      case PostSection.Eyes_Wide_Open:
        return "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/PostFiles/eyes%20wide%20open.png";
      case PostSection.Did_You_Know:
        return "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/PostFiles/did%20you%20know.png";
      default:
        return "";
    }
  };

  return (
    <EmployeeWrapper backButton={false} showFooter={true}>
      <LandingPageHeaderWithImage
        bg={getBg()}
        text={`${searchParams.get("PageTitle")} Posts`}
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
