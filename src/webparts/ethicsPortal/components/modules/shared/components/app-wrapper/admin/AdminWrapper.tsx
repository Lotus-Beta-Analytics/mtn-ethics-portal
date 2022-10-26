import { colors } from "@material-ui/core";
import * as React from "react";
import { AdminNavigation } from "../../Navigation/admin-navigation/AdminNavigation";

type Props = {};

export const AdminWrapper = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: colors.grey[100],
      }}
    >
      <AdminNavigation />
      <div
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
      >
        Ethics Portal Management
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: ".5fr auto",
        }}
      >
        <div></div>
        <div>{children}</div>
      </div>
    </div>
  );
};
