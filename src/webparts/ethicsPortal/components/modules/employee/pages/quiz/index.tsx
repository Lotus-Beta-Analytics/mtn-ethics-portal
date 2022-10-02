import { Box } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { MButton } from "../../../shared/components/buttons/MButton";
import { LandingPageHeaderWithImage } from "../../../shared/components/LandingPageHeaderWithImage";
import { QuizWrapper } from "./components/QuizWrapper";
import { useHistory } from "react-router-dom";

export const QuizLandingPage = () => {
  const history = useHistory();
  return (
    <EmployeeWrapper backButton={false} showFooter={false}>
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png"
        text="Ethics Quiz"
      />
      <QuizWrapper>
        <Box>hello</Box>
        <Box
          style={{ position: "absolute", bottom: "10px", right: "10px" }}
          onClick={() => history.push("/employee/take-quiz")}
        >
          <MButton text="Start Quiz" />
        </Box>
      </QuizWrapper>
    </EmployeeWrapper>
  );
};
