import { Box } from "@material-ui/core";
import * as React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { AppContainer } from "../../../../../styles/styles";
import { theme } from "../../../../../themes/themes";
import { Footer } from "../../Footer";
import { PageNavigation } from "../../Navigation/page-navigation/PageNavigation";
import { TopNavigation } from "../../Navigation/top-navigation/TopNavigation";
import { useHistory } from "react-router-dom";

export const EmployeeWrapper = ({
  children,
  pageNavigation = false,
  pageMenu = [],
  backButton = true,
}) => {
  const history = useHistory();
  return (
    <AppContainer>
      {pageNavigation && <PageNavigation nav={pageMenu} />}
      <TopNavigation />

      {backButton && (
        <Box
          style={{
            cursor: "pointer",
            position: "relative",
            width: "100px",
            height: "30px",
            top: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => history.goBack()}
        >
          <FaAngleDoubleLeft color={theme.palette.common.black} />
        </Box>
      )}

      {children}
      <Footer />
    </AppContainer>
  );
};
