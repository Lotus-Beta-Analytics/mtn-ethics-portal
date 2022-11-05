import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { RecognitionTable } from "./components/RecognitionTable";
import { getAllRecognition } from "./apis/GetAllRecognition";

export interface ReadOnlyURLSearchParams extends URLSearchParams {
  append: never;
  set: never;
  delete: never;
  sort: never;
}

export const ManageRecognitionPage = () => {
  const { data, isLoading, isError } = useQuery<any>(
    ["getAllRecognition"],
    getAllRecognition
  );

  if (isError) return <>An Error Occured...</>;
  return (
    <AdminWrapper>
      <RecognitionTable
        recognition={data}
        loading={isLoading}
        title="Ethics Champions"
      />
    </AdminWrapper>
  );
};
