import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import "./styles.css";

const pageMenu = [
  {
    id: 1,
    text: "Ethics Defaulters",
    link: "/policybreaches/ethicsdefaulters",
  },
];

export const PolicyBreaches = () => {
  const [policy, setPolicy] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`PolicyBreaches`)
      .items.filter(`PolicyBreachWriteUp`)
      .get()
      .then((res) => {
        setPolicy(res);
        console.log(res);
      });
  }, []);

  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
      showFooter={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-policy.png"
        text="Learning from Policy Breaches"
      />
      <Box className="policyBody">
        <div className="policyBreaches">
          <span>
            <h4>Policy Breaches</h4>
          </span>
          <div className="policyPage">
            <h5>{policy}</h5>
          </div>
        </div>
      </Box>
    </EmployeeWrapper>
  );
};
