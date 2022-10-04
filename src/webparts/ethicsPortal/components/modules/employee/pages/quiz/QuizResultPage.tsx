import { CircularProgress, Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { PieChart } from "./components/PieChart";
import { QuizWrapper } from "./components/QuizWrapper";
import { getQuizContextState } from "./context/QuizContext";
import { useHistory } from "react-router-dom";
import "./styles.css";

type Props = {};

export const QuizResultPage = (props: Props) => {
  const { questions, result } = getQuizContextState();
  const history = useHistory();
  return (
    <EmployeeWrapper showFooter={false} backButton={false}>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
          text="Ethics Quiz"
        />
        <QuizWrapper>
          <Box className="result-container">
            <Box>
              <PieChart />
            </Box>
            <Box>
              <Typography>
                {result?.correct}/{questions.length}
              </Typography>
              <Typography></Typography>
              <Typography></Typography>
              <Box
                onClick={() => history.push("/employee/review")}
                className="review-button"
              >
                Review Questions
              </Box>
            </Box>
          </Box>
        </QuizWrapper>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
