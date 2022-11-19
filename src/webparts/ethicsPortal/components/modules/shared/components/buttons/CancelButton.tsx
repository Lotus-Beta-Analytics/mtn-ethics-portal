import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
  isLoading?: boolean;
};

export const CancelButton: React.FC<Props> = ({ isLoading }) => {
  const history = useHistory();
  return (
    <Button
      variant="outlined"
      color="secondary"
      size="large"
      disabled={isLoading}
      onClick={() => history.push("/admin/dashboard")}
    >
      Cancel
    </Button>
  );
};
