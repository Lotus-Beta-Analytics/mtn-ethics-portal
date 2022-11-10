import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { sp } from "@pnp/sp";
import "./styles.css";
import { BlogSectionEnums } from "../../../../admin/components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { useQuery } from "@tanstack/react-query";
import { errorAlert } from "../../../../../utils/toast-messages";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import * as dayjs from "dayjs";
import { BlogContent } from "../../../../admin/components/blog-set-up/BlogContent";

const pageMenu = [
  {
    id: 1,
    text: "Ethics Defaulters",
    link: "/policybreaches/ethicsdefaulters",
  },
];

export const PolicyBreaches = () => {
  const toast = useToasts().addToast;

  const {
    data: policyBreach,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<any>(["policyBreaches"], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("PolicyBreaches")
        .items.getAll();
      if (res.length) {
        return res[res.length - 1];
      }
      return {} as any;
    } catch (e) {
      errorAlert(toast);
    }
  });

  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
      showFooter={true}
    >
      <Box width="90%" m="auto">
        {!isLoading && policyBreach && (
          <PageHeaderWithImage
            bg={`${policyBreach?.PolicyBreachImage}`}
            text={policyBreach?.PolicyBreachTitle ?? ""}
          />
        )}
        {!isLoading && !policyBreach?.PolicyBreachTitle && (
          <Box style={{ width: "90%", height: "450px" }} mt={3} ml="5%">
            <Typography variant="h6">
              No <strong>Item</strong> at this time.<br></br> Please check back.
            </Typography>
          </Box>
        )}

        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {policyBreach && (
              <Box minHeight="450px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h5">
                    {policyBreach.PolicyBreachTitle}
                  </Typography>
                  <Typography>
                    Posted On:{" "}
                    {dayjs(policyBreach?.Created).format("MM -DD- YYYY")}
                  </Typography>
                </Box>
                <Box>{policyBreach.PolicyBreachWriteUp}</Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </EmployeeWrapper>
  );
};
