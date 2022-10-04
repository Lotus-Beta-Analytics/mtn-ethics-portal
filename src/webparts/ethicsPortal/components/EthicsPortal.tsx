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
import { QuizLandingPage } from "./modules/employee/pages/quiz/QuizLandingPage";
import { QuizPage } from "./modules/employee/pages/quiz/QuizPage";
import { QuizReviewPage } from "./modules/employee/pages/quiz/QuizReviewPage";
import { QuizContextProvider } from "./modules/employee/pages/quiz/context/QuizContext";
import { QuizResultPage } from "./modules/employee/pages/quiz/QuizResultPage";

const EthicsPortal: React.FC<IEthicsPortalProps> = (
  props: IEthicsPortalProps
) => {
  jQuery("#workbenchPageContent").prop("style", "min-width: 100%");
  jQuery(".SPCanvas-canvas").prop("style", "min-width: 100%");
  jQuery(".CanvasZone").prop("style", "min-width: 100%");

  const { context } = props;

  return (
    <ToastProvider>
      <ThemeProvider theme={theme}>
        <QuizContextProvider>
          <Router>
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
                path="/conflict/landing"
                component={ConflictOfInterestLanding}
              />
              <Route
                exact
                path="/conflict/writeup"
                component={ConflictOfInterestWriteUpLanding}
              />
              <Route exact path="/blog/post/:id" component={Post} />

              <Route path="/admin" render={() => <Box>Quiz</Box>} />
              <Route path="/admin/quiz" render={() => <Box>Quiz</Box>} />
              <Route
                exact
                path="/employee/quiz/landing"
                component={QuizLandingPage}
              />

              <Route exact path="/employee/take-quiz" component={QuizPage} />
              <Route exact path="/employee/review" component={QuizReviewPage} />
              <Route
                exact
                path="/employee/quiz-result"
                component={QuizResultPage}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </QuizContextProvider>
      </ThemeProvider>
    </ToastProvider>
  );
};

export default EthicsPortal;
