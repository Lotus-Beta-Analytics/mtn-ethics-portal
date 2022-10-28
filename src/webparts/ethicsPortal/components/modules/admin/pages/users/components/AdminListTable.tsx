import { Box, Checkbox, Switch } from "@material-ui/core";
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
import { IconButton } from "office-ui-fabric-react";
import * as React from "react";
import { CloseSharp, RemoveRedEye } from "@material-ui/icons";
import { useToasts } from "react-toast-notifications";
import { sp } from "@pnp/sp";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";
import { useHistory } from "react-router-dom";
import { User } from "../forms/UserForm";
import { UpdateAdminModal } from "../modals/UpdateAdminModal";
import { Data } from "../ManageAdminPage";
import { RemoveAdminModal } from "../modals/RemoveAdminModal";

type Props = {
  users: User[];
  loading: boolean;
};

export const AdminListTable: React.FC<Props> = ({ users, loading }) => {
  const [itemToUpdate, setItemToUpdate] = React.useState<Data>();
  const [itemToRemove, setItemToRemove] = React.useState<Data>();

  const columns = [
    {
      title: "SN",
      field: "tableData",
      render: (rowData) => <div>{rowData.tableData.id + 1}</div>,
    },
    {
      title: "Name",
      field: "StaffName",
    },
    {
      title: "Email Address",
      field: "StaffEmail",
    },
  ];

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
        title={``}
        columns={columns}
        data={users}
        isLoading={loading}
        options={{
          exportButton: { csv: true, pdf: false },
          actionsCellStyle: {
            color: "#FF00dd",
          },

          actionsColumnIndex: -1,
          pageSize: 5,
          pageSizeOptions: [1, 2, 5],
          exportAllData: true,
          exportFileName: "Projects",
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
          padding: "1rem",
        }}
        actions={[
          {
            icon: "visibility",
            iconProps: {
              style: { fontSize: "20px", color: "gold" },
            },
            tooltip: "edit",

            onClick: (event, rowData) => {
              setItemToUpdate({
                adminId: rowData.Id,
                data: {
                  StaffEmail: rowData.StaffEmail,
                  StaffName: rowData.StaffName,
                },
              });
            },
          },
          {
            icon: "visibility",
            iconProps: {
              style: { fontSize: "20px", color: "gold" },
            },
            tooltip: "remove",

            onClick: (event, rowData) => {
              setItemToRemove({
                adminId: rowData.Id,
                data: {
                  StaffEmail: rowData.StaffEmail,
                  StaffName: rowData.StaffName,
                },
              });
            },
          },
          {
            icon: "visibility",
            iconProps: {
              style: { fontSize: "20px", color: "gold" },
            },
            tooltip: "view",

            onClick: (event, rowData) => {},
          },
        ]}
        components={{
          Action: (props) => {
            return (
              <Box display="flex" alignItems="center" style={{ gap: "1rem" }}>
                <IconButton
                  onClick={(event) => props.action.onClick(event, props.data)}
                  style={{
                    width: "25px",
                    height: "25px",
                    fontSize: ".5rem",
                    padding: "1rem",
                    position: "relative",
                  }}
                  color={
                    props.action.tooltip === "view"
                      ? "primary"
                      : props.action.tooltip === "edit"
                      ? "default"
                      : "secondary"
                  }
                >
                  {props.action.tooltip === "view" ? (
                    <RemoveRedEye />
                  ) : props.action.tooltip === "edit" ? (
                    <Edit />
                  ) : props.action.tooltip === "remove" ? (
                    <CloseSharp />
                  ) : (
                    <></>
                  )}
                </IconButton>
              </Box>
            );
          },
        }}
      />

      {itemToUpdate && (
        <UpdateAdminModal
          open={true}
          onClose={(item) => {
            setItemToUpdate(null);
          }}
          id={itemToUpdate?.adminId}
          user={itemToUpdate?.data}
        />
      )}
      {itemToRemove && (
        <RemoveAdminModal
          open={true}
          onClose={(item) => {
            setItemToRemove(null);
          }}
          id={itemToRemove?.adminId}
          user={itemToRemove?.data}
        />
      )}
    </>
  );
};
