import { Box, Button } from "@material-ui/core";
import * as React from "react";

type Props = {
  data: any[];
  children: React.ReactNode;
  onUpdate: React.Dispatch<any[]>;
  pageSize: number;
  rowsPerPage: number;
};

export const PaginationContainer: React.FC<Props> = ({
  children,
  data,
  onUpdate,
  pageSize,
  rowsPerPage,
}) => {
  const [page, setPage] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const [paginateArr, setPaginateArr] = React.useState([]);
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  React.useEffect(() => {
    for (let i = 0; i < pageSize; i++) {
      setPaginateArr((prev) => [...prev, i]);
    }
  }, [pageSize]);
  React.useEffect(() => {
    const splice = data?.slice(page, rowsPerPage);
    onUpdate(splice);
  }, [page, data]);
  return (
    <>
      {children}

      <Box
        style={{
          minWidth: "100%",
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          justifyContent: "center",
        }}
        my={2}
      >
        {paginateArr.length > 1 &&
          paginateArr.map((item, index) => (
            <Button
              style={{ width: "50px", borderRadius: "26px" }}
              onClick={() => {
                handleChangePage(item);
                setActive(index);
              }}
              color={active === index ? "primary" : "secondary"}
              variant="contained"
            >
              {item + 1}
            </Button>
          ))}
      </Box>
    </>
  );
};
