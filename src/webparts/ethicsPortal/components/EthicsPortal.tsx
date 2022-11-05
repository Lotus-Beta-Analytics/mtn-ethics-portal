import * as React from "react";
import * as jQuery from "jquery";
import { IEthicsPortalProps } from "./IEthicsPortalProps";
import { ThemeProvider } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import { theme } from "./themes/themes";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CreateQuizPage } from "./modules/admin/pages/quiz/CreateQuizPage";
import { NotFound } from "./notFound/NotFound";
import { LandingPage } from "./modules/employee/pages/landing-page/LandingPage";
import { PhotoCategories } from "./modules/employee/pages/gallery/photo-categories/PhotoCategories";
import { VideoGallery } from "./modules/employee/pages/gallery/VideoGallery";
import "./styles.css";
import { ConflictOfInterestLanding } from "./modules/employee/pages/ethics-policies/conflict-of-interest/ConflictOfInterestLanding";
import { ConflictOfInterestWriteUpLanding } from "./modules/employee/pages/ethics-policies/conflict-of-interest/ConflictOfInterestWriteUpLanding";
import { Post } from "./modules/employee/components/blog/Post";
import { QuizLandingPage } from "./modules/employee/pages/quiz/QuizLandingPage";
import { QuizPage } from "./modules/employee/pages/quiz/QuizPage";
import { QuizReviewPage } from "./modules/employee/pages/quiz/QuizReviewPage";
import { QuizContextProvider } from "./modules/employee/pages/quiz/context/QuizContext";
import { QuizResultPage } from "./modules/employee/pages/quiz/QuizResultPage";
import { useHistory } from "react-router-dom";
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
import { ContactUs } from "./modules/employee/pages/ethics-contact-us/contact-us/ContactUs";
import { CreateAdminPage } from "./modules/admin/pages/users/CreateAdminPage";
import { UpdateBlogPostPage } from "./modules/admin/pages/posts/UpdateBlogPostPage";
import { ManageBlogPostsPage } from "./modules/admin/pages/posts/ManageBlogPostsPage";
import { QuizReportPage } from "./modules/admin/pages/quiz/QuizReportPage";
import { AdminDashboard } from "./modules/admin/pages/dashboard/AdminDashboard";
import { ImageUploadPage } from "./modules/admin/pages/gallery/ImageUploadPage";
import { Gallery } from "./modules/admin/pages/gallery/Gallery";
import { VideoUploadPage } from "./modules/admin/pages/gallery/VideoUploadPage";
import { UpdateGalleryPage } from "./modules/admin/pages/gallery/UpdateGalleryPage";
import { GiftandEntertainment } from "./modules/employee/pages/gift-and-entertainment/gift&EntertainmentLandingPage";
import { GiftEntertainmentWriteUpLanding } from "./modules/employee/pages/gift-and-entertainment/gift-and-entertainment-article-writeup/GiftEntertainmentArticleWriteUp";
import { GiftandEntertainmentPolicy } from "./modules/employee/pages/gift-and-entertainment/gift-and-entertainmnet-policy/GiftEntertainmentPolicy";
import { GiftEntertainmentTrainingLanding } from "./modules/employee/pages/gift-and-entertainment/gift-and-entertainment-training/gift-and-entertainment-training";
import { ScrollingTextSetUpPage } from "./modules/admin/pages/scrolling-text/ScrollingTextSetUpPage";
import { VideoTrainingPage } from "./modules/admin/pages/training/VideoTrainingPage";
import { sp } from "@pnp/sp";
import { ManagePoliciesPage } from "./modules/admin/pages/policies/ManagePoliciesPage";
import { CreatePolicy } from "./modules/admin/pages/policies/CreatePolicy";
import { UpdatePolicyPage } from "./modules/admin/pages/policies/UpdatePolicyPage";
import { WhistleBLowing } from "./modules/employee/pages/whistle-blowing/WhistleBlowingLandingPage";
import { WhistleBlowingWriteUpLanding } from "./modules/employee/pages/whistle-blowing/whistle-blowing-article/WhistleBLowingArticle";
import { WhistleBlowingPolicy } from "./modules/employee/pages/whistle-blowing/whistle-blowing-policy/WhistleBlowingPolicy";
import { WhistleBlowingTrainingLanding } from "./modules/employee/pages/whistle-blowing/whistle-blowing-training/WhistleBlowingTraining";
import { AntiBribery } from "./modules/employee/pages/anti-bribery/AntiBriberyLandingPage";
import { AntiBriberyWriteUpLanding } from "./modules/employee/pages/anti-bribery/anti-bribery-article/AntiBriberyArticle";
import { AntiBriberyPolicy } from "./modules/employee/pages/anti-bribery/anti-bribery-policy/AntiBriberyPolicy";
import { AntiBriberyTrainingLanding } from "./modules/employee/pages/anti-bribery/anti-bribery-training/AntiBriberyTraining";
import { ConductPassportLandingPage } from "./modules/employee/pages/ethics-policies/conduct-passport/ConductPassportLandingPage";
import { ConductBlogPostsPage } from "./modules/employee/pages/ethics-policies/conduct-passport/ConductBlogPostsPage";
import { ConductPolicyPage } from "./modules/employee/pages/ethics-policies/conduct-passport/ConductPolicyPage";
import { ConductPassportResourcesPage } from "./modules/employee/pages/ethics-policies/conduct-passport/ConductPassportResourcesPage";
import { PrivacyLandingPage } from "./modules/employee/pages/ethics-policies/privacy/PrivacyLandingPage";
import { PrivacyBlogPostsPage } from "./modules/employee/pages/ethics-policies/privacy/PrivacyBlogPostsPage";
import { PrivacyPolicyPage } from "./modules/employee/pages/ethics-policies/privacy/PrivacyPolicyPage";
import { PrivacyResourcesPage } from "./modules/employee/pages/ethics-policies/privacy/PrivacyResourcesPage";
import { ViewEthicsTraining } from "./modules/employee/pages/training/ethic-trainings/view-ethics-trainings/ViewEthicsTraining";
import { ConflictResourcesPage } from "./modules/employee/pages/ethics-policies/conflict-of-interest/ConflictResourcesPage";
import { ConflictPolicyPage } from "./modules/employee/pages/ethics-policies/conflict-of-interest/ConflictPolicyPage";
import { PhotoGallery } from "./modules/employee/pages/gallery/PhotoGallery";
import { VideoCategories } from "./modules/employee/pages/gallery/VideoCategories";
import { CreatePolicyBreaches } from "./modules/admin/pages/policy-breaches/policy-breach-landingpage/CreatePolicyBreaches";
import { WebPartContext } from "@microsoft/sp-webpart-base";

