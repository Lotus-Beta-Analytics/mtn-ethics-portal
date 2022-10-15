import { Box, Switch } from "@material-ui/core";
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
import { QuizQuestion } from "../types/admin-quiz-create-type";
import { CloseSharp, RemoveRedEye } from "@material-ui/icons";
import { useToasts } from "react-toast-notifications";
import { sp } from "@pnp/sp";
import { errorAlert, successAlert } from "../../../../../utils/toast-messages";

type Props = {
  quizzes: any[];
};

export const QuizTable: React.FC<Props> = ({ quizzes }) => {
  console.log(quizzes, "here...");

  const [enabling, setEnabling] = React.useState(false);

  const columns = [
    {
      title: "SN",
      field: "tableData",
      render: (rowData) => <div>{rowData.tableData.id + 1}</div>,
    },
    { title: "Quiz Title", field: "question" },
    { title: "Question Type", field: "type" },
  ];

  const toast = useToasts().addToast;

  const enableQuizHandler = async (id: number) => {
    setEnabling(true);

    try {
      const findRunningQuizzes = await sp.web.lists
        .getByTitle("QuizQuestions")
        .items.filter(`isEnabled eq Yes`)
        .get();

      if (findRunningQuizzes.length) {
        errorAlert(toast, "A quiz is already running. Stop it to continue.");
        setEnabling(false);
        return;
      }

      const res = await sp.web.lists
        .getByTitle("QuizQuestions")
        .items.getById(id)
        .update({
          isEnabled: true,
        });

      console.log(res);
      setEnabling(false);
      successAlert(toast, "Quiz now running!");
    } catch (e) {
      errorAlert(toast);
    }
  };
  const disableQuizHandler = async (id: number) => {
    setEnabling(true);

    try {
      const res = await sp.web.lists
        .getByTitle("QuizQuestions")
        .items.getById(id)
        .update({
          isEnabled: false,
        });
      console.log(res);
      setEnabling(false);
      successAlert(toast, "Quiz stopped!");
    } catch (e) {
      errorAlert(toast);
    }
  };

  return (
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
      title={`All quizzes`}
      columns={columns}
      data={quizzes}
      //   isLoading={loading}
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
        width: "90%",
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
            // setUser(rowData);
            // setOpenEdit(true);
          },
        },
        {
          icon: "visibility",
          iconProps: {
            style: { fontSize: "20px", color: "gold" },
          },
          tooltip: "remove",

          onClick: (event, rowData) => {
            // setOpenDelete(true);
            // setUser(rowData);
          },
        },
      ]}
      components={{
        Action: (props) => {
          console.log(props);
          return (
            <Box display="flex" alignItems="center" style={{ gap: "1rem" }}>
              <IconButton
                onClick={(event) => props.action.onClick(event, props.data)}
                style={{
                  width: "25px",
                  height: "25px",
                  fontSize: ".5rem",
                  padding: "1rem",
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
                ) : (
                  <CloseSharp />
                )}
              </IconButton>
              <Switch
                value={""}
                onChange={(e, status) => {
                  console.log(status);
                }}
              />
            </Box>
          );
        },
      }}
    />
  );
};
