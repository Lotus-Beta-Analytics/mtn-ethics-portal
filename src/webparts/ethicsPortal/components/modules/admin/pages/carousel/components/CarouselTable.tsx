import { Box, Tooltip, IconButton, Button } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable, { MTableToolbar } from "material-table";
import * as React from "react";
import { CloseSharp, RemoveRedEye } from "@material-ui/icons";
import { CarouselData } from "../forms/CarouselItemForm";
import { FaPlusCircle } from "react-icons/fa";
import { AddCarouselItemModal } from "../modals/AddCarouselItemModal";
import { UpdateCarouselItemModal } from "../modals/UpdateCarouselItemModal";
import { DeleteCarouselItemModal } from "../modals/DeleteCarouselItemModal";
import { DocumentViewer } from "../../../../shared/components/document-viewer/DocumentViewer";

type Props = {
  carouselItems: CarouselData[];
  loading: boolean;
};

export const CarouselTable: React.FC<Props> = ({ carouselItems, loading }) => {
  const columns = [
    {
      title: "SN",
      field: "tableData[id]",
      render: (rowData) => <div>{rowData?.tableData?.id + 1}</div>,
    },
    { title: "Title", field: "CarouselTitle" },
    { title: "Link", field: "LinkTo" },
    { title: "Created", field: "Created", type: "date" as const },
  ];

  const [itemToRemove, setItemToRemove] = React.useState<any>();
  const [itemToUpdate, setItemToUpdate] = React.useState<any>();
  const [itemToView, setItemToView] = React.useState<CarouselData>();
  const [adding, setAdding] = React.useState<boolean>();

  return (
    <>
      <MaterialTable
        icons={{
          Add: React.forwardRef((props: any, ref: any) => (
            <AddBox {...props} ref={ref} />
          )),
          Check: React.forwardRef((props: any, ref: any) => (
            <Check {...props} ref={ref} />
          )),
          Clear: React.forwardRef((props: any, ref: any) => (
            <Clear {...props} ref={ref} />
          )),
          Delete: React.forwardRef((props: any, ref: any) => (
            <DeleteOutline {...props} ref={ref} />
          )),
          DetailPanel: React.forwardRef((props: any, ref: any) => (
            <ChevronRight {...props} ref={ref} />
          )),
          Edit: React.forwardRef((props: any, ref: any) => (
            <Edit {...props} ref={ref} />
          )),
          Export: React.forwardRef((props: any, ref: any) => (
            <SaveAlt {...props} ref={ref} />
          )),
          Filter: React.forwardRef((props: any, ref: any) => (
            <FilterList {...props} ref={ref} />
          )),
          FirstPage: React.forwardRef((props: any, ref: any) => (
            <FirstPage {...props} ref={ref} />
          )),
          LastPage: React.forwardRef((props: any, ref: any) => (
            <LastPage {...props} ref={ref} />
          )),
          NextPage: React.forwardRef((props: any, ref: any) => (
            <ChevronRight {...props} ref={ref} />
          )),
          PreviousPage: React.forwardRef((props: any, ref: any) => (
            <ChevronLeft {...props} ref={ref} />
          )),
          ResetSearch: React.forwardRef((props: any, ref: any) => (
            <Clear {...props} ref={ref} />
          )),
          Search: React.forwardRef((props: any, ref: any) => (
            <Search {...props} ref={ref} />
          )),
          SortArrow: React.forwardRef((props: any, ref: any) => (
            <ArrowDownward {...props} ref={ref} />
          )),
          ThirdStateCheck: React.forwardRef((props: any, ref: any) => (
            <Remove {...props} ref={ref} />
          )),
          ViewColumn: React.forwardRef((props: any, ref: any) => (
            <ViewColumn {...props} ref={ref} />
          )),
        }}
        title={`Carousel Items`}
        columns={columns}
        data={carouselItems}
        isLoading={loading}
        options={{
          exportButton: { csv: true, pdf: false },
          actionsCellStyle: {
            color: "#FF00dd",
          },

          actionsColumnIndex: -1,
          pageSize: 5,
          pageSizeOptions: [5, 10, 20],
          search: false,
          exportAllData: true,
          exportFileName: "Scrolls",
          headerStyle: {
            backgroundColor: "#FFCC00",
            color: "black",
            fontSize: "16px",
          },
          searchFieldVariant: "outlined",
        }}
        style={{
          boxShadow: "none",
          width: "100%",
          boxSizing: "border-box",
        }}
        actions={[
          {
            icon: "visibility",
            iconProps: {
              style: { fontSize: "20px", color: "gold" },
            },
            tooltip: "edit",

            onClick: (event, rowData) => {
              setItemToUpdate(rowData);
            },
          },
          {
            icon: "visibility",
            iconProps: {
              style: { fontSize: "20px", color: "gold" },
            },
            tooltip: "view",

            onClick: (event, rowData) => {
              setItemToView(rowData);
            },
          },
          {
            icon: "visibility",
            iconProps: {
              style: { fontSize: "20px", color: "gold" },
            },
            tooltip: "remove",

            onClick: (event, rowData) => {
              setItemToRemove(rowData);
            },
          },
        ]}
        components={{
          Action: (props) => (
            <Tooltip title={props?.action?.tooltip}>
              <IconButton
                onClick={(event) => props?.action?.onClick(event, props?.data)}
                style={{
                  width: "25px",
                  height: "25px",
                  fontSize: ".5rem",
                  padding: "1rem",
                }}
                color={
                  props?.action?.tooltip === "view"
                    ? "primary"
                    : props?.action?.tooltip === "edit"
                    ? "default"
                    : "secondary"
                }
              >
                {props?.action?.tooltip === "view" ? (
                  <RemoveRedEye />
                ) : props?.action?.tooltip === "edit" ? (
                  <Edit />
                ) : (
                  <CloseSharp />
                )}
              </IconButton>
            </Tooltip>
          ),
          Toolbar: (props) => {
            return (
              <Box>
                <MTableToolbar {...props} />
                <Box
                  width="100%"
                  height="50px"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<FaPlusCircle />}
                    onClick={() => setAdding(true)}
                  >
                    Add Carousel Item
                  </Button>
                </Box>
              </Box>
            );
          },
        }}
      />
      {adding && (
        <AddCarouselItemModal open={true} onClose={() => setAdding(false)} />
      )}

      {itemToUpdate && (
        <UpdateCarouselItemModal
          open={true}
          onClose={() => setItemToUpdate(null)}
          formData={itemToUpdate}
        />
      )}
      {itemToRemove && (
        <DeleteCarouselItemModal
          open={true}
          onClose={() => setItemToRemove(null)}
          item={itemToRemove}
        />
      )}
      {itemToView && (
        <DocumentViewer
          open={true}
          onClose={() => setItemToView(null)}
          url={itemToView?.CarouselImage}
        />
      )}
    </>
  );
};