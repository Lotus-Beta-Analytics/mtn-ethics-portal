import { Box, CircularProgress, Typography } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { PostPreviewContainer } from "../../../styles/styles";
import { errorAlert } from "../../../utils/toast-messages";
import { BlogSectionEnums } from "../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { EmployeeWrapper } from "../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageHeaderWithImage } from "../../shared/components/PageHeaderWithImage";
import { PostPreviewItem } from "./blog/PostPreviewItem";
import { PaginationContainer } from "./pagination/PaginationContainer";

type Props = {
  backgroundImage: string;
  filter: BlogSectionEnums;
  pageTitle: string;
};

export const WriteUpLandingComponent: React.FC<Props> = ({
  backgroundImage,
  filter,
  pageTitle,
}) => {
  const [pageSize, setPageSize] = React.useState(null);
  const rowsPerPage = 6;
  const [items, setItems] = React.useState([]);
  const { data, isLoading, isSuccess } = useQuery<any[]>(["post"], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("Post")
        .items.filter(`PostSection eq '${filter}'`)
        .get();
      setPageSize(Math.floor(res.length / rowsPerPage));
      return res;
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  return (
    <EmployeeWrapper>
      <Box width="90%" m="0 auto">
        <PageHeaderWithImage bg={backgroundImage} text={pageTitle} />
      </Box>

      {!isLoading && data?.length === 0 && (
        <Box style={{ width: "90%", height: "450px" }} mt={3} ml="5%">
          <Typography variant="h6">
            No <strong>Post</strong> at this time.<br></br> Please check back.
          </Typography>
        </Box>
      )}

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
