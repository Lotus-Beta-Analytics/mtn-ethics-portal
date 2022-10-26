import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../../shared/components/PageHeaderWithImage";
import {
  HomeItemContainer,
  ImageContainerEthics,
} from "../../../../../../styles/styles";
import styles from "./styles.module.scss";

type Props = {};

export const EthicsChampionLandingPage = (props: Props) => {
  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png"
          text="Ethics Champions"
        />
        <div className={styles.titleH3}>
          <h3>Ethics Champions</h3>
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
          }}
        >
          {homeItems.map((item) => (
            <>
              <ImageContainerEthics bg={item.image}>
                <Box className="mtn__coverOval"></Box>
                <Box className="mtn__coverImage">
                  <div className="mtn__CoverImageSpan">
                    <span>
                      Name:
                      <h5>Fonsus Ali</h5>
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
        <div className={styles.paginationPage}>
          <div>Pagination</div>
        </div>
      </PageWrapper>
    </EmployeeWrapper>
  );
};

const homeItems = [
  {
    id: 1,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo2.png",
  },
  {
    id: 2,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo3.png",
  },
  {
    id: 3,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo4.png",
  },
  {
    id: 4,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo2.png",
  },
];
