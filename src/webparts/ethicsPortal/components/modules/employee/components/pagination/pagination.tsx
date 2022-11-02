import { Pagination } from "@material-ui/lab";
import * as React from "react";

export const pagination = () => {
  return (
    <Pagination
      count={5}
      showFirstButton={true}
      showLastButton={true}
      page={3}
      hideNextButton={false}
      hidePrevButton={false}
      color="primary"
    />
  );
};
