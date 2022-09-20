import { Box } from "@material-ui/core";
import * as React from "react";
import { AppContainer } from "../../../../../styles/styles";
import { Footer } from "../../Footer";
import { PageNavigation } from "../../Navigation/page-navigation/PageNavigation";
import { TopNavigation } from "../../Navigation/top-navigation/TopNavigation";

export const EmployeeWrapper = ({
  children,
  pageNavigation = false,
  pageMenu = [],
}) => {
  return (
    <AppContainer>
      {pageNavigation && <PageNavigation nav={pageMenu} />}
      <TopNavigation />
      {children}
      <Footer />
    </AppContainer>
  );
};
