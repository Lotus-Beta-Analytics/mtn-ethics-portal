import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../../shared/components/PageHeaderWithImage";
import { HomeItemContainer } from "../../../../../../styles/styles";
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
            flexWrap: "nowrap",
            height: "250px",
            margin: "auto",
            padding: "2.5rem",
          }}
        >
          {homeItems.map((item) => (
            <HomeItemContainer bg={item.image}>
              <Box></Box>
              <Typography
                variant="h5"
                style={{
                  fontStyle: "italic",
                  paddingRight: "15rem",
                  boxSizing: "border-box",
                }}
              >
                {item.title}
              </Typography>
            </HomeItemContainer>
          ))}
        </Box>
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
    id: 1,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo3.png",
  },
  {
    id: 1,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo4.png",
  },
  {
    id: 1,
    title: "",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo2.png",
  },
];
