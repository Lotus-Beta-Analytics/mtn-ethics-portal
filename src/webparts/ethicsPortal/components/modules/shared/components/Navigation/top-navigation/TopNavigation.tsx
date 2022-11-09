import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { ContextMenu } from "../../../../../contextMenu/ContextMenu";
import { ContextMenuLink } from "../../../../../contextMenu/ContextMenuLink";
import { MLink } from "../../../../../styles/styles";
import { theme } from "../../../../../themes/themes";
import { useHistory } from "react-router-dom";
import { NavigationSearch } from "./components/NavigationSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      maxWidth: "100%",
      boxSizing: "border-box",
      padding: theme.spacing(4),
      backgroundColor: theme.palette.primary.main,
      height: "60px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.common.black,

      zIndex: 1,
      borderRadius: "2px",
    },
    linkContainer: {
      width: "100%",
      height: "25px",
      display: "flex",
      listStyle: "none",
      alignItems: "center",
      boxSizing: "border-box",
      zIndex: "inherit",
      justifyContent: "space-around",
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
  const history = useHistory();
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
          <Box onClick={() => history.push("/")}>
            <img
              src="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/logo.png"
              alt=""
              width="100px"
              height="50px"
              style={{
                objectFit: "contain",
                cursor: "pointer",
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
                <MLink to={menu?.link}>{menu.text}</MLink>
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
        link: "/conflict/landing",
      },
      { id: 2, text: "Gift and Entertainment", link: "/giftandentertainment" },
      { id: 3, text: "Conduct Passport", link: "/conduct-passport" },
      { id: 4, text: "Whistle Blowing", link: "/whistleblowing" },
      { id: 5, text: "Antibribery and Corruption", link: "/antibribery" },
      { id: 6, text: "Privacy and data protection", link: "/privacy" },
    ],
  },
  {
    id: 3,
    text: "Ethics Quiz",
    isActive: false,
    link: "/employee/quiz/landing",
  },
  {
    id: 4,
    text: "Recognition",
    isActive: false,
    link: "#",
    subMenu: [
      { id: 1, text: "Champion Recognition", link: "/recognition/champion" },
    ],
  },
  {
    id: 5,
    text: "Trainings",
    isActive: false,
    link: "/trainings/traininglandingpage",
  },
  {
    id: 6,
    text: "Policy Breaches",
    isActive: false,
    link: "/ethics/policybreaches",
  },
  {
    id: 7,
    text: "Ethics Articles",
    isActive: false,
    link: "/ethics/articleslandingpage",
  },
  {
    id: 8,
    text: "Contact Us",
    isActive: false,
    link: "/ethics/contactus",
  },
];
