import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { Container } from "../ethics-policies-management/components/PolicyDetailWrapper";
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
      <Container>
        <PostsTable posts={data} loading={isLoading} />
      </Container>
    </AdminWrapper>
  );
};
