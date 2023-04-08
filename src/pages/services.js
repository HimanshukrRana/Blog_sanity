import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
import BannerService from "../sections/bannerService";
import Services from "../sections/services";
// import Service from './services/service.data'

const title = "service";
const description =
  "Get your info tests delivered at home collect a sample from the your progress tests.";

export default function services() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Support System Landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />

        <BannerService description={description} title={title} />

        <Services />
      </Layout>
    </ThemeProvider>
  );
}
