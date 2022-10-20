import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { MLink } from "../../../../styles/styles";
import { MButton } from "../../../shared/components/buttons/MButton";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  post: any;
};

export const PostPreviewItem: React.FC<Props> = ({ post }) => {
  return (
    <Box width="150px" height="70%" mb={1}>
      <PreviewContainer bg={post?.FileUrl}>
        <Typography>{post?.PostTitle}</Typography>
        <MLink to={`/blog/post/${post.Id}`}>
          <MButton text="Read More" endIcon={<FaAngleDoubleRight />} />
        </MLink>
      </PreviewContainer>
      <Typography align="center">
        Posted on {new Date(post?.Created).toDateString()}
      </Typography>
    </Box>
  );
};

const PreviewContainer = styled.div<{
  bg: string;
  height: string;
}>((props) => ({
  backgroundImage: `url(${props.bg})`,
  width: "300px",
  height: "90%",
  display: "flex",
  // alignItems: "center",
  padding: "1.5rem",
  boxSizing: "border-box",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "10px",
}));
