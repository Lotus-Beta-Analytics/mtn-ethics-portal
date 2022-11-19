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
import { Label } from "../../../../components/Label";

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
              <ImageContainerEthics bg={item?.RecognitionImage}>
                <Box className="mtn__coverImage">
                  <div className="mtn__CoverImageSpan">
                    <Label header="Name" content={item?.Name} />
                    <Label header="Division" content={item?.Division} />
                    <Label header="Location" content={item?.Location} />
                    <Label
                      header="Ethics Message"
                      content={item?.EthicalMessage}
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
