import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import * as React from "react";
import { BlogSectionEnums } from "./blog-section-enums/blog-section-enums";

type Props = {
  section: BlogSectionEnums;
  onUpdate: React.Dispatch<BlogSectionEnums>;
};

export const CreateSection: React.FC<Props> = ({ onUpdate, section }) => {
  return (
    <Autocomplete
      id="type"
      freeSolo={false}
      options={sections?.map((option) => option)}
      fullWidth
      value={section}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a section"
          margin="normal"
          variant="outlined"
        />
      )}
      onChange={(e, newvalue) => onUpdate(newvalue)}
    />
  );
};

const sections = [
  BlogSectionEnums.Anti_bribery,
  BlogSectionEnums.Conduct,
  BlogSectionEnums.Conflict,
  BlogSectionEnums.Gift,
  BlogSectionEnums.Privacy,
  BlogSectionEnums.Whistle_Blowing,
];
