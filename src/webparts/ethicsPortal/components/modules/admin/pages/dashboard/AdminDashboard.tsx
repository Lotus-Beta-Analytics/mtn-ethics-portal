import { Box, BoxProps, colors, styled, Typography } from "@material-ui/core";
import * as React from "react";
import {
  FaBook,
  FaDochub,
  FaImages,
  FaPeopleArrows,
  FaPeopleCarry,
  FaQuestion,
  FaTextWidth,
} from "react-icons/fa";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { useHistory } from "react-router-dom";

export const AdminDashboard = () => {
  const history = useHistory();
  return (
    <AdminWrapper>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          my: 4,
        }}
        style={{ gap: "2rem" }}
      >
        {dashboardItems.map((item) => {
          return (
            <DashboardCard onClick={() => history.push(`${item?.link}`)}>
              <item.icon
                style={{
                  fontSize: "1.5rem",
                }}
              />
              <Typography variant="body1">{item?.title}</Typography>
            </DashboardCard>
          );
        })}
      </Box>
    </AdminWrapper>
  );
};

const dashboardItems = [
  {
    title: "Gallery",
    link: "gallery/manage",
    icon: FaImages,
  },
  {
    title: "Ethics Policies",
    link: "policies",
    icon: FaBook,
  },
  {
    title: "Ethics Quiz",
    link: "manage-quiz",
    icon: FaQuestion,
  },
  {
    title: "Recognition",
    link: "recognition",
    icon: FaPeopleCarry,
  },
  {
    title: "Training",
    link: "training",
    icon: FaPeopleCarry,
  },
  {
    title: "Scrolling Text",
    link: "scrolling-text",
    icon: FaTextWidth,
  },
  {
    title: "Ethics Policy Breaches",
    link: "policy-breaches",
    icon: FaPeopleCarry,
  },
  {
    title: "Ethics Articles",
    link: "create-post",
    icon: FaBook,
  },
  {
    title: "Configure Users",
    link: "user/create",
    icon: FaPeopleArrows,
  },
];

const DashboardCard = styled(Box)<BoxProps>({
  width: "auto",
  gap: 1.5,
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    background: colors.yellow[600],
    fontWeight: "bold",
  },
});
