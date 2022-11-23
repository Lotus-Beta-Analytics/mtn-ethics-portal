import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { ImageContainerEthics } from "../../../../../styles/styles";
import "./styles.css";
import { sp } from "@pnp/sp";
import { Label } from "../../../components/Label";

const pageMenu = [
  { id: 1, text: "Ethics Champions", link: "/recognition/ethicschampion" },
];

export const ChampionLandingPage = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`EthicsRecognition`)
      .items.get()
      .then((res) => {
        setItems(res.slice(0, 6));
      });
  }, []);

  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
      showFooter={true}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-ethicslogo.png"
        text="Champion Recognition"
      />

      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          height: "350px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
          gap: "2.5rem",
          position: "relative",
          width: "100%",
        }}
      >
        {items?.map((item) => (
          <ImageContainerEthics bg={item?.RecognitionImage}>
            <Box className="mtn__coverImage">
              <div className="mtn__CoverImageSpan">
                <Label header="Name" content={item?.Name} />
                <Label header="Division" content={item?.Division} />
                <Label header="Location" content={item?.Location} />
                <Label header="Ethics Message" content={item?.EthicalMessage} />
              </div>
            </Box>
          </ImageContainerEthics>
        ))}
      </Box>
    </EmployeeWrapper>
  );
};
