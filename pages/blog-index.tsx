import { useIndexPageDataFromGraphql } from "@/lib/dato-cms-graphql/client";
import { IndexPage } from "@/components/index-page";
import {
  getGraphQLSubscriptionForIndexPage,
  IndexPageGraphQLSubscriptionData,
} from "@/lib/dato-cms-graphql/server";

export async function getStaticProps({ preview }) {
  return getGraphQLSubscriptionForIndexPage(preview);
}

export default function BlogIndex(props: IndexPageGraphQLSubscriptionData) {
  const { subscription, preview } = props;
  const data = useIndexPageDataFromGraphql(subscription);
  // data.allPosts[0].title
  return <IndexPage preview={preview} {...data} />;
}
