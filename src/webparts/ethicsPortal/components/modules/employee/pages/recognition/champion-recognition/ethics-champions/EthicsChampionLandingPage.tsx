import * as React from "react";
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { EmployeeWrapper } from "../../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../../shared/components/PageHeaderWithImage";
import {
  HomeItemContainer,
  ImageContainerEthics,
} from "../../../../../../styles/styles";
import styles from "./styles.module.scss";
import { PaginationContainer } from "../../../../components/pagination/PaginationContainer";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { errorAlert } from "../../../../../../utils/toast-messages";
import { useToasts } from "react-toast-notifications";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "100px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  })
);

// type Props = {};

export const EthicsChampionLandingPage = () => {
  const [pageSize, setPageSize] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const rowsPerPage = 6;

  const { data, isLoading } = useQuery<any>(["item"], async () => {
    try {
      const res = await sp.web.lists
        .getByTitle("EthicsRecognition")
        .items.getAll();
      setPageSize(Math.ceil(res.length / rowsPerPage));
      return res;
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  const classes = useStyles();
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

        <PaginationContainer
          data={data}
          onUpdate={(splicedItems) => setItems(splicedItems)}
          pageSize={pageSize}
          rowsPerPage={rowsPerPage}
        >
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              // width: "980px",
              height: "300px",
              justifyContent: "center",
              alignItems: "center",
              // marginLeft: "5%",
              padding: "0.5rem",
              gap: "1.5rem",
              position: "relative",
              backgroundSize: "cover",
              borderRadius: "2rem",
              overflow: "hidden",
            }}
          >
            {items?.map((item) => (
              <>
                {}
                <ImageContainerEthics bg={item.RecognitionImage}>
                  <Box className="mtn__coverOval"></Box>
                  <Box className="mtn__coverImage">
                    <div className="mtn__CoverImageSpan">
                      <div className="eachGridbox__allContent">
                        <header>Name:</header>
                        <h5 className="grid__titleContent">
                          <p className="styles.grid__titleName">{item.Name}</p>
                        </h5>
                      </div>
                      <div className="eachGridbox__allContent">
                        <header>Division:</header>
                        <h5 className="grid__titleContent">
                          <p className="styles.grid__titleName">
                            {item.Division}
                          </p>
                        </h5>
                      </div>
                      <div className="eachGridbox__allContent">
                        <header>Loaction:</header>
                        <h5 className="grid__titleContent">
                          <p className="styles.grid__titleName">
                            {item.Location}
                          </p>
                        </h5>
                      </div>
                      <div className="eachGridbox__allContent">
                        <header>Ethics Message:</header>
                        <h5 className="grid__titleContent">
                          <p className="styles.grid__titleName">
                            {item.EthicalMessage}
                          </p>
                        </h5>
                      </div>
                    </div>
                  </Box>
                </ImageContainerEthics>
              </>
            ))}
          </Box>
        </PaginationContainer>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
