import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import { ImageContainerEthics } from "../../../../../../styles/styles";
import { ContentType } from "../../../../../admin/pages/recognition/EthicsActivity";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../../shared/components/LandingPageHeaderWithImage";
import { Label } from "../../../../components/Label";

export const EthicsChampionsActivties = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`EthicsActivities`)
      .items.get()
      .then((res) => {
        setItems(res);
        console.log(res);
      });
  }, []);

  return (
    <EmployeeWrapper pageNavigation={false} backButton={true} showFooter={true}>
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png"
        text="Champion Recognition"
      />
      <Box>
        <div>Ethics Champion Activities</div>
      </Box>
    </EmployeeWrapper>
  );
};
