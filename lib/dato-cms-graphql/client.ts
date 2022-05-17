// Code that must be executed on the client side, in order to access DatoCMS

import type { IndexPageData } from "@/components/index-page";
import { QueryListenerOptions, useQuerySubscription } from "react-datocms";
import { PostPageData } from "@/components/post-page";

export function useIndexPageDataFromGraphql(
  subscription: QueryListenerOptions<any, any>
): IndexPageData {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);
  return {
    allPosts,
    site,
    blog,
  };
}

export function usePostPageDataFromGraphql(
  subscription: QueryListenerOptions<any, any>
): PostPageData {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);
  return {
    site,
    post,
    morePosts,
  };
}
