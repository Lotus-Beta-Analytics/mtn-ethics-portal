import { colors, Typography } from "@material-ui/core";
import * as React from "react";
import { AdminNavigation } from "../../Navigation/admin-navigation/AdminNavigation";

type Props = {};

export const AdminWrapper = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: colors.grey[100],
      }}
    >
      <AdminNavigation />
      <Typography
        style={{
          margin: "auto",
          textAlign: "center",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50px",
        }}
        variant="h5"
      >
        Ethics Portal Management
      </Typography>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100%",
          display: "grid",
          gridTemplateColumns: "auto",
          boxSizing: "border-box",
          paddingLeft: "20%",
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
