import {
  getAllPostPathsFromGraphQL,
  getGraphQLSubscriptionForPostPage,
} from "@/lib/dato-cms-graphql/server";
import { usePostPageDataFromGraphql } from "@/lib/dato-cms-graphql/client";
import { PostPage } from "@/components/post-page";

export async function getStaticPaths() {
  return getAllPostPathsFromGraphQL();
}

export async function getStaticProps({ params, preview = false }) {
  return getGraphQLSubscriptionForPostPage(preview, params.slug);
}

export default function Post({ subscription, preview }) {
  const data = usePostPageDataFromGraphql(subscription);
  // data.post.title
  // console.log(data.post.title)
  return <PostPage preview={preview} {...data} />;
}
