import Box from "@material-ui/core/Box";
import styled from "styled-components";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { colors, makeStyles } from "@material-ui/core";
import { theme } from "../../../../../themes/themes";
import { createStyles, Theme } from "@material-ui/core/styles";
import { MLink } from "../../../../../styles/styles";

type Props = {
  nav: PageNav[];
};

type PageNav = {
  id: string;
  text: string;
  link: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    active: {
      background: theme.palette.common.white,
      borderRadius: "10px",
    },
    itemLink: {
      "&:hover": {
        background: theme.palette.common.white,
      },
      color: "#000",
      height: "40px",
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      borderRadius: "10px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  })
);

export const PageNavigation: React.FC<Props> = ({ nav }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);

  return (
    <>
      <NavContainer open={open}>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? (
            <FaAngleDoubleRight color={theme.palette.common.black} />
          ) : (
            <FaAngleDoubleLeft color={theme.palette.common.black} />
          )}
        </IconButton>
        <Box
          style={{
            display: open ? "flex" : "none",
            maxWidth: "80%",
            minHeight: "200px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {nav.length &&
            nav.map((item, index) => {
              return (
                <Box
                  className={`${active === index && classes.active} ${
                    classes.itemLink
                  }`}
                  onClick={() => setActive(index)}
                >
                  <MLink to={`${item.link}`}>{item?.text}</MLink>
                </Box>
              );
            })}
        </Box>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div<{ open: boolean }>((props) => ({
  minWidth: props?.open ? "350px" : "50px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  top: "40%",
  minHeight: "300px",
  left: props?.open ? "85%" : "100%",
  boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.25)",
  borderRadius: "26px",
  transition: "all .2s ease-in-out",
  boxSizing: "border-box",
  zIndex: "9",
}));
