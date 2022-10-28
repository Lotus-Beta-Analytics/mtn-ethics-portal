import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import * as React from "react";
import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import styled from "styled-components";
import { Web } from "@pnp/sp/webs";
import "../styles/people-picker.css";
import { User } from "../forms/UserForm";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      outline: "none",
      border: "none",
      fontSize: "13px",
    },
    container: {
      outline: "none",
      border: "none",
      fontSize: "13px",
    },
  })
);

const filter = createFilterOptions<any>();

export const PeoplePicker: React.FC<{
  onUpdate?: React.Dispatch<User>;
  label: string;
  value: User;
  filterItem?: string;
}> = ({ onUpdate, label, value, filterItem = "EMAIL_ADDRESS" }) => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState("");
  const [showHelperText, setHelperText] = React.useState("");

  const classes = useStyles();

  React.useMemo(() => {
    setLoading(true);
    Web(
      "https://mtncloud.sharepoint.com/sites/MTNNigeriaComplianceUniverse/testenv"
    )
      .lists.getByTitle(`CURRENT HCM STAFF LIST`)

      .items.getAll()
      .then((response) => {
        setUsers([]);
        setLoading(false);
      });
  }, []);

  return (
    <Autocomplete
      value={value[filterItem] || ""}
      fullWidth
      className={classes.container}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          onUpdate({
            [filterItem]: newValue,
            ...value,
          });
        } else if (newValue) {
          // Create a new value from the user input
          onUpdate(newValue);
        } else {
          onUpdate(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option);
        if (inputValue !== "" && !isExisting) {
          filtered.push(inputValue);
        }

        return filtered;
      }}
      options={users.map((user) => user?.filterItem)}
      getOptionLabel={(option) => {
        return option ? option : "";
      }}
      freeSolo
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: <></>,
          }}
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onBlur={(e) => {
            if (!e.target.value.trim()) {
              setHelperText("*required");
            } else {
              onUpdate({
                ...value,
                [filterItem]: e.target.value || "",
              });
            }
          }}
          label={label}
          helperText={showHelperText}
          FormHelperTextProps={{
            color: "red",
          }}
        />
      )}
    />
  );
};
