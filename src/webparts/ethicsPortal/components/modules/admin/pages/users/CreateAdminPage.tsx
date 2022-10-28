import { Box, Button, CircularProgress } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { User, UserForm } from "./forms/UserForm";

export const CreateAdminPage = () => {
  const [admin, setAdmin] = React.useState<User>({
    StaffEmail: "",
    StaffName: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const toast = useToasts().addToast;

  const addAdminHandler = async () => {
    setSubmitting(true);
    if (!admin?.StaffEmail && !admin?.StaffName) return;
    try {
      await sp.web.lists.getByTitle("Admin").items.add({
        ...admin,
      });
      successAlert(toast, "Admin added successfully");
      setSubmitting(false);
      setAdmin({
        StaffEmail: "",
        StaffName: "",
      });
    } catch (e) {
      setSubmitting(false);
      errorAlert(toast);
    }
  };

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
            onClick={addAdminHandler}
            endIcon={submitting ? <CircularProgress size={20} /> : <></>}
            variant="contained"
            color="secondary"
          >
            Create Admin
          </Button>
        </Box>
      </Box>
    </AdminWrapper>
  );
};
