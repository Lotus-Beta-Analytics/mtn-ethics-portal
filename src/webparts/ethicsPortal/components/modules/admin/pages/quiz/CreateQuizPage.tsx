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
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
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

export const CreateQuizPage = () => {
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
    isUpdating,
    updateHandler,
    quiz,
  } = CreateAdminQuizContextData();
  return (
    <AdminWrapper>
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
                  onClick={() => {
                    if (activeStep === steps.length - 1) {
                      isUpdating ? updateHandler(quiz?.ID) : submitHandler();
                    } else {
                      handleNext();
                    }
                  }}
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
    </AdminWrapper>
  );
};
