import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { ContextMenu } from "../../../../../contextMenu/ContextMenu";
import { ContextMenuLink } from "../../../../../contextMenu/ContextMenuLink";
import { MLink } from "../../../../../styles/styles";
import { theme } from "../../../../../themes/themes";
import { NavigationSearch } from "./components/NavigationSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      width: "80vw",
      boxSizing: "border-box",
      padding: theme.spacing(4),
      backgroundColor: theme.palette.primary.main,
      height: "60px",
      position: "absolute",
      display: "flex",
      top: "3%",
      alignItems: "center",
      color: theme.palette.common.black,
      zIndex: 1,
      left: "3%",
      borderRadius: "9px",
    },
    linkContainer: {
      width: "100%",
      height: "25px",
      display: "flex",
      listStyle: "none",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "2.5rem",
      zIndex: "inherit",
    },
    list: {
      listStyle: "none",
      maxWidth: "100%",
      height: "100%",
      zIndex: "inherit",
      cursor: "pointer",
      "&:hover": {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      },
    },
    active: {
      borderBottom: `2px solid ${theme.palette.common.white}`,
      maxWidth: "100%",
    },

    filledBG: {
      backgroundColor: theme.palette.common.white,
      borderRadius: "10px",
    },
    subMenuLink: {
      "&:hover": {
        backgroundColor: theme.palette.common.white,
        borderRadius: "10px",
      },
    },
  })
);

export const TopNavigation = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? `${activeIndex + 1}item` : undefined;
  const [subMenuIndex, setSubMenuIndex] = React.useState(null);

  const handleClickAway = () => {};

  return (
    <Box className={classes.container}>
      <>
        <ul className={classes.linkContainer}>
          <Box>
            <img
              src="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/logo.png"
              alt=""
              width="150px"
              height="50px"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>

          {MenuItems.map((menu, index) => {
            return (
              <li
                className={`${classes.list} ${
                  index === activeIndex && classes.active
                }`}
                onClick={(e) => {
                  setActiveIndex(index);
                  handleClick(e);
                }}
              >
                {menu.text}
              </li>
            );
          })}
        </ul>
        <ContextMenu
          open={open}
          handleClickAway={handleClickAway}
          anchorEl={anchorEl}
          id={id}
        >
          {MenuItems[activeIndex]?.subMenu?.map((it, ind) => (
            <Box
              onClick={() => {
                setSubMenuIndex(ind);
              }}
              className={`${subMenuIndex === ind && classes.filledBG} ${
                classes.subMenuLink
              }`}
            >
              <ContextMenuLink to={it.link} title={it?.text} />
            </Box>
          ))}
        </ContextMenu>
      </>
    </Box>
  );
};

const MenuItems = [
  {
    id: 1,
    text: "Gallery",
    isActive: false,
    link: "#",
    subMenu: [
      { id: 1, text: "Photo Categories", link: "/employee/photo-categories" },
      { id: 2, text: "Video Categories", link: "/employee/video-categories" },
    ],
  },
  {
    id: 2,
    text: "Ethics Policies",
    isActive: false,
    link: "#",
    subMenu: [
      {
        id: 1,
        text: "Conflict of Interest",
        link: "/employee/conflict-interest",
      },
      { id: 2, text: "Gift and Entertainment", link: "" },
      { id: 3, text: "Conduct Passport", link: "" },
      { id: 4, text: "Whistle Blowing", link: "" },
      { id: 5, text: "Antibribery and Corruption", link: "" },
      { id: 6, text: "Privacy and data protection", link: "" },
    ],
  },
  {
    id: 3,
    text: "Ethics Quiz",
    isActive: false,
    link: "#",
  },
  {
    id: 4,
    text: "Recognition",
    isActive: false,
    link: "#",
    subMenu: [
      { id: 1, text: "Champion Recognition", link: "" },
      { id: 2, text: "Employee Recognition", link: "" },
    ],
  },
  {
    id: 5,
    text: "Trainings",
    isActive: false,
    link: "#",
  },
  {
    id: 6,
    text: "Policy Breaches",
    isActive: false,
    link: "#",
  },
  {
    id: 7,
    text: "Ethics Articles",
    isActive: false,
    link: "#",
  },
  {
    id: 8,
    text: "Contact Us",
    isActive: false,
    link: "#",
  },
];
