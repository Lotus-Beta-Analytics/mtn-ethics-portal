import { Box } from "@material-ui/core";
import { sp } from "@pnp/sp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { ScrollingTextsTable } from "./components/ScrollingTextsTable";
import { ScrollingTextForm } from "./forms/ScrollingTextForm";
import { ScrollingTextInterface } from "./modals/UpdateScrollingTextModal";

export const ScrollingTextSetUpPage = () => {
  const [canEnable, setCanEnable] = React.useState(false);

  const { data: scrollingTexts, isLoading } = useQuery<any>(
    ["getScrollTexts"],
    async () => {
      try {
        const res = await sp.web.lists
          .getByTitle("ScrollingText")
          .items.getAll();
        return res;
      } catch (e) {
        return e;
      }
    }
  );

  React.useMemo(() => {
    setCanEnable(scrollingTexts?.filter((text) => text?.isEnabled).length > 0);
  }, [scrollingTexts]);
  const queryClient = useQueryClient();
  const toast = useToasts().addToast;

  const [scrollText, setScrollText] = React.useState<ScrollingTextInterface>({
    isEnabled: false,
    scrollingText: "",
  });
  const mutation = useMutation(
    async () => {
      try {
        const res = await sp.web.lists.getByTitle("ScrollingText").items.add({
          scrollingText: scrollText?.scrollingText,
          isEnabled: Boolean(scrollText?.isEnabled),
        });
        return res;
      } catch (e) {
        return e;
      }
    },
    {
      onSuccess: () => {
        successAlert(toast, "Created");
        queryClient.invalidateQueries(["getScrollTexts"]);
        setScrollText(null);
      },
      onError: () => {
        errorAlert(toast);
      },
    }
  );
  return (
    <AdminWrapper>
      <Box
        mt={2}
        display="flex"
        flexDirection="column"
        width="100%"
        style={{ minHeight: "100%", gap: "2rem" }}
      >
        <ScrollingTextForm
          scrollText={scrollText}
          canEnable={canEnable}
          onUpdate={(items) => {
            setScrollText(items);
          }}
          isLoading={mutation?.isLoading}
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
        />
        <Box>
          <ScrollingTextsTable
            scrollingTexts={scrollingTexts}
            loading={isLoading}
          />
        </Box>
      </Box>
    </AdminWrapper>
  );
};
