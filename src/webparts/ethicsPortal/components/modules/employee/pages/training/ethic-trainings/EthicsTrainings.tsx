import MaterialTable from "material-table";
import * as React from "react";
import { sp } from "@pnp/sp";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
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
import { GrView } from "react-icons/gr";
import { TrainingType } from "../../../../admin/pages/training/types/TrainingTypes";
import { DocumentViewer } from "../../../../shared/components/document-viewer/DocumentViewer";
import { TrainingCategoryEnum } from "../../../../admin/pages/training/enums/TrainingCategoryEnum";

const pageMenu = [
  {
    id: 1,
    text: "Business Ethics Everyone's Responsibilities",
    link: "/ethics/training/businessethics",
  },
  {
    id: 2,
    text: "MTN Ethics training Videos",
    link: "/ethics/training/mtnethicstrainingvideos",
  },
  {
    id: 3,
    text: "Organizational Ethics",
    link: "/ethics/training/organizationalethics",
  },
];

export const EthicsTrainings = ({ match }) => {
  let itemID = match.params.id;
  console.log(itemID);

  const history = useHistory();

  const [columns, setColumns] = React.useState([
    { title: "Title", field: "TrainingTitle", type: "string" as const },
    { title: "Category", field: "Category", type: "string" as const },
    // { title: "Training Video", field: "Video", type: "string" as const },
  ]);

  const [itemsVideo, setItemsVideo] = React.useState<TrainingType>();

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`Training`)
      .items.filter(
        `Category eq '${TrainingCategoryEnum.Business_Ethics}' or Category eq '${TrainingCategoryEnum.Mtn_Ethics}' or Category eq '${TrainingCategoryEnum.Organisation_Ethics}'`
      )
      .getAll()
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
      showFooter={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-training.png"
        text="Trainings"
      />

      <Box padding="2rem">
        <div className="view__Container">
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
            title=""
            columns={columns}
            data={data}
            options={{
              exportButton: true,
              actionsCellStyle: {
                backgroundColor: "none",
                color: "black",
              },
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: "rgba(255, 196, 35, 1)",
                color: "black",
                borderRadius: 1,
              },
              rowStyle: {
                fontSize: 13,
              },
            }}
            style={{
              boxShadow: "none",
              width: "100%",
              background: "none",
              fontSize: "13px",
            }}
            actions={[
              {
                icon: GrView,
                iconProps: { style: { fontSize: "15px" } },
                tooltip: "View Video",

                onClick: (event, rowData) => {
                  setItemsVideo(rowData);
                },
              },
            ]}
            // components={{
            //   Action: (props) => (
            //     <button
            //       onClick={(event) => props.action.onClick(event, props.data)}
            //       className="mtn__blackBtn"
            //     >
            //       {props.action.tooltip}
            //     </button>
            //   ),
            // }}
          />
          {itemsVideo && (
            <DocumentViewer
              onClose={() => setItemsVideo(null)}
              open={true}
              url={itemsVideo?.Video}
            />
          )}
        </div>
      </Box>
    </EmployeeWrapper>
  );
};
