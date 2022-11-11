import { Box, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../utils/toast-messages";
import { BlogContent } from "../../admin/components/blog-set-up/BlogContent";
import { EmployeeWrapper } from "../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../shared/components/LandingPageHeaderWithImage";

export const PolicyLandingComponent = () => {
  const { policyId } = useParams();
  const [policyResponse, setPolicyResponse] = React.useState<Policy>();
  const history = useHistory();
  const toast = useToasts().addToast;
  const { isLoading } = useQuery(
    ["policyFetch"],
    async () => {
      return await sp.web.lists
        .getByTitle("PolicyConfiguration")
        .items.getById(policyId)
        .get();
    },
    {
      enabled: !!policyId,
      onSuccess(data) {
        setPolicyResponse(data);
      },
      onError(err) {
        errorAlert(toast);
      },
    }
  );

  if (!policyId) {
    return (
      <EmployeeWrapper pageNavigation={false} backButton={false}>
        <CircularProgress />
        {() => {
          setTimeout(() => {
            history.goBack();
          }, 1000);
        }}
        ()
      </EmployeeWrapper>
    );
  }
  if (isLoading) {
    return (
      <EmployeeWrapper pageNavigation={false} backButton={false}>
        <CircularProgress className="center-item" />
      </EmployeeWrapper>
    );
  }

  return (
    <EmployeeWrapper pageMenu={[]} pageNavigation={true} backButton={false}>
      <LandingPageHeaderWithImage
        bg={policyResponse?.ImageUrl}
        text={policyResponse?.PolicyTitle}
      />
      <Box>
        {policyResponse?.Content && (
          <BlogContent post={JSON.parse(policyResponse?.Content)} />
        )}
      </Box>
    </EmployeeWrapper>
  );
};

export interface Policy {
  PolicyTitle: string;
  ImageUrl: string;
  Content: any;
  Id: number;
}
