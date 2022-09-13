import { Box } from "@material-ui/core";
import * as React from "react";
import { AppContainer } from "../../../../../styles/styles";
import { Footer } from "../../Footer";
import { TopNavigation } from "../../Navigation/top-navigation/TopNavigation";

export const EmployeeWrapper = ({ children }) => {
  return (
    <AppContainer>
      <TopNavigation />
      {children}
      <Footer />
    </AppContainer>
  );
};
