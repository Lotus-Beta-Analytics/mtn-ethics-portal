import * as React from "react";
import { QuizResponseType } from "../types/quiz-types";
import { sp } from "@pnp/sp";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { removeDuplicateObjectFromArray } from "../util";

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
  setScore: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  submitQuiz: (data: any) => Promise<void>;
  staff: any;
  response: QuizResponseType;
  calculateScore: (page: number) => void;
  score: number;
  questions: any[];
  getting: boolean;
  result: Result;
};

const QuizContext = React.createContext<QuizContextType>(null);

type Result = {
  correct: number;
  wrong: number;
  skipped: number;
};

export const QuizContextProvider = ({ children }) => {
  const [questions, setQuestions] = React.useState(questionsList);
  const [page, setPage] = React.useState(0);
  const [total, setTotal] = React.useState(4);
  const [responses, setResponses] = React.useState<QuizResponseType[]>([]);
  const [response, setResponse] = React.useState<QuizResponseType>();
  const [loading, setLoading] = React.useState(false);
  const [staff, setStaff] = React.useState<any>();
  const [score, setScore] = React.useState(0);
  const [getting, setGetting] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<Result>(null);
  const toast = useToasts().addToast;

  const history = useHistory();

  React.useEffect(() => {
    setGetting(true);
    sp.web.lists
      .getByTitle("Questions")
      .items.getAll()
      .then((items) => {
        setQuestions(items);
        setTotal(items.length);
        setGetting(false);
      })
      .catch((err) => {
        setGetting(false);
        toast(`An error occured`, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  }, []);

  React.useEffect(() => {
    getUser().then((res) => {
      setStaff({
        name: res?.DisplayName,
        email: res?.Email,
      });
    });
  }, []);

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

  const calculateScore = (page) => {
    setScore((prev) => prev + 1);
  };

  const submitQuiz = async (data) => {
    if (loading) return;
    setLoading(true);
    const filteredData: QuizResponseType[] = removeDuplicateObjectFromArray(
      data?.responses,
      "answer"
    );

    const groupedResponses = filteredData.reduce((prev, curr) => {
      const currCount = prev[`${curr.isCorrect}`] ?? [];
      return {
        ...prev,
        [`${curr.isCorrect}`]: [...currCount, curr],
      };
    }, {});
    setResult({
      correct: groupedResponses["true"] ? groupedResponses["true"].length : 0,
      wrong: groupedResponses["false"] ? groupedResponses["false"].length : 0,
      skipped:
        groupedResponses["false"] &&
        groupedResponses["true"] &&
        groupedResponses["false"].length + groupedResponses["true"].length ===
          questions.length
          ? 0
          : Math.abs(
              groupedResponses["false"]?.length ??
                0 - groupedResponses["true"]?.length ??
                0
            ) === questions.length
          ? 0
          : Math.abs(
              groupedResponses["false"]?.length ??
                0 - groupedResponses["true"]?.length ??
                0
            ),
    });
    const correctScore = groupedResponses["true"]
      ?.map(({ point }) => point)
      .reduce((prev, curr) => prev + curr, 0);
    setScore(correctScore);
    history.push("/employee/quiz-result");
    setPage(0);

    // try {
    //   await sp.web.lists.getByTitle("QuizResponse").items.add({
    //     staffName: data?.staff?.name,
    //     staffEmail: data?.staff?.email,
    //     responses: JSON.stringify(filteredData),
    //   });
    //   toast(`Your response has been submitted.`, {
    //     appearance: "success",
    //     autoDismiss: true,
    //   });
    // } catch (error) {
    //   setLoading(false);
    //   toast(`An error occured`, {
    //     appearance: "error",
    //     autoDismiss: true,
    //   });
    // }
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
        staff,
        setResponse,
        response,
        setScore,
        calculateScore,
        score,
        questions,
        getting,
        result,
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

const questionsList = [
  {
    id: 1,
    question: "What is your favorite fruit?",
    options: ["Banana", "Melon", "Apple", "Grape"],
    type: "radio",
    answer: "Banana",
    point: 5,
  },
  {
    id: 2,
    question: "What is your favorite car?",
    options: ["Toyota", "Benz", "KIA", "IVM"],
    type: "radio",
    answer: "Toyota",
    point: 5,
  },
  {
    id: 3,
    question: "What is your favorite color?",
    options: ["Yellow", "Red", "Green", "Blue"],
    type: "radio",
    answer: "Red",
    point: 5,
  },
  {
    id: 4,
    question: "What is your favorite language?",
    options: ["PHP", "JS", "Rust", "C#"],
    type: "radio",
    answer: "Rust",
    points: 5,
  },
];
