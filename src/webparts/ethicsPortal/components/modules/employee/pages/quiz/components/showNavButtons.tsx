import { Box, CircularProgress } from "@material-ui/core";
import * as React from "react";
import { getQuizContextState } from "../context/QuizContext";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const ShowNextNavButton = () => {
  const { next, page, showNext, setScore } = getQuizContextState();
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
export const ShowPrevNavButton = () => {
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
export const ShowSubmitButton = () => {
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
