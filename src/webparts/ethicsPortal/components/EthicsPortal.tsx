import * as React from "react";
import * as jQuery from "jquery";
import { IEthicsPortalProps } from "./IEthicsPortalProps";
import { Box, ThemeProvider } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import { theme } from "./themes/themes";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CreateQuizPage } from "./modules/admin/pages/quiz/CreateQuizPage";
import { NotFound } from "./notFound/NotFound";
import { LandingPage } from "./modules/employee/pages/landing-page/LandingPage";
import { PhotoCategories } from "./modules/employee/pages/gallery/photo-categories/PhotoCategories";
import { VideoCategories } from "./modules/employee/pages/gallery/VideoCategories";

import "./styles.css";
import { ConflictOfInterestLanding } from "./modules/employee/pages/ethics-policies/conflict-of-interest/ConflictOfInterestLanding";
import { ConflictOfInterestWriteUpLanding } from "./modules/employee/pages/ethics-policies/conflict-of-interest/ConflictOfInterestWriteUpLanding";
import { Post } from "./modules/employee/components/blog/Post";

const EthicsPortal: React.FC<IEthicsPortalProps> = () => {
  jQuery("#workbenchPageContent").prop("style", "min-width: 100%");
  jQuery(".SPCanvas-canvas").prop("style", "min-width: 100%");
  jQuery(".CanvasZone").prop("style", "min-width: 100%");

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToastProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/employee/photo-categories"
              component={PhotoCategories}
            />
            <Route
              exact
              path="/employee/video-categories"
              component={VideoCategories}
            />
            <Route
              exact
              path="/employee/conflict-interest"
              component={ConflictOfInterestLanding}
            />
            <Route
              exact
              path="/employee/conflict-interest/writeup"
              component={ConflictOfInterestWriteUpLanding}
            />
            <Route exact path="/blog/post/:id" component={Post} />

            <Route path="/admin" render={() => <Box>Quiz</Box>} />
            <Route path="/admin/quiz" render={() => <Box>Quiz</Box>} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ToastProvider>
      </Router>
    </ThemeProvider>
  );
};

export default EthicsPortal;
