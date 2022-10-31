import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { QuizTable } from "./components/QuizTable";
import { CreateAdminQuizContextProvider } from "./context/AdminQuizContext";

type Props = {};

export const ManageQuizPage = (props: Props) => {
  const toast = useToasts().addToast;
  const [quizzes, setQuizzes] = React.useState([]);
  const [quizReport, setQuizReport] = React.useState<any[]>([]);

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

  React.useEffect(() => {
    fetchQuizzes();
  }, [quizReport]);

  const fetchQuizzes = () => {
    sp.web.lists
      .getByTitle("QuizQuestions")
      .items.get()
      .then((items) => {
        console.log(quizReport);
        const mut = items.map((item) => {
          return {
            ...item,
            count: quizReport?.filter((Quiz) => Quiz?.Quiz["ID"] === item?.ID)
              .length,
          };
        });
        setQuizzes(mut);
      })
      .catch((err) => {
        errorAlert(toast);
      });
  };

  return (
    <AdminWrapper>
      <Box my={3}>
        <QuizTable quizzes={quizzes} onUpdate={(res) => fetchQuizzes()} />
      </Box>
    </AdminWrapper>
  );
};
