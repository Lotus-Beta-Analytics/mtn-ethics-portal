import * as React from "react";
import { Box } from "@material-ui/core";
import { ImageContainerEthics } from "../../../../../styles/styles";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import "./styles.css";

type Props = {};

export const EthicsDefaulters = (props: Props) => {
  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-policy.png"
          text="Ethics Defaulters"
        />
        <div className="titleH3">
          <h3>Ethics Defaulters</h3>
        </div>
        <Box
          style={{
            display: "flex",
            height: "250px",
            margin: "auto",
            padding: "0.5rem",
            gap: "0.5rem",
            // position: "relative",
            backgroundSize: "cover",
            borderRadius: "2rem",
            overflow: "hidden",
            marginBottom: "3.5rem",
          }}
        >
          {homeItems.map((item) => (
            <>
              <ImageContainerEthics bg={item.image}>
                <Box className="mtn__coverOval"></Box>
                <Box className="mtn__coverImage">
                  <div className="mtn__CoverImageSpan">
                    <span>
                      Name: <h5>Fonsus Ali</h5>
                    </span>
                    <span>
                      Division:
                      <h5>Business Solution</h5>
                    </span>
                    <span>
                      Location:
                      <h5>Lagos 1</h5>
                    </span>
                    <span>
                      Ethics Message:
                      <h5>
                        The State of the Country is not Fun, We the People are
                        going to take back the Power.
                      </h5>
                    </span>
                  </div>
                </Box>
              </ImageContainerEthics>
            </>
          ))}
        </Box>
      </PageWrapper>
    </EmployeeWrapper>
  );
};

const homeItems = [
  {
    id: 1,
    name: "",
    division: "",
    location: "",
    ethicalMessage: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo2.png",
  },
  {
    id: 2,
    name: "",
    division: "",
    location: "",
    ethicalMessage: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo3.png",
  },
];
