import { Box, colors, Typography, useMediaQuery } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { ToggleButton } from "@material-ui/lab";
import * as React from "react";
import { AdminNavigation } from "../../Navigation/admin-navigation/AdminNavigation";

type Props = {};

export const AdminWrapper = ({ children }) => {
  const md = useMediaQuery("(min-width:1240px)");
  const [openNavArea, setOpenNavArea] = React.useState(true);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
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
        {!md && (
          <ToggleButton
            style={{
              marginLeft: "auto",
            }}
            onClick={() => setOpenNavArea(!openNavArea)}
          >
            <Menu />
          </ToggleButton>
        )}
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
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
