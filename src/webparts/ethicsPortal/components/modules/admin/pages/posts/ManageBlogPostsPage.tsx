import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { getAllPosts } from "./apis/getAllPosts";
import { PostsTable } from "./components/PostsTable";

export const ManageBlogPostsPage = () => {
  const { data, isLoading, isError } = useQuery<any[]>(
    ["getAllPosts"],
    getAllPosts
  );
  if (isError) return <>An Error Occured...</>;
  return (
    <AdminWrapper>
      <PostsTable posts={data} loading={isLoading} />
    </AdminWrapper>
  );
};
