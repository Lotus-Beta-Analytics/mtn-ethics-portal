import { Box, Typography } from "@material-ui/core";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { fetchAdmins } from "./apis/fetchAdmin";
import { updateAdmin } from "./apis/updateAdmin";
import { AdminListTable } from "./components/AdminListTable";
import { StaffData } from "./components/PeoplePicker";
import { User } from "./forms/UserForm";

export interface Data {
  adminId: string;
  data: StaffData;
}

type Props = {
  users: StaffData[];
  isLoading: boolean;
};

export const ManageAdminPage: React.FC<Props> = ({ users, isLoading }) => {
  return (
    <>
      <Box>
        <Typography variant="h6">All Admins</Typography>
        <Box>
          <AdminListTable users={users} loading={isLoading} />
        </Box>
      </Box>
    </>
  );
};
