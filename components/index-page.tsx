import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Layout from "./layout";
import Container from "./container";
import Intro from "./intro";
import MoreStories from "./more-stories";
import HeroPost from "./hero-post";
import { PostData, SiteData, BlogData } from "../types/dato-cms-types";

export interface IndexPageData {
  allPosts: PostData[];
  site: SiteData;
  blog: BlogData;
}

export interface IndexPageProps extends IndexPageData {
  preview: boolean;
}

export function IndexPage(props: IndexPageProps) {
  const { allPosts, blog, site, preview } = props;

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <Intro />
          {heroPost && <HeroPost {...heroPost} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
