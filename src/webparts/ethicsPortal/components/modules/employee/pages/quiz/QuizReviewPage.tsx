import { Box, Button, colors, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { QuizWrapper } from "./components/QuizWrapper";
import { AnswerStatus, getQuizContextState } from "./context/QuizContext";
import "./styles.css";
import { CircularProgress } from "@material-ui/core";
import { isChecked } from "./util";
import {
  ShowNextNavButton,
  ShowPrevNavButton,
} from "./components/showNavButtons";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../utils/toast-messages";
import { QuizResponseType } from "./types/quiz-types";
import { QuizStatus } from "../../../admin/pages/quiz/modals/EnableQuizPromptModal";

export const QuizReviewPage = () => {
  const { page, showSubmit, total, questions, getting, doneHandler } =
    getQuizContextState();

  const { data } = useQuery(["pr"], async () => {
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

  const [staffResponses, setStaffResponses] = React.useState<
    QuizResponseType[]
  >([]);

  React.useEffect(() => {
    if (!data) return;
    sp.web.lists
      .getByTitle("QuizResponse")
      .items.filter(`StaffEmail eq '${data?.email}'`)
      .get()
      .then((items) => {
        let userResponses = items;
        userResponses = JSON.parse(userResponses[0].responses);
        setStaffResponses(userResponses);
      });
  }, [data?.email]);

  return (
    <EmployeeWrapper showFooter={false} backButton={false}>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
          text="Ethics Quiz"
        />
        <QuizWrapper>
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
                    <Box style={{ textAlign: "center" }}>
                      <Typography>
                        Question {page + 1} of {total}
                      </Typography>
                      <Typography variant="h5">Question {page + 1}</Typography>
                      <Box>
                        <Typography variant="h4">
                          {questions[page]?.question}
                        </Typography>
                        <Box className="options">
                          {questions[page]?.options?.map((option) => {
                            return (
                              <Box
                                className={`options-container ${
                                  questions[page].answer ===
                                  isChecked(staffResponses, page, option)
                                    ? "correct"
                                    : ""
                                } ${
                                  questions[page].answer === option
                                    ? "correct"
                                    : "wrong"
                                }`}
                                style={{
                                  backgroundColor:
                                    questions[page].answer === option
                                      ? colors.green[50]
                                      : colors.red[50],
                                }}
                              >
                                <input
                                  type={questions[page]?.type}
                                  name={`option${page}`}
                                  value={option}
                                  checked={
                                    option ==
                                    isChecked(staffResponses, page, option)
                                      ? true
                                      : null
                                  }
                                  readOnly={true}
                                  style={{
                                    cursor: "not-allowed",
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
                        <Button
                          className="submit-button"
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                          }}
                          variant="contained"
                          color="secondary"
                          onClick={doneHandler}
                        >
                          Done
                        </Button>
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
      </PageWrapper>
    </EmployeeWrapper>
  );
};
