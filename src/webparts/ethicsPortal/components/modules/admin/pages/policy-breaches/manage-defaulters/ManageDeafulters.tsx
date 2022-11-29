import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../../shared/components/app-wrapper/admin/AdminWrapper";
import { getAllDefaulters } from "../apis/GetAllDefaulters";
import { ManageDefaulterTable } from "../components/ManageDefaulterTable";

export const ManageDeafulters = () => {
  const { data, isLoading, isError } = useQuery<any>(
    ["getAllDefaulters"],
    getAllDefaulters
  );

  if (isError) return <>An Error Occured...</>;
  return (
    <AdminWrapper>
      <ManageDefaulterTable
        manageDefaulters={data}
        loading={isLoading}
        title="Manage Ethics Defaulters"
      />
    </AdminWrapper>
  );
};
