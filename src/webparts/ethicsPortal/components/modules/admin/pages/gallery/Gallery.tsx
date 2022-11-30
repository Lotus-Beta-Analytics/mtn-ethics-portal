import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { Container } from "../ethics-policies-management/components/PolicyDetailWrapper";
import { GalleryTable } from "./components/GalleryTable";
import { GalleryData } from "./forms/GalleryForm";

export const Gallery = () => {
  const { data, isLoading } = useQuery<GalleryData[]>(["gallery"], async () => {
    try {
      const res = await sp.web.lists.getByTitle("Gallery").items.getAll();

      return res;
    } catch (err) {
      return err;
    }
  });
  return (
    <AdminWrapper>
      <Container>
        <GalleryTable gallery={data} isLoading={isLoading} />
      </Container>
    </AdminWrapper>
  );
};
