import { sp } from "@pnp/sp";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { successAlert, errorAlert } from "../../../../utils/toast-messages";
import { User, UserForm } from "./forms/UserForm";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { StaffData } from "./components/PeoplePicker";

export const UpdateAdminPage = () => {
  const [admin, setAdmin] = React.useState<StaffData>();
  const { userId } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const toast = useToasts().addToast;

  React.useEffect(() => {
    setLoading(true);
    sp.web.lists
      .getByTitle("Admin")
      .items.getById(userId)
      .get()
      .then((item) => {
        setLoading(false);
        setAdmin({
          Email: item?.StaffEmail,
          DisplayName: item?.StaffName,
        });
      })
      .catch((error) => {
        setLoading(false);
        errorAlert(toast);
      });
  }, []);

  const updateAdminHandler = async () => {
    setSubmitting(true);
    if (!admin?.Email && !admin?.DisplayName) return;

    try {
      await sp.web.lists
        .getByTitle("Admin")
        .items.getById(userId)
        .update({
          ...admin,
        });
      successAlert(toast, "Admin updated successfully");
      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
      errorAlert(toast);
    }
  };
  return (
    <AdminWrapper>
      <Box style={{ width: "100%" }}>
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <>
            <UserForm user={admin} onUpdate={(user) => setAdmin(user)} />
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <Button>Cancel</Button>
              <Button
                disabled={!admin?.Email && !admin?.DisplayName}
                onClick={updateAdminHandler}
                endIcon={submitting ? <CircularProgress size={20} /> : <></>}
              >
                Update Admin
              </Button>
            </Box>
          </>
        )}
      </Box>
    </AdminWrapper>
  );
};
