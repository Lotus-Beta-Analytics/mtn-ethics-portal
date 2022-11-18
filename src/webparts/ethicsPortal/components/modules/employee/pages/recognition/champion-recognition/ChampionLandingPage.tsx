import {
  Box,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { ImageContainerEthics } from "../../../../../styles/styles";
import "./styles.css";
import { sp } from "@pnp/sp";
import { PaginationContainer } from "../../../components/pagination/PaginationContainer";

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
  { id: 1, text: "Ethics Champions", link: "/recognition/ethicschampion" },
  {
    id: 2,
    text: "Ethics Champions Activties",
    link: "/recognition/ethicschampion/activties",
  },
];

export const ChampionLandingPage = () => {
  // const [champions, setChampions] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const rowsPerPage = 2;

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`EthicsRecognition`)
      .items.get()
      .then((res) => {
        setItems(res);
        setPageSize(Math.ceil(res.length / rowsPerPage));
        console.log(res);
      });
  }, []);

  const classes = useStyles();
  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
      showFooter={true}
    >
      {/* <MMarquee text="Hello Champions" /> */}
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png"
        text="Champion Recognition"
      />
      <PaginationContainer
        data={data}
        onUpdate={(splicedItems) => setItems(splicedItems)}
        pageSize={pageSize}
        rowsPerPage={rowsPerPage}
      >
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            // width: "980px",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
            // marginLeft: "5%",
            padding: "0.5rem",
            gap: "0.5rem",
            position: "relative",
            backgroundSize: "cover",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          {items?.map((item) => (
            <>
              <ImageContainerEthics bg={item.RecognitionImage}>
                <Box className="mtn__coverOval"></Box>
                <Box className="mtn__coverImage">
                  <div className="mtn__CoverImageSpan">
                    <div className="eachGridbox__allContent">
                      <header>Name:</header>
                      <h5 className="grid__titleContent">
                        <p className="styles.grid__titleName">{item.Name}</p>
                      </h5>
                    </div>
                    <div className="eachGridbox__allContent">
                      <header>Division:</header>
                      <h5 className="grid__titleContent">
                        <p className="styles.grid__titleName">
                          {item.Division}
                        </p>
                      </h5>
                    </div>
                    <div className="eachGridbox__allContent">
                      <header>Loaction:</header>
                      <h5 className="grid__titleContent">
                        <p className="styles.grid__titleName">
                          {item.Location}
                        </p>
                      </h5>
                    </div>
                    <div className="eachGridbox__allContent">
                      <header>Ethics Message:</header>
                      <h5 className="grid__titleContent">
                        <p className="styles.grid__titleName">
                          {item.EthicalMessage}
                        </p>
                      </h5>
                    </div>
                  </div>
                </Box>
              </ImageContainerEthics>
            </>
          ))}
        </Box>
      </PaginationContainer>
    </EmployeeWrapper>
  );
};
