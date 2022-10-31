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
import { useHistory, Outlet } from "react-router-dom";
import { ChampionLandingPage } from "./modules/employee/pages/recognition/champion-recognition/ChampionLandingPage";
import { EthicsChampionLandingPage } from "./modules/employee/pages/recognition/champion-recognition/ethics-champions/EthicsChampionLandingPage";
import { EthicsChampionsActivties } from "./modules/employee/pages/recognition/champion-recognition/ethics-champion-activties/EthicsChampionsActivties";
import { EthicsTrainings } from "./modules/employee/pages/training/ethic-trainings/EthicsTrainings";
import { BusinessEthics } from "./modules/employee/pages/training/training-ethics-business/BusinessEthics";
import { MtnTrainingVideo } from "./modules/employee/pages/training/mtn-ethics-video/MtnTrainingVideo";
import { OrganizationEthics } from "./modules/employee/pages/training/organiztion-ethics/OrganizationEthics";
import { PolicyBreaches } from "./modules/employee/pages/policy-breaches/policybreaches-landingPage/PolicyBreaches";
import { EthicsDefaulters } from "./modules/employee/pages/policy-breaches/ethics-defaulters/EthicsDefaulters";
import { ArticlesLandingPage } from "./modules/employee/pages/ethics-articles/ethics-articles-page/ArticlesLandingPage";
import { LeadershipSeries } from "./modules/employee/pages/ethics-articles/ethics-leadership-series/LeadershipSeries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateAdminQuizContextProvider } from "./modules/admin/pages/quiz/context/AdminQuizContext";
import { CreateBlogPost } from "./modules/admin/pages/posts/CreateBlogPost";
import { ManageQuizPage } from "./modules/admin/pages/quiz/ManageQuizPage";
import { CreateAdminPage } from "./modules/admin/pages/users/CreateAdminPage";
import { UpdateAdminPage } from "./modules/admin/pages/users/UpdateAdminPage";
import { ManageAdminPage } from "./modules/admin/pages/users/ManageAdminPage";
import { UpdateBlogPostPage } from "./modules/admin/pages/posts/UpdateBlogPostPage";
import { ManageBlogPostsPage } from "./modules/admin/pages/posts/ManageBlogPostsPage";
import { QuizReportPage } from "./modules/admin/pages/quiz/QuizReportPage";
import { AdminDashboard } from "./modules/admin/pages/dashboard/AdminDashboard";
import { ImageUploadPage } from "./modules/admin/pages/gallery/ImageUploadPage";
import { Gallery } from "./modules/admin/pages/gallery/Gallery";

const EthicsPortal: React.FC<IEthicsPortalProps> = (
  props: IEthicsPortalProps
) => {
  jQuery("#workbenchPageContent").prop("style", "min-width: 100%");
  jQuery(".SPCanvas-canvas").prop("style", "min-width: 100%");
  jQuery(".CanvasZone").prop("style", "min-width: 100%");

  const { context } = props;
  const history = useHistory();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <CreateAdminQuizContextProvider>
              <QuizContextProvider>
                <Switch>
                  <Route exact path="/" component={LandingPage} />

                  <Route
                    exact
                    path="/admin/dashboard"
                    render={() => <AdminDashboard />}
                  />
                  <Route
                    exact
                    path="/admin/user/create"
                    render={() => <CreateAdminPage />}
                  />

                  <Route
                    exact
                    path="/admin/create-post"
                    render={() => <CreateBlogPost context={context} />}
                  />
                  <Route
                    exact
                    path="/admin/post/:postId/update"
                    render={() => <UpdateBlogPostPage context={context} />}
                  />
                  <Route
                    exact
                    path="/admin/manage-posts"
                    render={() => <ManageBlogPostsPage />}
                  />
                  <Route
                    exact
                    path="/admin/create-quiz"
                    render={() => <CreateQuizPage />}
                  />
                  <Route
                    exact
                    path="/admin/manage-quiz"
                    render={() => <ManageQuizPage />}
                  />
                  <Route
                    exact
                    path="/admin/quiz/:quizId/report"
                    render={() => <QuizReportPage />}
                  />
                  <Route
                    exact
                    path="/admin/gallery/"
                    render={() => <Gallery />}
                  />
                  <Route
                    exact
                    path="/admin/gallery/images"
                    render={() => <ImageUploadPage context={context} />}
                  />

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
                    path="/recognition/champion"
                    component={ChampionLandingPage}
                  />
                  <Route
                    exact
                    path="/recognition/ethicschampion"
                    component={EthicsChampionLandingPage}
                  />
                  <Route
                    exact
                    path="/recognition/ethicschampion/activties"
                    component={EthicsChampionsActivties}
                  />
                  <Route
                    exact
                    path="/conflict/writeup"
                    component={ConflictOfInterestWriteUpLanding}
                  />
                  <Route exact path="/blog/post/:id" component={Post} />

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
                  <Route
                    exact
                    path="/recognition/champion"
                    component={ChampionLandingPage}
                  />
                  <Route
                    exact
                    path="/recognition/ethicschampion"
                    component={EthicsChampionLandingPage}
                  />
                  <Route
                    exact
                    path="/recognition/ethicschampion/activties"
                    component={EthicsChampionsActivties}
                  />
                  <Route
                    exact
                    path="/trainings/traininglandingpage"
                    component={EthicsTrainings}
                  />
                  <Route
                    exact
                    path="/ethics/training/businessethics"
                    component={BusinessEthics}
                  />
                  <Route
                    exact
                    path="/ethics/training/mtnethicstrainingvideos"
                    component={MtnTrainingVideo}
                  />
                  <Route
                    exact
                    path="/ethics/training/organizationalethics"
                    component={OrganizationEthics}
                  />

                  <Route
                    exact
                    path="/ethics/policybreaches"
                    component={PolicyBreaches}
                  />

                  <Route
                    exact
                    path="/policybreaches/ethicsdefaulters"
                    component={EthicsDefaulters}
                  />
                  <Route
                    exact
                    path="/ethics/articleslandingpage"
                    component={ArticlesLandingPage}
                  />

                  <Route
                    exact
                    path="/ethical/leadership/series"
                    component={LeadershipSeries}
                  />

                  <Route
                    exact
                    path="/employee/quiz/landing"
                    component={QuizLandingPage}
                  />

                  <Route
                    exact
                    path="/employee/take-quiz"
                    render={() => <QuizPage />}
                  />
                  <Route
                    exact
                    path="/employee/review"
                    component={QuizReviewPage}
                  />
                  <Route
                    exact
                    path="/employee/quiz-result"
                    component={QuizResultPage}
                  />
                  <Route path="*" component={NotFound} />
                </Switch>
              </QuizContextProvider>
            </CreateAdminQuizContextProvider>
          </Router>
        </ThemeProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default EthicsPortal;
