import {
  Box,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { theme } from "../../../../themes/themes";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import Carousel from "react-elastic-carousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  CarouselContainer,
  HomeItemContainer,
  MLink,
} from "../../../../styles/styles";
import Marquee from "react-fast-marquee";
import { MMarquee } from "../../../shared/components/marquee/MMarquee";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "100px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  })
);

const pageMenu = [
  { id: 1, text: "Declare a gift", link: "" },
  { id: 2, text: "Declare conflict of interest", link: "" },
];

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
    >
      <Container>
        <MMarquee text="hello" />
        <Carousel isRTL={false}>
          {carouselItems.map((item) => (
            <CarouselContainer bg={item.image}>
              <Typography style={{ fontStyle: "italic", fontSize: "24px" }}>
                {item.subtitle}
              </Typography>
              <Typography variant="h1" style={{ fontStyle: "italic" }}>
                {item.title}
              </Typography>
              <MLink to={item.link}>
                <Button
                  className={classes.root}
                  endIcon={<ChevronRightIcon />}
                  variant="contained"
                  color="primary"
                >
                  Read More...
                </Button>
              </MLink>
            </CarouselContainer>
          ))}
        </Carousel>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "nowrap",
            height: "230px",
            gap: "2.5rem",
            margin: "auto",
          }}
        >
          <Marquee
            gradient={false}
            speed={10}
            direction="right"
            style={{ width: "85%" }}
          >
            {homeItems.map((item) => (
              <HomeItemContainer bg={item.image}>
                <Box></Box>
                <Typography
                  variant="h5"
                  style={{
                    fontStyle: "italic",
                    paddingRight: "15rem",
                    boxSizing: "border-box",
                  }}
                >
                  {item.title}
                </Typography>
                <MLink to={item.link}>
                  <Button
                    className={classes.root}
                    endIcon={<ChevronRightIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Read More...
                  </Button>
                </MLink>
              </HomeItemContainer>
            ))}
          </Marquee>
        </Box>
      </Container>
    </EmployeeWrapper>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

const carouselItems = [
  {
    id: 1,
    title: "Ethics Portal",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png",
    subtitle: "Welcome to the",
  },
  {
    id: 2,
    title: "At The Top",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/banner2.png",
    subtitle: "Tone",
  },
];

const homeItems = [
  {
    id: 1,
    title: "Meet your ethics Champion",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/wawq%202.png",
  },
  {
    id: 2,
    title: "Did you know?",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/few%202.png",
  },
  {
    id: 3,
    title: "Eyes wide open",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/Rectangle%2020.png",
  },
  {
    id: 4,
    title: "Eyes wide open",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/Rectangle%2020.png",
  },
];
