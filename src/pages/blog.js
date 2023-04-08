import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import Landing from "../components/blog/landing";
import Layout from "../components/layout";
import Header from "../components/header/header";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

const LandingPreview = lazy(() => import("../components/blog/landing-preview"));

export default function IndexPage({ allPosts, preview }) {
  console.log(allPosts, "alloossts");
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <LandingPreview allPosts={allPosts} />
      </PreviewSuspense>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Landing allPosts={allPosts} />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
