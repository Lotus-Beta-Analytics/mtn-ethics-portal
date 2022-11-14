import { Box } from "@material-ui/core";
import * as React from "react";
import { AdminWrapper } from "../../../../shared/components/app-wrapper/admin/AdminWrapper";
import { PolicyDetailWrapper } from "../components/PolicyDetailWrapper";
import { useParams } from "react-router-dom";
import { sp } from "@pnp/sp";
import { Policy } from "../../../../employee/components/PolicyLandingComponent";
import { useQuery } from "@tanstack/react-query";
import { PostsTable } from "../../posts/components/PostsTable";

export const PolicyDetailPage = () => {
  const { policyId } = useParams();
  const [policyTitle, setPolicyTitle] = React.useState<Policy>();
  const [posts, setPosts] = React.useState([]);
  const [content, setContent] = React.useState<any>();
  const { isLoading } = useQuery(
    ["policyWriteUps", policyId],
    async () =>
      await sp.web.lists
        .getByTitle("Post")
        .items.select(
          "PostTitle, Created, Id, ID, SectionId/ID, SectionId/PolicyTitle"
        )
        .expand("SectionId")
        .filter(`SectionId eq '${policyId}'`)
        .getAll(),
    {
      onSuccess(data) {
        setPosts(data);
      },
      onError(err) {
        console.log(err);
      },
    }
  );

  React.useEffect(() => {
    if (!policyId) return;
    (async () => {
      const res: Policy = await sp.web.lists
        .getByTitle("PolicyConfiguration")
        .items.getById(policyId)
        .get();
      if (res.Content) {
        let con = JSON.parse(res.Content);
        con = con?.data;
        setContent(con);
      }
      setPolicyTitle(res);
    })();
  }, [policyId]);

  return (
    <AdminWrapper>
      <PolicyDetailWrapper
        policy={policyTitle}
        id={policyId}
        content={content}
        setContent={setContent}
      >
        <Box>
          <PostsTable loading={isLoading} posts={posts} />
        </Box>
      </PolicyDetailWrapper>
    </AdminWrapper>
  );
};
