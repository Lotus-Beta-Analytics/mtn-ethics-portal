import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  CircularProgress,
} from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  CarouselContainer,
  MLink,
  PostPreviewContainer,
} from "../../../../styles/styles";
import { MMarquee } from "../../../shared/components/marquee/MMarquee";
import { MButton } from "../../../shared/components/buttons/MButton";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { PostPreviewItem } from "../../components/blog/PostPreviewItem";
import Slider from "react-slick";
import { CarouselData } from "../../../admin/pages/carousel/forms/CarouselItemForm";

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

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

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

  const [carouselItems, setCarouselItems] = React.useState<CarouselData[]>([]);

  React.useEffect(() => {
    Promise.all([
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
      })(),
      (async () => {
        const res = await sp.web.lists
          .getByTitle("CarouselItems")
          .items.getAll();
        const sliced = res.slice(0, 4);
        setCarouselItems(res);
      })(),
    ]);
  }, []);
  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
    >
      <>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <CarouselContainer bg={item?.CarouselImage}>
              <Box
                mt={3}
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
              >
                <Typography
                  variant="h1"
                  style={{
                    fontStyle: "italic",
                    width: "50%",
                    boxSizing: "border-box",
                    paddingRight: "1rem",
                    fontWeight: "bolder",
                  }}
                >
                  {item?.CarouselTitle}
                </Typography>
                <Box mt={4}>
                  <a
                    href={item?.LinkTo}
                    target="_blank"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <MButton
                      endIcon={<FaAngleDoubleRight />}
                      text="Read More..."
                    />
                  </a>
                </Box>
              </Box>
            </CarouselContainer>
          ))}
        </Slider>
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
      </>
    </EmployeeWrapper>
  );
};
