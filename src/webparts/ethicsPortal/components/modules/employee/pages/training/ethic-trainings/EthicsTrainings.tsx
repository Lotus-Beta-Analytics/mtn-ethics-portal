import MaterialTable from "material-table";
import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { FaPlay } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

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

export const EthicsTrainings = () => {
  const history = useHistory();

  const [columns, setColumns] = React.useState([
    { title: "Title", field: "TitleName", type: "string" as const },
    { title: "Category", field: "CategoryName", type: "string" as const },
    { title: "Size(MB)", field: "FileSize", type: "string" as const },
  ]);

  const [data, setData] = React.useState([
    {
      TitleName: "Training of Ethics Business",
      CategoryName: "Business Ethics Everyone's Responsibilities",
      FileSize: "1.5GB",
    },
    {
      TitleName: "Ethics And Personal Statistics",
      CategoryName: "MTN Ethics training Videos",
      FileSize: "19.5GB",
    },
    {
      TitleName: "Ethics and Organizational Standards",
      CategoryName: "Organizational Ethics",
      FileSize: "500MB",
    },
  ]);

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
                icon: FaPlay,
                iconProps: { style: { fontSize: "15px" } },
                tooltip: "Play Video",

                onClick: (event, rowData) => {
                  history.push();
                },
              },
              {
                icon: BsDownload,
                iconProps: { style: { fontSize: "15px" } },
                tooltip: "Download Video",

                onClick: (event, rowData) => {
                  history.push();
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
