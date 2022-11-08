import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { QuizWrapper } from "./components/QuizWrapper";
import { getQuizContextState } from "./context/QuizContext";
import "./styles.css";
import { CircularProgress } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { isChecked } from "./util";
import {
  ShowNextNavButton,
  ShowPrevNavButton,
  ShowSubmitButton,
} from "./components/showNavButtons";
import { sp } from "@pnp/sp";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { QuizTime } from "./components/QuizTime";
import { LandingPageHeaderWithImage } from "../../../shared/components/LandingPageHeaderWithImage";

export const QuizPage = () => {
  const {
    page,
    responses,
    setResponses,
    showSubmit,
    setTotal,
    total,
    questions,
    getting,
    startTimer,
    quizInfo,
    seconds,
    submitQuiz,
    staff,
  } = getQuizContextState();

  const history = useHistory();

  React.useEffect(() => {
    startTimer();
  }, []);

  React.useMemo(() => {
    if (quizInfo?.duration === 0 && seconds < 1) {
      submitQuiz({
        ...staff,
        responses,
      });
    }
  }, [quizInfo?.duration, seconds]);

  React.useEffect(() => {
    if (!staff) return;
    sp.web.lists
      .getByTitle("QuizResponse")
      .items.filter(`StaffEmail eq '${staff?.email}'`)
      .get()
      .then((items) => {
        // if (items.length > 0) {
        //   swal({
        //     closeOnEsc: false,
        //     closeOnClickOutside: false,
        //     text: "You have taken the Quiz.",
        //     dangerMode: true,
        //     icon: "error",
        //     title: "Error",
        //   }).then(() => {
        //     history.push("/");
        //   });
        // }
      });
  }, []);

  return (
    <EmployeeWrapper backButton={false}>
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/ask-question-online-concept-businessman-hand-hold-interface-question-marks-sign-web-question-marks-drawn-black-background-concept-searching-answer-uncertainty-problem-solving%203.png"
        text="Ethics Quiz"
      />

      <QuizWrapper>
        <QuizTime />
        <>
          {getting ? (
            <CircularProgress
              className="center-item"
              style={{ color: "#000" }}
            />
          ) : (
            <>
              {questions?.length > 0 ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box>
                    <ShowPrevNavButton />
                  </Box>
                  <Box
                    style={{
                      width: "90%",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      boxSizing: "border-box",
                      paddingLeft: "1rem",
                    }}
                  >
                    <Box>
                      <Typography>
                        Question {page + 1} of {total}
                      </Typography>
                      <Typography variant="h4">
                        {questions[page]?.question}
                      </Typography>
                    </Box>
                    <Box>
                      <Box className="options">
                        {questions[page]?.options?.map((option) => {
                          return (
                            <Box className="options-container">
                              <input
                                type={questions[page]?.type}
                                name={`option${page}`}
                                value={option}
                                checked={
                                  option == isChecked(responses, page, option)
                                    ? true
                                    : null
                                }
                                onChange={(e) => {
                                  const value = e?.target?.value;

                                  if (questions[page]?.type === "checkbox") {
                                    setResponses((prev) => {
                                      return prev.filter(
                                        ({ answer }) => answer != option
                                      );
                                    });

                                    if (e?.target?.checked) {
                                      setResponses((prev) => [
                                        ...prev,
                                        {
                                          id: questions[page]?.id,
                                          question: questions[page]?.question,
                                          answer: value,
                                          responseTime: `${quizInfo?.duration}m:${seconds}s`,
                                          isCorrect:
                                            questions[page]?.answer === value,
                                          point: questions[page]?.point,
                                        },
                                      ]);
                                    }
                                  } else if (
                                    questions[page]?.type === "radio"
                                  ) {
                                    setResponses((prev) => {
                                      return prev.filter(
                                        ({ id }) => id != questions[page]?.id
                                      );
                                    });

                                    if (e.target.checked) {
                                      setResponses((prev) => [
                                        ...prev,
                                        {
                                          id: questions[page]?.id,
                                          question: questions[page]?.question,
                                          answer: value,
                                          responseTime: `${quizInfo?.duration}m:${seconds}s`,
                                          isCorrect:
                                            questions[page]?.answer === value,
                                          point: questions[page]?.point,
                                        },
                                      ]);
                                    }
                                  }
                                }}
                              />
                              <label>{option}</label>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    {!showSubmit(page) ? (
                      <ShowNextNavButton />
                    ) : (
                      <ShowSubmitButton />
                    )}
                  </Box>
                </Box>
              ) : (
                <Box className="center-item">
                  <Typography>No Quiz</Typography>
                </Box>
              )}
            </>
          )}
        </>
      </QuizWrapper>
    </EmployeeWrapper>
  );
};
