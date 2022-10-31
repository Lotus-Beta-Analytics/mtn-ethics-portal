import { Box } from "@material-ui/core";
import * as React from "react";
import {
  FaAd,
  FaAngrycreative,
  FaChevronDown,
  FaImages,
  FaUserAstronaut,
  FaVideo,
} from "react-icons/fa";
import { adminNavItems } from "./menu";
import "./styles.css";
import { useHistory } from "react-router-dom";

type Props = {};

export const AdminNavigation = (props: Props) => {
  const [activeMainMenu, setActiveMainMenu] = React.useState(0);
  const [activeSubMenu, setActiveSubMenu] = React.useState(0);
  const history = useHistory();
  return (
    <ul
      style={{
        width: "250px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#fff",
        boxShadow: "2px 2p 5px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
        padding: "1rem .5rem",
        position: "absolute",
        zIndex: 99,
        top: 0,
      }}
    >
      {adminNavItems.map((mainMenu, index) => {
        return (
          <>
            <li
              style={{
                display: "flex",
                gap: ".5rem",
                width: "100%",
                alignItems: "center",
                cursor: "pointer",
                boxSizing: "border-box",
                minHeight: "40px",
                padding: "0 .5rem",
              }}
              onClick={() => {
                setActiveMainMenu(index);
                history.push(mainMenu?.link);
              }}
              className={activeMainMenu === index ? "active" : ""}
            >
              <Box>
                <mainMenu.icon />
              </Box>
              <Box>{mainMenu.title}</Box>
              <Box>{mainMenu?.subNav?.length > 0 && <FaChevronDown />}</Box>
            </li>
            <Box display="flex" flexDirection="column">
              {activeMainMenu === index && (
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginLeft: "1rem",
                  }}
                >
                  {adminNavItems[activeMainMenu]?.subNav?.map((sub, i) => {
                    return (
                      <li
                        onClick={() => {
                          setActiveSubMenu(i);
                          history.push(sub?.link);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: ".5rem",
                          cursor: "pointer",
                        }}
                      >
                        <Box>
                          <sub.icon />
                        </Box>
                        <Box>{sub.title}</Box>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Box>
          </>
        );
      })}
    </ul>
  );
};
