import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { Policy } from "../../../employee/components/PolicyLandingComponent";
import { AdminWrapper } from "../../../shared/components/app-wrapper/admin/AdminWrapper";
import { CancelButton } from "../../../shared/components/buttons/CancelButton";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";
import { ButtonContainerStyles } from "../../../shared/components/TableCompHelpers";
import { PostEditor } from "../../components/blog-set-up/PostEditor";
import { BlogSectionEnums } from "../../components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { CreateSection } from "../../components/blog-set-up/sections/CreateSection";
import { Container } from "../ethics-policies-management/components/PolicyDetailWrapper";
import { editPost } from "./apis/editPost";
import { getPost } from "./apis/getAllPosts";

export const UpdateBlogPostPage: React.FC<{ context: WebPartContext }> = ({
  context,
}) => {
  const { postId } = useParams();

  const queryClient = useQueryClient();
  const toast = useToasts().addToast;

  const [file, setFile] = React.useState("");
  const [section, setSection] = React.useState<Policy>();

  const [content, setContent] = React.useState<any>();
  const [postTitle, setPostTitle] = React.useState("");

  const { data, isLoading, isError } = useQuery<any>(
    ["getPost", postId],
    async () => {
      return await sp.web.lists
        .getByTitle("Post")
        .items.getById(postId)
        .select(
          "content, PostTitle, FileUrl, SectionId/ID, SectionId/PolicyTitle"
        )
        .expand("SectionId")
        .get();
    },
    {
      enabled: !!postId,
      onSuccess(res) {
        setPostTitle(res?.PostTitle);
        setFile(res?.FileUrl);
        const con = JSON.parse(res?.content);
        setContent(con?.data);
        setSection({
          Content: "",
          Id: res?.SectionId["ID"],
          ImageUrl: "",
          PolicyTitle: res?.SectionId["PolicyTitle"],
        });
      },
      onError(err) {
        errorAlert(
          toast,
          "An error occurred while updating the article. Please try again."
        );
      },
    }
  );

  const history = useHistory();

  const mutation = useMutation(
    () =>
      editPost(postId, {
        PostTitle: postTitle,
        content: JSON.stringify(content),
        PostSection: section?.PolicyTitle,
        FileUrl: file,
        ["SectionIdId"]: section?.Id,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getAllPosts"]);
        successAlert(toast, "Article Updated Successfully").then(() => {
          history.goBack();
        });
      },
      onError: () => {
        errorAlert(toast);
      },
    }
  );

  if (isError) return <>An error occured</>;

  if (isLoading) return <>Loading...</>;

  return (
    <AdminWrapper>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          style={{
            width: "80%",
            margin: "auto",
            boxSizing: "border-box",
            padding: "1.5rem 1rem",
          }}
        >
          <Typography>
            Update Blog Post | <strong>{data?.PostTitle}</strong>
          </Typography>
          <TextField
            variant="outlined"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            label="Post Title"
            fullWidth
            required
            style={{ margin: "1rem 0" }}
          />
          <Box>
            <Typography>Upload Image</Typography>
            <FileUpload
              fileControl={file ?? ""}
              onUpdate={(fileUrl) => setFile(fileUrl)}
              context={context}
            />
          </Box>

          <Box my={2}>
            <CreateSection
              section={section}
              onUpdate={(section) => setSection(section)}
              label="Article Section"
            />
          </Box>
          <Box my={2} style={{ overflowY: "auto" }}>
            <PostEditor
              initialContent={content}
              onUpdate={(content) => setContent(content)}
            />
          </Box>

          <Box
            style={{
              ...ButtonContainerStyles,
            }}
          >
            <CancelButton isLoading={mutation.isLoading} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={
                mutation.isLoading ? <CircularProgress size={20} /> : <Add />
              }
              disabled={mutation.isLoading}
            >
              Update
            </Button>
          </Box>
        </form>
      </Container>
    </AdminWrapper>
  );
};
