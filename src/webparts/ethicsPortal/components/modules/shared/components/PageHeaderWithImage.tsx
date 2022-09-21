import { Typography } from "@material-ui/core";
import * as React from "react";
import { TopContainer } from "../../../styles/styles";
import { theme } from "../../../themes/themes";

type Props = {
  text: string;
  bg: string;
};

export const PageHeaderWithImage: React.FC<Props> = ({ bg, text }) => {
  return (
    <TopContainer bg={bg}>
      <Typography
        variant="h3"
        style={{
          color: theme.palette.common.white,
          fontStyle: "italic",
          boxSizing: "border-box",
          paddingRight: "20px",
        }}
      >
        {text}
      </Typography>
    </TopContainer>
  );
};
