import MaterialTable from "material-table";
import * as React from "react";
import { sp } from "@pnp/sp";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { GrView } from "react-icons/gr";

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
    { title: "Training Video", field: "Video", type: "string" as const },
  ]);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`Training`)
      .items.getAll()
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
                  history.push(`/view/category/training/${rowData.ID}`);
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
        </div>
      </Box>
    </EmployeeWrapper>
  );
};
