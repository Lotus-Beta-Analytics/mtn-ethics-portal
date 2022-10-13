import { Avatar, Box, Typography } from "@material-ui/core";
import * as React from "react";
import { EmployeeWrapper } from "../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../shared/components/PageHeaderWithImage";
import { useParams } from "react-router-dom";
import * as dayjs from "dayjs";
import { PostComment } from "./PostComment";
import "./styles.css";
import { PostAction } from "./PostAction";
import { EnterComment } from "./EnterComment";
import Button from "@material-ui/core/Button";
import { sp } from "@pnp/sp";
import { useQuery } from "@tanstack/react-query";
import { FaShare } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AddToast, useToasts } from "react-toast-notifications";
import { errorAlert, successAlert } from "../../../../utils/toast-messages";

type User = {
  name: string;
  photoUrl: string;
};

export const Post = () => {
  const { id } = useParams();
  const [comment, setComment] = React.useState("");
  const { data } = useQuery<User>(["userProfile"], async () => {
    try {
      const res = await sp.profiles.myProperties.get();
      return {
        name: res?.DisplayName,
        photoUrl: res?.PictureUrl,
      };
    } catch (e) {
      errorAlert(toast);
    }
  });
  const toast = useToasts().addToast;

  const [commenting, setCommenting] = React.useState<boolean>(false);

  const commentHandler = async () => {
    setCommenting(true);
    try {
      const res = await sp.web.lists.getByTitle("Comments").items.add({
        PostId: id,
        comment,
        user: JSON.stringify(data),
      });

      setCommenting(false);
      // toast("Comment Added", {
      //   appearance: "success",
      //   autoDismiss: true,
      // });
      successAlert(toast, "Comment Added");
      setComment(null);
    } catch (e) {
      errorAlert(toast);
      setCommenting(false);
    }
  };

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
          likes: [{ userId: 1 }],
          unLikes: [{ userId: 2 }],
        },
        {
          id: 2,
          comment: "first comment",
          user: {
            name: "Jake",
            photoUrl:
              "https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/landing.png",
          },
          likes: [{ userId: 1 }],
          unLikes: [{ userId: 2 }],
        },
      ],
    },
    likes: [{ userId: 1 }],
    unLikes: [{ userId: 2 }],
  };
  return (
    <EmployeeWrapper showFooter={false} backButton={false}>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={3}
            style={{ boxSizing: "border-box" }}
          >
            <Box></Box>
            <PostAction
              comments={post?.post?.comments?.length}
              likes={post?.likes.length}
              unLikes={post?.unLikes.length}
              postId={post?.id}
            />
          </Box>
          <Box className="comment-container">
            <Typography variant="h6">Comments</Typography>
            <Box>
              {post.post.comments.map((comment) => (
                <PostComment
                  comment={comment}
                  comments={post?.post?.comments?.length}
                />
              ))}
            </Box>
          </Box>
          <Box width="100%" mb={1}>
            <Typography variant="h6">Add Comment</Typography>
            <Box
              style={{
                display: "flex",
                gap: ".5rem",
              }}
              width="100%"
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  alignItems: "center",
                  flex: ".2",
                }}
              >
                <Avatar
                  src={data?.photoUrl}
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                />
                <Typography>{data?.name}</Typography>
              </Box>
              <Box flex="1.4">
                <EnterComment
                  comment={comment}
                  onUpdate={(comment) => setComment(comment)}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box></Box>
              <Button
                endIcon={<FaShare />}
                style={{ borderRadius: "100px" }}
                color="primary"
                variant="contained"
                disabled={!comment?.trim() || commenting}
                onClick={() => commentHandler()}
              >
                {commenting ? <CircularProgress size={20} /> : "Add Comment"}
              </Button>
            </Box>
          </Box>
        </Box>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
