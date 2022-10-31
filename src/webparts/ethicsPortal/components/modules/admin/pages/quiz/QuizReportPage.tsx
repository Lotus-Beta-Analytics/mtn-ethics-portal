import { Box, Button, Typography } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { QuizReportTable } from "./components/QuizReportTable";
import { QuizStatus } from "./modals/EnableQuizPromptModal";

export const QuizReportPage = () => {
  const { quizId } = useParams();
  const [quizReport, setQuizReport] = React.useState<any>();
  const toast = useToasts().addToast;
  const history = useHistory();
  React.useEffect(() => {
    (async () => {
      try {
        const res = await sp.web.lists
          .getByTitle("QuizResponse")
          .items.select(
            "Quiz/QuizTitle, Quiz/duration, Quiz/status, StaffName, responses, StaffEmail"
          )
          .expand("Quiz")
          .filter(`QuizId eq '${quizId}'`)
          .get();

        if (res?.length) {
          setQuizReport(res[0]);
        }
      } catch (e) {
        errorAlert(toast);
      }
    })();
  }, []);

  const [field, setField] = React.useState([]);
  const [questionsArr, setQuestions] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle("QuizQuestions")
      .items.getById(quizId)
      .get()
      .then((questions) => {
        setQuestions(
          questions?.questions ? JSON.parse(questions?.questions) : []
        );
      });
  }, []);

  const answersToQuestionsArr = () => {
    const obj = [];

    for (let i = 0; i < questionsArr?.length; i++) {
      obj.push({
        title: questionsArr[i].question,
        field: `${questionsArr[i].question}`,
        type: "string",
        render: () => {
          return (
            quizReport &&
            JSON.parse(quizReport?.responses)
              .filter((response) => {
                return (
                  response && response["question"] == questionsArr[i].question
                );
              })
              .map((response) => {
                return (
                  <li
                    style={{
                      fontSize: "10px",
                      listStyle: "none",
                      display: "flex",
                      padding: ".5rem",
                      alignItems: "center",
                      gap: ".5rem",
                      minWidth: "40%",
                    }}
                  >
                    <Typography>{response?.answer}</Typography>
                    {response?.isCorrect ? (
                      <FaCheck color="green" />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </li>
                );
              })
          );
        },
        export: true,
      });
    }

    return obj;
  };

  React.useMemo(() => {
    questionsArr?.length > 0 && setField(answersToQuestionsArr());
  }, [questionsArr]);

  const columns = [
    { title: "Staff Name", field: "StaffName" },
    { title: "Staff Email Address", field: "StaffEmail" },
    { title: "Quiz Title", field: "Quiz[QuizTitle]" },
    ...field,
    { title: "Quiz Status", field: "Quiz[status]" },
  ];

  return (
    <AdminWrapper>
      <Box display="flex" justifyContent="flex-start" my={2}>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          color="secondary"
        >
          Go back
        </Button>
      </Box>
      <Box my={2}>
        {quizReport ? (
          <QuizReportTable quizReport={[quizReport]} column={columns} />
        ) : (
          <QuizReportTable quizReport={[]} column={columns} />
        )}
      </Box>
    </AdminWrapper>
  );
};
