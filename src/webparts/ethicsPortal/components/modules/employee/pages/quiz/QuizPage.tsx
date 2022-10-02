import { Box, Typography } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { MButton } from "../../../shared/components/buttons/MButton";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { QuizWrapper } from "./components/QuizWrapper";
import {
  getQuizContextState,
  QuizContextProvider,
} from "./context/QuizContext";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./styles.css";
import { CircularProgress } from "@material-ui/core";
import { QuizResponseType } from "./types/quiz-types";
import { useToasts } from "react-toast-notifications";
import { isChecked } from "./util";

const QuizPageComponent = () => {
  const { page, responses, setResponses, showSubmit, setTotal, total } =
    getQuizContextState();
  const [questions, setQuestions] = React.useState(questionsList);
  const [getting, setGetting] = React.useState<boolean>(false);
  const toast = useToasts().addToast;

  React.useEffect(() => {
    setGetting(true);
    sp.web.lists
      .getByTitle("Questions")
      .items.getAll()
      .then((items) => {
        setQuestions(items);
        setTotal(items.length);
        setGetting(false);
      })
      .catch((err) => {
        setGetting(false);
        toast(`An error occured`, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  }, []);

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
                                            responseTime: "2s",
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
                                            responseTime: "2s",
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
      </PageWrapper>
    </EmployeeWrapper>
  );
};

export const QuizPage = (props) => {
  return (
    <QuizContextProvider>
      <QuizPageComponent {...props} />
    </QuizContextProvider>
  );
};

const ShowNextNavButton = () => {
  const { next, page, showNext } = getQuizContextState();
  const getContent = () => {
    if (showNext(page)) {
      return (
        <Box
          className="nav-arrow"
          onClick={() => {
            next(page);
          }}
        >
          <ArrowForwardIosIcon />
        </Box>
      );
    }
  };

  return <>{getContent()}</>;
};
const ShowPrevNavButton = () => {
  const { page, prev, showPrev } = getQuizContextState();
  const getContent = () => {
    if (showPrev(page)) {
      return (
        <Box className="nav-arrow" onClick={() => prev(page)}>
          <ArrowBackIosIcon />
        </Box>
      );
    }
  };

  return <>{getContent()}</>;
};
const ShowSubmitButton = () => {
  const { loading, page, responses, showSubmit, submitQuiz, staff } =
    getQuizContextState();
  const getContent = () => {
    if (showSubmit(page)) {
      return (
        <Box
          className="submit-button"
          style={{ position: "absolute", bottom: "10px", right: "10px" }}
          onClick={() => {
            const data = {
              ...staff,
              responses,
            };
            submitQuiz(data);
          }}
        >
          {loading ? (
            <CircularProgress size={20} style={{ color: "#000" }} />
          ) : (
            "Finish Quiz"
          )}
        </Box>
      );
    }
  };

  return <>{getContent()}</>;
};

const questionsList = [
  {
    id: 1,
    question: "What is your favorite fruit?",
    options: ["Banana", "Melon", "Apple", "Grape"],
    type: "radio",
  },
  {
    id: 2,
    question: "What is your favorite car?",
    options: ["Toyota", "Benz", "KIA", "IVM"],
    type: "radio",
  },
  {
    id: 3,
    question: "What is your favorite color?",
    options: ["Yellow", "Red", "Green", "Blue"],
    type: "checkbox",
  },
  {
    id: 4,
    question: "What is your favorite language?",
    options: ["PHP", "JS", "Rust", "C#"],
    type: "radio",
  },
];
