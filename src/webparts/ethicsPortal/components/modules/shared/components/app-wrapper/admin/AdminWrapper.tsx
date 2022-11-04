import {
  Box,
  Button,
  colors,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { ToggleButton } from "@material-ui/lab";
import * as React from "react";
import { AdminNavigation } from "../../Navigation/admin-navigation/AdminNavigation";
import { useHistory } from "react-router-dom";

type Props = {};

export const AdminWrapper = ({ children }) => {
  const md = useMediaQuery("(min-width:1240px)");
  const [openNavArea, setOpenNavArea] = React.useState(false);
  const history = useHistory();

  return (
    <div
      style={{
        position: "relative",
        width: "90vw",
        minHeight: "100vh",
        backgroundColor: colors.grey[100],
      }}
    >
      <Box
        style={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "70px",

          backgroundColor: "#FFCC00",
          paddingRight: "20px",
        }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", textAlign: "center", flex: "1" }}
        >
          Ethics Portal Management
        </Typography>

        <ToggleButton
          style={{
            marginLeft: "auto",
          }}
          onClick={() => setOpenNavArea(!openNavArea)}
        >
          <Menu />
        </ToggleButton>
      </Box>

      {openNavArea && <AdminNavigation />}

      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100%",
          display: "grid",
          gridTemplateColumns: "auto",
          boxSizing: "border-box",
          padding: openNavArea ? "0 5% 0 20%" : "0 5%",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".5rem",
          }}
        >
          <Button
            variant="text"
            color="secondary"
            onClick={() => history.push("/")}
          >
            Ethics Portal
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
