import { Box, Button, Checkbox, IconButton, Tooltip } from "@material-ui/core";
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

import { useHistory } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { AddPolicyModal } from "../modals/AddPolicyModal";
import { Policy } from "../../../../employee/components/PolicyLandingComponent";
import { UpdatePolicyModal } from "../modals/UpdatePolicyModal";
import { DeletePolicyModal } from "../modals/DeletePolicyModal";

type Props = {
  policies: any[];
  loading: boolean;
  title?: string;
};

export const PolicyTable: React.FC<Props> = ({ policies, loading, title }) => {
  const [itemToRemove, setItemToRemove] = React.useState<Policy>();
  const [itemToUpdate, setItemToUpdate] = React.useState<Policy>();
  const [adding, setAdding] = React.useState<boolean>(false);

  const history = useHistory();

  const columns = [
    {
      title: "SN",
      field: "tableData[id]",
      render: (rowData) => <div>{rowData.tableData.id + 1}</div>,
    },
    {
      title: "Policy Title",
      field: "PolicyTitle",
    },
    {
      title: "Date created",
      field: "Created",
      render: (rowData) => (
        <div>{new Date(rowData.Created).toDateString()}</div>
      ),
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
        title={"All Policies"}
        columns={columns}
        data={policies}
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
              history.push(`/admin/policy/${rowData.Id}`);
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
          Action: (props) => {
            return (
              <Tooltip title={props.action.tooltip}>
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
                      ? "secondary"
                      : "default"
                  }
                >
                  {(() => {
                    if (props.action.tooltip === "edit") {
                      return <Edit />;
                    } else if (props.action.tooltip === "view") {
                      return <RemoveRedEye />;
                    } else {
                      return <CloseSharp />;
                    }
                  })()}
                </IconButton>
              </Tooltip>
            );
          },
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
                    Add Policy
                  </Button>
                </Box>
              </Box>
            );
          },
        }}
      />

      {itemToRemove && (
        <DeletePolicyModal
          open={true}
          onClose={(item) => {
            setItemToRemove(null);
          }}
          policy={itemToRemove}
        />
      )}
      {adding && (
        <AddPolicyModal onClose={() => setAdding(false)} open={true} />
      )}
      {itemToUpdate && (
        <UpdatePolicyModal
          onClose={() => setItemToUpdate(null)}
          open={true}
          policy={itemToUpdate}
        />
      )}
    </>
  );
};
