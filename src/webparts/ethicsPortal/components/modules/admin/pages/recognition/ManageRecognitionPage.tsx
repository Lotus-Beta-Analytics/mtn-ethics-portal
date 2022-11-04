import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { useLocation } from "react-router-dom";
import { RecognitionTable } from "./components/RecognitionTable";
import { getAllRecognition } from "./apis/GetAllRecognition";

export interface ReadOnlyURLSearchParams extends URLSearchParams {
  append: never;
  set: never;
  delete: never;
  sort: never;
}

export const ManagePoliciesPage = () => {
  const { search } = useLocation();
  const searchParams = React.useMemo(
    () => new URLSearchParams(search) as ReadOnlyURLSearchParams,
    [search]
  );
  const [Recognitions, setRecognitions] = React.useState([]);

  const { data, isLoading, isError } = useQuery<any[]>(
    ["getAllRecognition", searchParams.get("section")],
    getAllRecognition,
    {
      onSuccess: (dt) => {
        if (searchParams.get("section")) {
          const filter = dt?.filter(
            (it) => it?.PolicySection == searchParams.get("section")
          );
          setRecognitions(filter);
        } else {
          setRecognitions(dt);
        }
      },
    }
  );
  

  if (isError) return <>An Error Occured...</>;
  return (
    <AdminWrapper>
      <RecognitionTable
        recognition={Recognitions}
        loading={isLoading}
        title={searchParams.get("section")}
      />
    </AdminWrapper>
  );
};
