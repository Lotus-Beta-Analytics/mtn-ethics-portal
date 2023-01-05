import { sp } from "@pnp/sp";
import * as React from "react";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../../shared/components/LandingPageHeaderWithImage";

export const EthicsChampionsActivties = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`EthicsActivities eq `)
      .items.get()
      .then((res) => {
        setItems(res.slice(0, 3));
        setItems(res);
      });
  }, []);

  return (
    <EmployeeWrapper pageNavigation={false} backButton={true} showFooter={true}>
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png"
        text="Champion Recognition"
      />
    </EmployeeWrapper>
  );
};
