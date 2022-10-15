import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Theme,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import {
  CreateAdminQuizContextData,
  CreateAdminQuizContextProvider,
} from "./context/AdminQuizContext";
import { getStepContent } from "./utils/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
    },
  })
);

const Component = () => {
  const classes = useStyles();
  const {
    activeStep,
    steps,
    isStepOptional,
    isStepSkipped,
    handleReset,
    handleBack,
    handleSkip,
    handleNext,
    getStepContent,
    submitHandler,
    loading,
  } = CreateAdminQuizContextData();
  return (
    <Box>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div style={{ position: "relative", height: "70vh" }}>
              {getStepContent(activeStep)}
              <div style={{ position: "absolute", bottom: 0, right: 0 }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length - 1 ? submitHandler : handleNext
                  }
                >
                  {activeStep === steps.length - 1
                    ? loading
                      ? "loading.."
                      : "Finish"
                    : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

export const CreateQuizPage = () => (
  <CreateAdminQuizContextProvider>
    <Component />
  </CreateAdminQuizContextProvider>
);
