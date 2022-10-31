import { Box } from "@material-ui/core";
import * as React from "react";
import { PeoplePicker } from "../components/PeoplePicker";

type Props = {
  user: User;
  onUpdate: React.Dispatch<User>;
};

export const UserForm: React.FC<Props> = ({ user, onUpdate }) => {
  return (
    <Box
      component="form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "80%",
      }}
    >
      <Box my={2} width="100%">
        <PeoplePicker
          label="Admin Name"
          value={user}
          onUpdate={(staff) => onUpdate(staff)}
          filterItem="StaffName"
        />
      </Box>

      <Box my={2} width="100%">
        <PeoplePicker
          label="Admin Email address"
          value={user}
          onUpdate={(staff) => onUpdate(staff)}
          filterItem="StaffEmail"
        />
      </Box>
    </Box>
  );
};

export interface User {
  StaffName: string;
  StaffEmail: string;
}
