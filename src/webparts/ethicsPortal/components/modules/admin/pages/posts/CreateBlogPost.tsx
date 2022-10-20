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
import * as React from "react";
import { useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";
import { FileUpload } from "../../../shared/components/input-fields/FileUpload";
import { PostEditor } from "../../components/blog-set-up/PostEditor";
import { BlogSectionEnums } from "../../components/blog-set-up/sections/blog-section-enums/blog-section-enums";
import { CreateSection } from "../../components/blog-set-up/sections/CreateSection";

type Props = {
  context: WebPartContext;
};

export const CreateBlogPost: React.FC<Props> = ({ context }) => {
  const [file, setFile] = React.useState("");
  const [section, setSection] = React.useState("");
  const [content, setContent] = React.useState<any>();
  const [postTitle, setPostTitle] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const toast = useToasts().addToast;

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sp.web.lists.getByTitle("Post").items.add({
        PostTitle: postTitle,
        content: JSON.stringify(content),
        PostSection: section,
        FileUrl: file,
      });
      setLoading(false);
      successAlert(toast, "Post Added");
      setFile(null);
      setPostTitle("");
      setSection("");
      setContent(null);
    } catch (e) {
      errorAlert(toast);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ width: "60%", margin: "auto" }}>
      <Typography>Create Blog Post</Typography>
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
      <Box my={2}>
        <PostEditor onUpdate={(content) => setContent(content)} />
      </Box>

      <Box style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Button variant="outlined" color="secondary" size="large">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          endIcon={loading ? <CircularProgress size={20} /> : <Add />}
          disabled={loading}
        >
          Create
        </Button>
      </Box>
    </form>
  );
};
