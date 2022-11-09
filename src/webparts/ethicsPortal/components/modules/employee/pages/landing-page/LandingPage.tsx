import {
  Box,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
  CircularProgress,
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
  PostPreviewContainer,
} from "../../../../styles/styles";
import Marquee from "react-fast-marquee";
import { MMarquee } from "../../../shared/components/marquee/MMarquee";
import { MButton } from "../../../shared/components/buttons/MButton";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { PostPreviewItem } from "../../components/blog/PostPreviewItem";

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
  const [pageMenu, setPageMenu] = React.useState<any[]>([
    { id: 1, text: "Quick Links", link: "" },
    { id: 2, text: "Click to Declare a gift", link: "" },
    { id: 3, text: "Click to Declare conflict of interest", link: "" },
  ]);
  const { data, isLoading } = useQuery<any[]>(["item"], async () => {
    try {
      const res = await sp.web.lists.getByTitle("Post").items.getAll();
      const sliced = res.slice(0, 3);

      return sliced;
    } catch (e) {}
  });

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
        <Carousel isRTL={false} enableAutoPlay>
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
            minHeight: "230px",
            gap: "2.5rem",
            margin: "auto",
          }}
        >
          <PostPreviewContainer>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
                {data?.map((post) => (
                  <PostPreviewItem post={post} key={post.Id} />
                ))}
              </>
            )}
          </PostPreviewContainer>
        </Box>

        <MMarquee />
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
  {
    id: 3,
    title: "At The Top",
    link: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/banner2.png",
    subtitle: "Tone",
  },
];
