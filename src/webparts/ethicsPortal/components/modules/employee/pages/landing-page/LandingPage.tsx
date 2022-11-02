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
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  CarouselContainer,
  HomeItemContainer,
  MLink,
} from "../../../../styles/styles";
import Marquee from "react-fast-marquee";
import { MMarquee } from "../../../shared/components/marquee/MMarquee";
import { MButton } from "../../../shared/components/buttons/MButton";
import { sp } from "@pnp/sp";

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

export const LandingPage = () => {
  const classes = useStyles();
  const [pageMenu, setPageMenu] = React.useState<any[]>([
    { id: 1, text: "Declare a gift", link: "" },
    { id: 2, text: "Declare conflict of interest", link: "" },
  ]);

  React.useEffect(() => {
    (async () => {
      try {
        const email = await sp.utility.getCurrentUserEmailAddresses();

        const findAdmin = await sp.web.lists
          .getByTitle("Admin")
          .items.filter(`StaffEmail eq '${email}'`)
          .get();

        if (findAdmin?.length > 0) {
          setPageMenu([
            ...pageMenu,
            { id: 3, text: "Admin", link: "/admin/dashboard" },
          ]);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
    >
      <Container>
        <MMarquee />
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
                <MButton endIcon={<FaAngleDoubleRight />} text="Read More..." />
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
                <MButton endIcon={<FaAngleDoubleRight />} text="Read More..." />
              </MLink>
            </HomeItemContainer>
          ))}
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
