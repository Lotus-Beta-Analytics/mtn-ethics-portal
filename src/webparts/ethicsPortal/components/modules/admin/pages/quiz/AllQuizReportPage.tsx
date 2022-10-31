import { Box, Typography } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { QuizReportTable } from "./components/QuizReportTable";
import { QuizStatus } from "./modals/EnableQuizPromptModal";

type Props = {};

export const AllQuizReportPage = (props: Props) => {
  const [quizReport, setQuizReport] = React.useState<any[]>([]);
  const toast = useToasts().addToast;

  React.useEffect(() => {
    (async () => {
      try {
        const res = await sp.web.lists
          .getByTitle("QuizResponse")
          .items.select(
            "Quiz/QuizTitle, Quiz/ID,  Quiz/duration, Quiz/status, StaffName, responses, StaffEmail"
          )
          .expand("Quiz")
          .getAll();

        setQuizReport(res);
      } catch (e) {
        errorAlert(toast);
      }
    })();
  }, []);
  const getResponsesCount = (quizId: string): number => {
    quizReport.filter((report) => report?.Quiz["ID"] == quizId);
    return quizReport.filter((report) => report?.Quiz["ID"] == quizId).length;
  };
  const [field, setField] = React.useState([]);
  const [questionsArr, setQuestions] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle("QuizQuestions")
      .items.getAll()
      .then((questions) => {
        setQuestions(questions);
      });
  }, []);

  const answersToQuestionsArr = () => {
    const obj = [];

    for (let i = 0; i < questionsArr?.length; i++) {
      obj.push({
        title: questionsArr[i].QuizTitle,
        field: `${questionsArr[i].question}`,
        type: "string",
        render: () => {
          return quizReport.filter(
            (report) => report?.Quiz["ID"] == questionsArr[i].ID
          ).length;
        },
        export: true,
      });
    }

    return obj;
  };

  React.useEffect(() => {
    questionsArr?.length > 0 && setField(answersToQuestionsArr());
  }, [questionsArr]);

  const columns = [
    { title: "Created By", field: "CreatedBy" },
    { title: "Date Created", field: "StaffEmail" },
    { title: "Quiz Title", field: "QuizQuizTitle]" },
    {
      title: "Quiz Status",
      field: "Quiz[status]",
      render: (rowData) => {
        return (
          <>
            {rowData?.Quiz["status"] === QuizStatus.Is_Enabled
              ? "Enabled and Running"
              : "Disabled and Stopped"}
          </>
        );
      },
    },

    ...field,
  ];

  return (
    <AdminWrapper>
      <Box my={2}>
        <QuizReportTable quizReport={quizReport} column={columns} />
      </Box>
    </AdminWrapper>
  );
};
