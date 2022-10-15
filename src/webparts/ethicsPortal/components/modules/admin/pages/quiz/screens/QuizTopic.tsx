import { InputAdornment, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as React from "react";
import { FaBook } from "react-icons/fa";
import { CreateAdminQuizContextData } from "../context/AdminQuizContext";

type Props = {};

export const QuizTopic = (props: Props) => {
  const { quiz, handleChange, setQuiz } = CreateAdminQuizContextData();
  console.log(quiz, "............");

  return (
    <Box component="form" position="relative">
      <Box
        width="70%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        margin="0 auto"
        style={{ gap: "2rem" }}
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
          label="Quiz Topic"
          value={quiz?.topic ?? ""}
          name="topic"
          onChange={(e) => handleChange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaBook />
              </InputAdornment>
            ),
          }}
        />
        <Autocomplete
          id="agency"
          freeSolo={false}
          options={areas.map((option) => option.name)}
          fullWidth
          value={quiz?.area ?? ""}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Quiz Area"
              margin="normal"
              variant="outlined"
            />
          )}
          onChange={(e, newvalue) =>
            setQuiz({
              ...quiz,
              area: newvalue,
            })
          }
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Quiz Instruction"
          value={quiz?.instruction ?? ""}
          name="instruction"
          onChange={(e) => handleChange(e)}
          multiline
          minRows={3}
        />
      </Box>
    </Box>
  );
};

const areas = [
  {
    name: "Conflict of Interest",
    value: "Conflict of Interest",
  },
];
