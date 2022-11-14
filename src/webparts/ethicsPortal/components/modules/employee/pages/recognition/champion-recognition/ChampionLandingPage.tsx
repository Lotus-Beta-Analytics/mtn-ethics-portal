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

const [location, setLocation] = React.useState("");
const [division, setDivision] = React.useState("");
const [imageUrl, setImageUrl] = React.useState("");
const [championName, setChampionName] = React.useState("");
const [ethicsMessage, setEthicsMessage] = React.useState("");

React.useEffect(() => {
  sp.web.lists
    .getByTitle(`EthicsRecognition`)
    .items.get()
    .then((res) => {
      console.log(res);
    });
}, []);

export const ChampionLandingPage = () => {
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
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          // width: "980px",
          height: "260px",
          marginLeft: "13%",
          padding: "0.5rem",
          gap: "0.5rem",
          position: "relative",
          backgroundSize: "cover",
          borderRadius: "2rem",
          overflow: "hidden",
        }}
      >
        {homeItems.map((item) => (
          <>
            <ImageContainerEthics bg={item.image}>
              <Box className="mtn__coverOval"></Box>
              <Box className="mtn__coverImage">
                <div className="mtn__CoverImageSpan">
                  <span>
                    Name: <h5>{championName}</h5>
                  </span>
                  <span>
                    Division:
                    <h5>Business Solution</h5>
                  </span>
                  <span>
                    Location:
                    <h5>Lagos 1</h5>
                  </span>
                  <span>
                    Ethics Message:
                    <h5>
                      The State of the Country is not Fun, We the People are
                      going to take back the Power.
                    </h5>
                  </span>
                </div>
              </Box>
            </ImageContainerEthics>
          </>
        ))}
      </Box>
    </EmployeeWrapper>
  );
};

const homeItems = [
  {
    id: 1,
    name: "",
    division: "",
    location: "",
    ethicalMessage: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo2.png",
  },
  {
    id: 1,
    name: "",
    division: "",
    location: "",
    ethicalMessage: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo3.png",
  },
  {
    id: 1,
    name: "",
    division: "",
    location: "",
    ethicalMessage: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo4.png",
  },
  {
    id: 1,
    name: "",
    division: "",
    location: "",
    ethicalMessage: "",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo2.png",
  },
];
