import { Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { useParams } from "react-router-dom";
import * as dayjs from "dayjs";
import { PostComment } from "./PostComment";
import "./styles.css";

export const Post = () => {
  const { id } = useParams();
  const post = {
    id: 1,
    title: "Post title",
    image:
      "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png",
    date: new Date(),
    post: {
      body: "lorem ipsum dolor sit amet, consect",
      comments: [
        {
          id: 1,
          comment: "first comment",
          user: {
            name: "Jake",
            photoUrl:
              "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png",
          },
        },
      ],
    },
  };
  return (
    <EmployeeWrapper showFooter={false}>
      <PageWrapper>
        <PageHeaderWithImage bg={post.image} text={post.title} />
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">{post.title}</Typography>
            <Typography>
              Posted On: {dayjs(post.date).format("MMMM DD, YYYY")}
            </Typography>
          </Box>
          <Typography>{post.post.body}</Typography>
          <Box className="comment-container">
            <Typography variant="h6">Comments</Typography>
            <Box>
              {post.post.comments.map((comment) => (
                <PostComment comment={comment} />
              ))}
            </Box>
            <Box>
              {post.post.comments.map((comment) => (
                <PostComment comment={comment} />
              ))}
            </Box>
            <Box>
              {post.post.comments.map((comment) => (
                <PostComment comment={comment} />
              ))}
            </Box>
            <Box>
              {post.post.comments.map((comment) => (
                <PostComment comment={comment} />
              ))}
            </Box>
          </Box>
        </Box>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
