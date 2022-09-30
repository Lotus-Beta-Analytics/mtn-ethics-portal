import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import * as React from "react";

type Props = {
  comment;
};

export const PostComment: React.FC<Props> = ({ comment }) => {
  return <PostCommentContainer>ViewComment</PostCommentContainer>;
};

const PostCommentContainer = styled(Box)({
  background: "#FFFFFF",
  boxShadow: "0px 7px 20px 6px rgba(0, 0, 0, 0.06)",
  borderRadius: "10px",
  width: "100%",
  minHeight: "120px",
  boxSizing: "border-box",
  padding: "1rem",
});
