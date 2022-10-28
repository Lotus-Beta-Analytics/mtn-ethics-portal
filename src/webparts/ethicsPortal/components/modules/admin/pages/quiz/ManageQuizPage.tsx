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

  React.useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = () => {
    sp.web.lists
      .getByTitle("QuizQuestions")
      .items.get()
      .then((items) => {
        setQuizzes(items);
      })
      .catch((err) => {
        errorAlert(toast);
      });
  };

  return (
    <AdminWrapper>
      <QuizTable quizzes={quizzes} onUpdate={(res) => fetchQuizzes()} />
    </AdminWrapper>
  );
};
