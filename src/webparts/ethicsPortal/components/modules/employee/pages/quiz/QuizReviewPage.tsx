import { Box, colors, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { QuizWrapper } from "./components/QuizWrapper";
import { getQuizContextState } from "./context/QuizContext";
import "./styles.css";
import { CircularProgress } from "@material-ui/core";
import { isChecked } from "./util";
import {
  ShowNextNavButton,
  ShowPrevNavButton,
} from "./components/showNavButtons";

export const QuizReviewPage = () => {
  const { page, responses, showSubmit, total, questions, getting } =
    getQuizContextState();

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
                                  isChecked(responses, page, option)
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
                                    option == isChecked(responses, page, option)
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
                      {!showSubmit(page) ? <ShowNextNavButton /> : <></>}
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
