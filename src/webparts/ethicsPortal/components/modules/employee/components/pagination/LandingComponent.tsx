import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { PostPreviewContainer } from "../../../../styles/styles";
import { errorAlert } from "../../../../utils/toast-messages";
import { BlogSectionEnums } from "../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { PostPreviewItem } from "../blog/PostPreviewItem";
import { PaginationContainer } from "./PaginationContainer";

type Props = {
  backgroundImage: string;
  filter: BlogSectionEnums;
  pageTitle: string;
};

export const LandingComponent: React.FC<Props> = ({
  backgroundImage,
  filter,
  pageTitle,
}) => {
  const [pageSize, setPageSize] = React.useState(null);
  const rowsPerPage = 6;
  const [items, setItems] = React.useState([]);
  const { data, isLoading, isSuccess } = useQuery<any>(["post"], async () => {
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
      <Box width="90%" m="auto">
        <PageHeaderWithImage bg={`'${backgroundImage}'`} text={pageTitle} />
      </Box>

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
