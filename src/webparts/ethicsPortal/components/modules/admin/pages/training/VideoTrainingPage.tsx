import { Box } from "@material-ui/core";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { TrainingTable } from "./components/TrainingTable";
import { TrainingCategoryEnum } from "./enums/TrainingCategoryEnum";
import { VideoCourseForm } from "./forms/VideoCourseForm";
import { TrainingType } from "./types/TrainingTypes";

export const VideoTrainingPage: React.FC<{ context: WebPartContext }> = ({
  context,
}) => {
  const { data: trainings, isLoading } = useQuery<TrainingType[]>(
    ["getVideoCourses"],
    async () => {
      try {
        const res = await sp.web.lists.getByTitle("Training").items.getAll();
        return res;
      } catch (e) {
        return e;
      }
    }
  );

  const queryClient = useQueryClient();
  const toast = useToasts().addToast;

  const [training, setTraining] = React.useState<TrainingType>({
    Category: "" as TrainingCategoryEnum,
    TrainingTitle: "",
    Video: "",
  });
  const mutation = useMutation(
    async () => {
      try {
        const res = await sp.web.lists
          .getByTitle("Training")
          .items.add(training);
        return res;
      } catch (e) {
        return e;
      }
    },
    {
      onSuccess: () => {
        successAlert(toast, "Created");
        queryClient.invalidateQueries(["getVideoCourses"]);
        setTraining(null);
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
        <VideoCourseForm
          training={training}
          onUpdate={(items) => {
            setTraining(items);
          }}
          isLoading={mutation?.isLoading}
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          context={context}
        />
        <Box>
          <TrainingTable
            trainings={trainings}
            loading={isLoading}
            context={context}
          />
        </Box>
      </Box>
    </AdminWrapper>
  );
};
