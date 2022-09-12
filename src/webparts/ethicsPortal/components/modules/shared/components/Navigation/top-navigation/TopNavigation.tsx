import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { ContextMenu } from "../../../../../contextMenu/ContextMenu";
import { ContextMenuLink } from "../../../../../contextMenu/ContextMenuLink";
import { MLink } from "../../../../../styles/styles";
import { theme } from "../../../../../themes/themes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      width: "95%",
      boxSizing: "border-box",
      padding: theme.spacing(4),
      backgroundColor: theme.palette.primary.main,
      height: "100px",
      position: "absolute",
      display: "flex",
      top: 0,
      left: "3%",
      borderRadius: "9px",
      color: theme.palette.common.black,
      "&:hover": {
        transition: "height 2s 1s ease-in-out",
        minHeight: "140px",
      },
    },
    linkContainer: {
      width: "100%",
      height: "25px",
      positon: "inherit",
      display: "flex",
      listStyle: "none",
      alignItems: "center",
      boxSizing: "border-box",
      gap: "5rem",
      "&:hover": {
        borderBottom: `1px solid ${theme.palette.common.black}`,
      },
    },
    list: {
      listStyle: "none",
      maxWidth: "100%",
      height: "100%",
      "&:hover": {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      },
    },
    active: {
      borderBottom: `2px solid ${theme.palette.common.white}`,
      maxWidth: "100%",
      height: "100%",
    },

    filledBG: {
      backgroundColor: theme.palette.common.white,
      borderRadius: "10px",
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
  const id = open ? activeIndex : undefined;
  const [subMenuIndex, setSubMenuIndex] = React.useState(null);

  const handleClickAway = () => {};

  return (
    <Box className={classes.container}>
      <>
        <ul className={classes.linkContainer}>
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
                <MLink>{menu.text}</MLink>
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
          {MenuItems[activeIndex]?.subMenu?.map((it, index) => (
            <Box
              onClick={() => {
                setSubMenuIndex(index);
              }}
              className={subMenuIndex === index && classes.filledBG}
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
      { id: 1, text: "Photo Categories", link: "" },
      { id: 2, text: "Video Categories", link: "" },
    ],
  },
  {
    id: 2,
    text: "Ethics Policies",
    isActive: false,
    link: "#",
    subMenu: [
      { id: 1, text: "Conflict of Interest", link: "" },
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
];
