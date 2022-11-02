import { Typography } from "@material-ui/core";
import { sp } from "@pnp/sp";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { theme } from "../../../../themes/themes";

type Props = {
  text?: string;
};

enum options {
  top = 0,
  default = "10%",
}

export const MMarquee: React.FC<Props> = () => {
  const [activeText, setActiveText] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        const active = await sp.web.lists
          .getByTitle("ScrollingText")
          .items.filter(`isEnabled eq '${1}'`)
          .get();

        if (active.length) {
          setActiveText(active[0].scrollingText);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Marquee
      gradient={false}
      style={{
        position: "absolute",
        top: options.default,
        width: "100%",
        minHeight: "60px",
      }}
    >
      <Typography
        color="primary"
        variant="h5"
        style={{
          position: "relative",
          width: "100%",
          //   backgroundColor: theme.palette.common.black,
          minHeight: "inherit",
          display: "flex",
          alignItems: "center",

          // zIndex: "99",
        }}
      >
        {activeText}
      </Typography>
    </Marquee>
  );
};
