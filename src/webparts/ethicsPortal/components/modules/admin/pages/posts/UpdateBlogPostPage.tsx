import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";
import { PostEditor } from "../../components/blog-set-up/PostEditor";
import { BlogSectionEnums } from "../../components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { CreateSection } from "../../components/blog-set-up/sections/CreateSection";
import { editPost } from "./apis/editPost";
import { getPost } from "./apis/getAllPosts";

export const UpdateBlogPostPage: React.FC<{ context: WebPartContext }> = ({
  context,
}) => {
  const { postId } = useParams();

  const queryClient = useQueryClient();
  const toast = useToasts().addToast;

  const data = useQuery<any>(
    ["getPost", { id: postId }],
    () => {
      getPost(postId);
    },
    {
      enabled: !!postId,
    }
  );

  const history = useHistory();

  const [file, setFile] = React.useState(data?.data?.FileURL);
  const [section, setSection] = React.useState(data?.data?.section);
  const parsed = data?.data?.content;
  const [content, setContent] = React.useState<any>(JSON.parse(parsed));
  const [postTitle, setPostTitle] = React.useState(data?.data?.PostTitle);

  const mutation = useMutation(
    () =>
      editPost(postId, {
        PostTitle: postTitle,
        content: JSON.stringify(content),
        PostSection: section,
        FileUrl: file,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getAllPosts"]);
        successAlert(toast, "Post Updated Successfully");
        history.goBack();
      },
      onError: () => {
        errorAlert(toast);
      },
    }
  );

  if (data?.isError) return <>An error occured</>;

  if (data?.isLoading) return <>Loading...</>;

  return (
    <div>
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
        <Typography>Update Blog Post | {data?.data?.PostTitle}</Typography>
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
            fileControl={file}
            onUpdate={(fileUrl) => setFile(fileUrl)}
            context={context}
          />
        </Box>

        <Box my={2}>
          <CreateSection
            section={section as BlogSectionEnums}
            onUpdate={(section) => setSection(section as BlogSectionEnums)}
          />
        </Box>
        <Box my={2} style={{ overflowY: "auto" }}>
          <PostEditor onUpdate={(content) => setContent(content)} />
        </Box>

        <Box
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            disabled={mutation.isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
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
    </div>
  );
};
