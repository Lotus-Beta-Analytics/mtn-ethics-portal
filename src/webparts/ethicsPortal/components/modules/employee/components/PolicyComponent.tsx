import { Box, CircularProgress, Typography } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as dayjs from "dayjs";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../utils/toast-messages";
import { BlogContent } from "../../admin/components/blog-set-up/BlogContent";
import { BlogSectionEnums } from "../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { EmployeeWrapper } from "../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageHeaderWithImage } from "../../shared/components/PageHeaderWithImage";

type Props = {
  section: BlogSectionEnums;
};

export const PolicyComponent: React.FC<Props> = ({ section }) => {
  const toast = useToasts().addToast;
  const {
    data: policy,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<any>(["policy", section], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("Policies")
        .items.filter(`PolicySection eq '${section}'`)
        .get();
      if (res.length) {
        return res[res.length - 1];
      }
    } catch (e) {
      errorAlert(toast);
    }
  });
  return (
    <EmployeeWrapper showFooter={true} backButton={true}>
      <Box width="90%" m="auto">
        <PageHeaderWithImage
          bg={`${policy?.FileUrl}`}
          text={`${policy?.PolicyTitle}`}
        />

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box minHeight="450px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">{policy?.PolicyTitle}</Typography>
              <Typography>
                Posted On: {dayjs(policy?.Created).format("MMMM DD, YYYY")}
              </Typography>
            </Box>
            <Box>
              <BlogContent post={JSON.parse(policy?.content)} />
            </Box>
          </Box>
        )}
      </Box>
    </EmployeeWrapper>
  );
};
