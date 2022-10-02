import * as React from "react";
import { QuizResponseType } from "../types/quiz-types";
import { sp } from "@pnp/sp";
import { useToasts } from "react-toast-notifications";

type QuizContextType = {
  responses: QuizResponseType[];
  page: number;
  total: number | null;
  next: (page: number) => void;
  prev: (page: number) => void;
  showNext: (currentPage: number) => boolean;
  showPrev: (currentPage: number) => boolean;
  showSubmit: (currentPage: number) => boolean;
  setTotal: (item: number) => void;
  setResponses: React.Dispatch<React.SetStateAction<QuizResponseType[]>>;
  setResponse: React.Dispatch<React.SetStateAction<QuizResponseType>>;
  loading: boolean;
  submitQuiz: (data: any) => Promise<void>;
  getPageResponse: (currentPage: number) => void;
  staff: any;
  response: QuizResponseType;
};

const QuizContext = React.createContext<QuizContextType>(null);

export const QuizContextProvider = ({ children }) => {
  const [page, setPage] = React.useState(0);
  const [total, setTotal] = React.useState(4);
  const [responses, setResponses] = React.useState<QuizResponseType[]>([]);
  const [response, setResponse] = React.useState<QuizResponseType>();
  const [loading, setLoading] = React.useState(false);
  const toast = useToasts().addToast;
  const [staff, setStaff] = React.useState<any>();

  React.useEffect(() => {
    getUser().then((res) => {
      setStaff({
        name: res?.DisplayName,
        email: res?.Email,
      });
    });
  }, []);

  function removeDuplicateObjectFromArray(array, key) {
    var check = new Set();
    array = array.filter((item) => item[key] != "");
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }

  const getPageResponse = (page: number) => {
    if (!responses?.length) return;
  };

  const next = (page: number) => {
    setPage(page + 1);
  };

  const prev = (page: number) => {
    setPage(page - 1);
  };

  const showNext = (currentPage: number) => {
    return currentPage !== total;
  };
  const showPrev = (currentPage: number) => {
    return currentPage !== 0;
  };
  const showSubmit = (currentPage: number) => {
    return currentPage + 1 === total;
  };

  const getUser = async () => {
    try {
      const user = await sp.profiles.myProperties.get();
      return user;
    } catch (error) {
      return error?.message;
    }
  };

  const submitQuiz = async (data) => {
    if (loading) return;
    setLoading(true);
    const filteredData = removeDuplicateObjectFromArray(
      data?.responses,
      "answer"
    );

    try {
      await sp.web.lists.getByTitle("QuizResponse").items.add({
        staffName: data?.staff?.name,
        staffEmail: data?.staff?.email,
        responses: JSON.stringify(filteredData),
      });
      toast(`Your response has been submitted.`, {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      setLoading(false);
      toast(`An error occured`, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <QuizContext.Provider
      value={{
        next,
        showNext,
        showPrev,
        prev,
        total,
        setTotal,
        responses,
        setResponses,
        page,
        loading,
        submitQuiz,
        showSubmit,
        getPageResponse,
        staff,
        setResponse,
        response,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const getQuizContextState = () => {
  const state = React.useContext(QuizContext);

  return {
    ...state,
  };
};
