import { Box } from "@material-ui/core";
import * as React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { adminNavItems } from "./menu";
import "./styles.css";
import { useHistory } from "react-router-dom";

type Props = {};

export const AdminNavigation = (props: Props) => {
  const [activeMainMenu, setActiveMainMenu] = React.useState(-1);
  const [activeSubMenu, setActiveSubMenu] = React.useState(-1);
  const [openMenu, setOpenMenu] = React.useState(false);
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
      <Box onClick={() => history.push("/")}>
        <img
          src="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/logo.png"
          alt=""
          width="150px"
          height="50px"
          style={{
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Box>
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
                fontWeight: "bold",
                minHeight: "40px",
                padding: "0 .5rem",
                userSelect: "none",
              }}
              onClick={() => {
                setOpenMenu(!openMenu);
                setActiveMainMenu(index);
                history.push(mainMenu?.link);
              }}
              className={activeMainMenu === index ? "active" : ""}
            >
              <Box>
                <mainMenu.icon />
              </Box>
              <Box>{mainMenu.title}</Box>
              <Box>
                {mainMenu?.subNav?.length > 0 &&
                openMenu &&
                activeMainMenu === index ? (
                  <FaChevronDown fontSize=".5rem" />
                ) : (
                  <FaChevronRight fontSize=".5rem" />
                )}
              </Box>
            </li>
            <Box display="flex" flexDirection="column">
              {activeMainMenu === index && openMenu && (
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
                          userSelect: "none",
                          fontWeight: "bold",
                        }}
                        className={activeSubMenu === i ? "sub__active" : ""}
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
