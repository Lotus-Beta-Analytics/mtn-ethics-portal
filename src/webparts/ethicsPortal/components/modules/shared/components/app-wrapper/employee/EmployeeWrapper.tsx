import { Box } from "@material-ui/core";
import * as React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { AppContainer } from "../../../../../styles/styles";
import { theme } from "../../../../../themes/themes";
import { Footer } from "../../Footer";
import { PageNavigation } from "../../Navigation/page-navigation/PageNavigation";
import { TopNavigation } from "../../Navigation/top-navigation/TopNavigation";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../../buttons/MButton";

export const EmployeeWrapper: React.FC<{
  children;
  pageNavigation?: boolean;
  pageMenu?: any[];
  backButton?: boolean;
  showFooter?: boolean;
}> = ({
  children,
  pageNavigation = false,
  pageMenu = [],
  backButton = true,
  showFooter = true,
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
            top: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            left: "30px",
          }}
          onClick={() => history.goBack()}
        >
          <FaAngleDoubleLeft
            color={theme.palette.common.black}
            fontSize="20px"
          />
        </Box>
      )}
      <Box>{children}</Box>
      {showFooter && <Footer />}
    </AppContainer>
  );
};
