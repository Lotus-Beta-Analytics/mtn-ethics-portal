import * as React from "react";
import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../../utils/toast-messages";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { ImageContainerEthics } from "../../../../../styles/styles";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import { PaginationContainer } from "../../../components/pagination/PaginationContainer";
import { Label } from "../../../components/Label";

export const EthicsDefaulters = () => {
  const [pageSize, setPageSize] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const rowsPerPage = 6;

  const { data, isLoading } = useQuery<any>(["item"], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("EthicsDefaulters")
        .items.getAll();
      setPageSize(Math.ceil(res.length / rowsPerPage));
      return res;
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  if (isLoading)
    return (
      <EmployeeWrapper>
        <></>
      </EmployeeWrapper>
    );

  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-policy.png"
          text="Ethics Defaulters"
        />

        <PaginationContainer
          data={data}
          onUpdate={(splicedItems) => setItems(splicedItems)}
          pageSize={pageSize}
          rowsPerPage={rowsPerPage}
        >
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              height: "350px",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.5rem",
              gap: ".5rem",
              position: "relative",
              width: "100%",
            }}
          >
            {items?.map((item) => (
              <ImageContainerEthics bg={item?.EthicsFileUrl}>
                <Box className="mtn__coverImage" style={{ zIndex: 99 }}>
                  <div className="mtn__CoverImageSpan">
                    <Label header="Name" content={item?.FirstName} />
                    <Label header="Division" content={item?.Division} />
                    <Label header="Location" content={item?.Location} />
                    <Label
                      header="Ethics Message"
                      content={item?.EthicsDefaulterMessage}
                    />
                  </div>
                </Box>
              </ImageContainerEthics>
            ))}
          </Box>
        </PaginationContainer>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
