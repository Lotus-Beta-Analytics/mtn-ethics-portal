import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { CommentAction, PostAction } from "./PostAction";

type Props = {
  comment;
  comments: number;
};

export const PostComment: React.FC<Props> = ({ comment, comments }) => {
  return (
    <PostCommentContainer>
      <Box
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          <Avatar
            src={comment?.user?.photoUrl ?? ""}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <Typography>{comment?.user?.name ?? "N/A"}</Typography>
        </Box>

        <Typography>{comment?.comment}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        style={{ boxSizing: "border-box" }}
      >
        <Box></Box>
        <CommentAction
          likes={comment?.likes.length}
          unLikes={comment?.unLikes.length}
          commentId={comment.id}
        />
      </Box>
    </PostCommentContainer>
  );
};

const PostCommentContainer = styled(Box)({
  background: "#FFFFFF",
  boxShadow: "0px 7px 20px 6px rgba(0, 0, 0, 0.06)",
  borderRadius: "10px",
  width: "100%",
  minHeight: "90px",
  boxSizing: "border-box",
  padding: "1rem",
});
