import * as React from "react";
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

type Props = { quizReport: any[]; column: any[] };

export const QuizReportTable: React.FC<Props> = ({ quizReport, column }) => {
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
      title={`Quiz Report`}
      columns={column}
      data={quizReport}
      options={{
        exportButton: { csv: true, pdf: false },
        actionsCellStyle: {
          color: "#FF00dd",
        },

        actionsColumnIndex: -1,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20, 30],
        exportAllData: true,
        exportFileName: "Reports",
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
    />
  );
};
