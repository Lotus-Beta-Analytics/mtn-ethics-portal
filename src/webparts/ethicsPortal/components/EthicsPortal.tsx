import * as React from "react";
import * as jQuery from "jquery";
import { IEthicsPortalProps } from "./IEthicsPortalProps";
import { Box, ThemeProvider } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import { theme } from "./themes/themes";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CreateQuizPage } from "./modules/admin/pages/quiz/CreateQuizPage";
import { NotFound } from "./notFound/NotFound";
import { AppContainer } from "./styles/styles";
import { Footer } from "./modules/shared/components/Footer";
import { TopNavigation } from "./modules/shared/components/Navigation/top-navigation/TopNavigation";

const EthicsPortal: React.FC<IEthicsPortalProps> = () => {
  jQuery("#workbenchPageContent").prop("style", "min-width: 100%");
  jQuery(".SPCanvas-canvas").prop("style", "min-width: 100%");
  jQuery(".CanvasZone").prop("style", "min-width: 100%");
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToastProvider>
          <AppContainer>
            <TopNavigation />
            <Box>
              <Switch>
                <Route exact path="/" component={CreateQuizPage} />
                <Route path="/admin" render={() => <Box>Quiz</Box>} />
                <Route path="/admin/quiz" render={() => <Box>Quiz</Box>} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Box>

            <Footer />
          </AppContainer>
        </ToastProvider>
      </Router>
    </ThemeProvider>
  );
};

export default EthicsPortal;
