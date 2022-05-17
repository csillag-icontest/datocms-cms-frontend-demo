import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import PostHeader from "./post-header";
import Layout from "./layout";
import Header from "./header";
import Container from "./container";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import MoreStories from "./more-stories";
import { PostData, SiteData } from "../types/dato-cms-types";

export interface PostPageData {
  site: SiteData;
  post: PostData;
  morePosts: PostData[];
}

export interface PostPageProps extends PostPageData {
  preview: boolean;
}

export function PostPage(props: PostPageProps) {
  const { site, post, morePosts, preview } = props;

  const metaTags = post.seo.concat(site.favicon);

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <Header />
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <hr />
          This is a test text
          <hr />
          <PostBody content={post.content} />
        </article>
        <SectionSeparator />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}
