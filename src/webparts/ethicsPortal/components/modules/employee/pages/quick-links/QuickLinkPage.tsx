import React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { Box, CircularProgress } from "@material-ui/core";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { useQuery } from "@tanstack/react-query";
import { sp } from "@pnp/sp";
import { QuickLinkData } from "../../../admin/pages/quick-links/forms/QuickLinkForm";

export const QuickLinkPage = () => {
  const [quickLinks, setQuickLinks] = React.useState<QuickLinkData[]>();
  const { isLoading } = useQuery<QuickLinkData[]>(
    ["quickLinks"],
    async () => {
      return await sp.web.lists.getByTitle("QuickLinks").items.getAll();
    },
    {
      onSuccess(data: QuickLinkData[]) {
        setQuickLinks(data);
      },
    }
  );

  if (isLoading) {
    <EmployeeWrapper showFooter={true} backButton={true}>
      <Box width="90%" m="auto">
        <PageHeaderWithImage bg={``} text="Quick Links" />
        <Box>
          <CircularProgress />
        </Box>
      </Box>
    </EmployeeWrapper>;
  }

  return (
    <EmployeeWrapper showFooter={true} backButton={true}>
      <Box width="90%" m="auto">
        <PageHeaderWithImage bg={``} text="Quick Links" />
      </Box>
    </EmployeeWrapper>
  );
};
