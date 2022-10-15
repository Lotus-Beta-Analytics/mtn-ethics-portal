import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import * as React from "react";
import { FaBook, FaEdit, FaTrash } from "react-icons/fa";
import { QuestionsTable } from "../components/QuestionsTable";
import { CreateAdminQuizContextData } from "../context/AdminQuizContext";
import { QuizQuestion } from "../types/admin-quiz-create-type";
import "./style.css";

type Props = {};

export const QuizQuestionSetUp = (props: Props) => {
  const { quiz, handleChange, setQuiz } = CreateAdminQuizContextData();
  const [option, setOption] = React.useState("");
  const [options, setOptions] = React.useState<string[] | null>([]);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [indextoUpdate, setIndextoUpdate] = React.useState(null);
  const [q, setQ] = React.useState("");
  const [type, setType] = React.useState("");
  const [answer, setAnswer] = React.useState(null);
  const [question, setQuestion] = React.useState<QuizQuestion>();

  //delete an option
  const onDeleteOption = (i: number) => {
    const newOptions = options.filter((_, index) => index !== i);
    setOptions(newOptions);
  };

  const onEditOption = (i: number) => {
    setIndextoUpdate(i);
    setIsUpdating(true);
    setOption(options[i]);
  };

  const updateOptionHandler = () => {
    options.splice(indextoUpdate, 1, option);
    setOption("");
    setIsUpdating(false);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setQuestion({
      ...question,
      [name as keyof QuizQuestion]: value,
    });
  };

  return (
    <Box component="form" style={{ overflowY: "scroll", height: "80%" }}>
      <Box
        width="70%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        margin="0 auto"
        style={{ gap: "1rem" }}
      >
        <Typography
          variant="h5"
          style={{
            marginRight: "auto",
            borderBottom: "1px solid #e6e6e6",
            width: "100%",
            paddingBottom: "4px",
          }}
        >
          Quiz Topic
        </Typography>

        <TextField
          variant="outlined"
          fullWidth
          label="Question"
          value={question?.question ?? ""}
          name="question"
          onChange={(e) => changeHandler(e)}
          multiline
          minRows={3}
        />
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{ gap: "2rem" }}
        >
          <Autocomplete
            id="type"
            freeSolo={false}
            options={questionTypes.map((option) => option)}
            fullWidth
            value={question?.type}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Question Type"
                margin="normal"
                variant="outlined"
              />
            )}
            onChange={(e, newvalue) =>
              setQuestion({
                ...question,
                type: newvalue,
              })
            }
          />
          <TextField
            name="point"
            type="number"
            label="Question Point"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            value={question?.point ?? ""}
            onChange={(e) => changeHandler(e)}
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box width="100%">
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              label="Option"
              value={option}
              name="option"
              onChange={(e) => setOption(e.target.value)}
            />
            <Box
              onClick={() => {
                if (!option) return;

                if (isUpdating) {
                  updateOptionHandler();
                  return;
                }
                setOptions([option, ...options]);
                setOption("");
              }}
              className="action-btn"
            >
              {isUpdating ? "Update" : "Add"}
            </Box>
          </Box>
          <Box width="100%" display="flex" flexDirection="column">
            {options?.length > 0 &&
              options?.map((option, i) => (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  className={
                    question?.answer === option ? "correct-answer" : ""
                  }
                >
                  <Typography>{option}</Typography>
                  <Box display="flex" alignItems="center" gridGap={2}>
                    <IconButton onClick={() => onEditOption(i)}>
                      <FaEdit />
                    </IconButton>
                    <IconButton onClick={() => onDeleteOption(i)}>
                      <FaTrash />
                    </IconButton>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
        <Autocomplete
          id="answer"
          freeSolo={false}
          options={options.map((option) => option)}
          fullWidth
          value={question?.answer ?? ""}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Answer"
              margin="normal"
              variant="outlined"
            />
          )}
          onChange={(e, newvalue) =>
            setQuestion({
              ...question,
              answer: newvalue,
            })
          }
        />

        <Box
          onClick={() => {
            if (!question?.answer && !options.length && !question?.type) {
              return;
            }

            setQuiz({
              ...quiz,
              questions: [
                ...(quiz?.questions ?? []),
                {
                  ...question,
                  options,
                },
              ],
            });

            setQuestion(null);
            setOptions([]);
          }}
          className="action-btn"
        >
          Add Question
        </Box>
      </Box>
      <QuestionsTable questions={quiz?.questions} />
    </Box>
  );
};

const questionTypes = ["radio"];
