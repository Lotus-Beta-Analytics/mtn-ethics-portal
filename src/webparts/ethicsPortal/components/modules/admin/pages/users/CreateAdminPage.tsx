import { Box, Button, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { fetchAdmins } from "./apis/fetchAdmin";
import { User, UserForm } from "./forms/UserForm";
import { ManageAdminPage } from "./ManageAdminPage";

export const CreateAdminPage = () => {
  const [admin, setAdmin] = React.useState<User>({
    StaffEmail: "",
    StaffName: "",
  });
  const res = useQuery<User[]>(["getAdmins"], fetchAdmins);
  const addAdminHandler = async () => {
    if (!admin?.StaffEmail && !admin?.StaffName) return;
    try {
      const res = await sp.web.lists.getByTitle("Admin").items.add({
        ...admin,
      });
      return res;
    } catch (e) {
      return e;
    }
  };
  const toast = useToasts().addToast;
  const queryClient = useQueryClient();
  const mutation = useMutation(() => addAdminHandler(), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAdmins"]);
      successAlert(toast, "Admin added successfully");
      setAdmin({
        StaffEmail: "",
        StaffName: "",
      });
    },
    onError: () => {
      errorAlert(toast);
    },
  });

  return (
    <AdminWrapper>
      <Box
        style={{
          width: "100%",
          padding: "1rem",
          boxSizing: "border-box",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <UserForm user={admin} onUpdate={(user) => setAdmin(user)} />
        <Box
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button
            disabled={!admin?.StaffEmail && !admin?.StaffName}
            onClick={() => mutation.mutate()}
            endIcon={
              mutation.isLoading ? <CircularProgress size={20} /> : <></>
            }
            variant="contained"
            color="secondary"
          >
            Create Admin
          </Button>
        </Box>

        <Box>
          <ManageAdminPage users={res?.data} isLoading={res?.isLoading} />
        </Box>
      </Box>
    </AdminWrapper>
  );
};
