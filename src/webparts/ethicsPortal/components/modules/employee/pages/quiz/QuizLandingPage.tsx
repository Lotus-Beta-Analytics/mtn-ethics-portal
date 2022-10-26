import { Box, Button, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { MButton } from "../../../shared/components/buttons/MButton";
import { LandingPageHeaderWithImage } from "../../../shared/components/LandingPageHeaderWithImage";
import { QuizWrapper } from "./components/QuizWrapper";
import { useHistory } from "react-router-dom";
import { AnswerStatus, getQuizContextState } from "./context/QuizContext";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../utils/toast-messages";
import { QuizStatus } from "../../../admin/pages/quiz/modals/EnableQuizPromptModal";
import "./styles.css";
import { format } from "timeago.js";

export const QuizLandingPage = () => {
  const history = useHistory();
  const { questions, quizInfo } = getQuizContextState();
  const { data } = useQuery(["profile"], async () => {
    try {
      const res = await sp.profiles.myProperties.get();
      return {
        name: res?.DisplayName,
        email: res?.Email,
      };
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  const [isTakenQuiz, setIsTakenQuiz] = React.useState(true);

  React.useEffect(() => {
    if (!data) return;
    sp.web.lists
      .getByTitle("QuizResponse")
      .items.filter(`StaffEmail eq '${data?.email}'`)
      .get()
      .then((items) => {
        setIsTakenQuiz(items.length > 0);
      });
  }, [data?.email]);

  return (
    <EmployeeWrapper backButton={false} showFooter={false}>
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
        text="Ethics Quiz"
      />
      <QuizWrapper>
        {questions.length > 0 ? (
          <>
            {isTakenQuiz ? (
              <>
                <Box>You have taken the Quiz.</Box>
                <Button
                  className="submit-button"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={() => history.push("/employee/review")}
                >
                  See Result
                </Button>
              </>
            ) : (
              <>
                <Box>
                  <Typography></Typography>
                  <Typography>{quizInfo?.title}</Typography>
                  <Typography>
                    This Quiz will end on &nbsp;
                    {new Date(quizInfo?.endDate).toDateString()}
                  </Typography>
                </Box>
                <Box
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                  onClick={() => history.push("/employee/take-quiz")}
                >
                  <MButton text="Start Quiz" />
                </Box>
              </>
            )}
          </>
        ) : (
          <>
            <Box className="center-item">
              <Typography>No Quiz is available at the moment</Typography>
            </Box>
          </>
        )}
      </QuizWrapper>
    </EmployeeWrapper>
  );
};