const EthicsPortal: React.FC<IEthicsPortalProps> = (
  props: IEthicsPortalProps
) => {
  jQuery("#workbenchPageContent").prop("style", "min-width: 100%");
  jQuery(".SPCanvas-canvas").prop("style", "min-width: 100%");
  jQuery(".CanvasZone").prop("style", "min-width: 100%");

  const { context } = props;
  const history = useHistory();
  const queryClient = new QueryClient();

  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      try {
        const email = await sp.utility.getCurrentUserEmailAddresses();

        const findAdmin = await sp.web.lists
          .getByTitle("Admin")
          .items.filter(`StaffEmail eq '${email}'`)
          .get();

        setIsAdmin(findAdmin?.length > 0);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <WebContext.Provider value={{ context }}>
          <ThemeProvider theme={theme}>
            <Router>
              <CreateAdminQuizContextProvider>
                <QuizContextProvider>
                  <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route
                      exact
                      path="/employee/photo-categories"
                      component={PhotoCategories}
                    />
                    <Route
                      exact
                      path="/gallery/photo"
                      component={PhotoGallery}
                    />
                    <Route
                      exact
                      path="/gallery/video"
                      component={VideoGallery}
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
                      path="/conflict/policy"
                      component={ConflictPolicyPage}
                    />
                    <Route
                      exact
                      path="/conflict/resources"
                      component={ConflictResourcesPage}
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
                      path="/ethics/contactus"
                      component={ContactUs}
                    />

                    <Route
                      exact
                      path="/view/category/training/:id"
                      component={ViewEthicsTraining}
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
                    {/* gift and entertainment */}
                    <Route
                      exact
                      path="/giftandentertainment"
                      component={GiftandEntertainment}
                    />

                    <Route
                      exact
                      path="/giftandentertainment/writeup"
                      component={GiftEntertainmentWriteUpLanding}
                    />
                    <Route
                      exact
                      path="/giftandentertainment/policy"
                      component={GiftandEntertainmentPolicy}
                    />
                    <Route
                      exact
                      path="/giftandentertainment/trainingslides"
                      component={GiftEntertainmentTrainingLanding}
                    />
                    {/* End of gift and entertainment */}
                    {/* Conduct Passport Routes */}
                    <Route
                      exact
                      path="/conduct-passport"
                      component={ConductPassportLandingPage}
                    />
                    <Route
                      exact
                      path="/conduct-passport/posts"
                      component={ConductBlogPostsPage}
                    />
                    <Route
                      exact
                      path="/conduct-passport/policy"
                      component={ConductPolicyPage}
                    />
                    <Route
                      exact
                      path="/conduct-passport/resources"
                      component={ConductPassportResourcesPage}
                    />

                    {/* End of Conduct Passport Routes */}
                    {/* Privacy and Data Protection Routes */}
                    <Route
                      exact
                      path="/privacy"
                      component={PrivacyLandingPage}
                    />
                    <Route
                      exact
                      path="/privacy/posts"
                      component={PrivacyBlogPostsPage}
                    />
                    <Route
                      exact
                      path="/privacy/policy"
                      component={PrivacyPolicyPage}
                    />
                    <Route
                      exact
                      path="/privacy/resources"
                      component={PrivacyResourcesPage}
                    />

                    {/* End of Privacy and Data Protection Routes*/}

                    {/* whistle blowing */}
                    <Route
                      exact
                      path="/whistleblowing"
                      component={WhistleBLowing}
                    />

                    <Route
                      exact
                      path="/whistleblowing/writeup"
                      component={WhistleBlowingWriteUpLanding}
                    />
                    <Route
                      exact
                      path="/whistleblowing/policy"
                      component={WhistleBlowingPolicy}
                    />
                    <Route
                      exact
                      path="/whistleblowing/training"
                      component={WhistleBlowingTrainingLanding}
                    />
                    {/* End of whistle blowing */}
                    {/* bribery */}
                    <Route exact path="/antibribery" component={AntiBribery} />

                    <Route
                      exact
                      path="/antibribery/writeup"
                      component={AntiBriberyWriteUpLanding}
                    />
                    <Route
                      exact
                      path="/antibribery/policy"
                      component={AntiBriberyPolicy}
                    />
                    <Route
                      exact
                      path="/antibribery/training"
                      component={AntiBriberyTrainingLanding}
                    />
                    {/* End of antibribery */}

                    {isAdmin && (
                      <Switch>
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
                          render={() => (
                            <UpdateBlogPostPage context={context} />
                          )}
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
                          path="/admin/gallery/:uploadId/update"
                          render={() => <UpdateGalleryPage context={context} />}
                        />
                        <Route
                          exact
                          path="/admin/gallery/images"
                          render={() => <ImageUploadPage context={context} />}
                        />
                        <Route
                          exact
                          path="/admin/gallery/videos"
                          render={() => <VideoUploadPage context={context} />}
                        />

                        <Route
                          exact
                          path="/admin/scrolling-text"
                          component={ScrollingTextSetUpPage}
                        />
                        <Route
                          exact
                          path="/admin/training"
                          render={() => <VideoTrainingPage context={context} />}
                        />
                        <Route
                          exact
                          path="/admin/policies"
                          render={() => <ManagePoliciesPage />}
                        />
                        <Route
                          exact
                          path="/admin/policy/:policyId/update"
                          render={() => <UpdatePolicyPage context={context} />}
                        />
                        <Route
                          exact
                          path="/admin/create-policy"
                          render={() => <CreatePolicy context={context} />}
                        />

                        {/* Start of Policy Breaches */}

                        <Route
                          exact
                          path="/admin/policy/breaches"
                          component={CreatePolicyBreaches}
                        />

                        <Route path="*" component={NotFound} />
                      </Switch>
                    )}

                    {!isAdmin && <Route path="*" component={NotFound} />}
                  </Switch>
                </QuizContextProvider>
              </CreateAdminQuizContextProvider>
            </Router>
          </ThemeProvider>
        </WebContext.Provider>
        s
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default EthicsPortal;

export const WebContext = React.createContext<{
  context: WebPartContext;
} | null>(null);
