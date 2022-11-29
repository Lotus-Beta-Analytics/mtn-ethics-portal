import { Box, TextField } from "@material-ui/core";
import React from "react";

type Props = {
  control: string;
  maxLength?: number;
  rows?: number;
  label: string;
  placeholder?: string;
  onUpdate: React.Dispatch<string>;
};

export const LongTextInput: React.FC<Props> = ({
  control,
  rows = 2,
  label,
  placeholder,
  onUpdate,
}) => {
  return (
    <Box my={2} width="100%">
      <TextField
        label={label}
        value={control}
        type="text"
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        multiline
        maxRows={rows}
        InputProps={{
          onChange: (e) => {
            if (e.target.value?.length > 49) return;
            onUpdate(e.target.value);
          },
        }}
        helperText={`Please enter less than 50 words: You have ${Math.abs(
          50 - (control ? control?.length : 0)
        )} left`}
      />
    </Box>
  );
};
