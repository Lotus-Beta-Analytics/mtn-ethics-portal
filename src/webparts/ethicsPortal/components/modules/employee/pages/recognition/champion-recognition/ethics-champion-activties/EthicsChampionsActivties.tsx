import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PaginationContainer } from "../../../../components/pagination/PaginationContainer";
import { ListItem } from "./components/ListItem";
import { PageHeaderWithImage } from "../../../../../shared/components/PageHeaderWithImage";

export const EthicsChampionsActivties = () => {
  const [items, setItems] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(null);
  const rowsPerPage = 10;

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`EthicsActivities`)
      .items.get()
      .then((res) => {
        setItems(res);
        setPageSize(Math.ceil(res.length / rowsPerPage));
      });
  }, []);

  return (
    <EmployeeWrapper pageNavigation={false} backButton={true} showFooter={true}>
      <Box width="90%" m="auto">
        <PageHeaderWithImage
          bg={`https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png`}
          text="Champion Recognition Activities"
        />
      </Box>

      <Box>
        <h4 style={{ textAlign: "center" }}>Ethics Champion Activities</h4>
        <PaginationContainer
          data={items}
          onUpdate={(splicedItems) => setData(splicedItems)}
          pageSize={pageSize}
          rowsPerPage={rowsPerPage}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "250px",
              margin: "auto",
              padding: "0.5rem",
              gap: "1rem",
              width: "95%",
              boxSizing: "border-box",
            }}
          >
            {data?.map((item) => (
              <ListItem {...item} />
            ))}
          </Box>
        </PaginationContainer>
      </Box>
    </EmployeeWrapper>
  );
};
