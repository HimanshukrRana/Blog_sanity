import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../../theme";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import BannerService from "../../sections/bannerService";

const title = "Business Incorpliance";
const description =
  "We provide best in class services at a reasonable cost to ensure compliance for all type of business set ups";

export default function Company() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Support System Landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <BannerService description={description} title={title} />

        <div style={section}>
          <div>
            <h2>
              We provide best in class services at a reasonable cost to ensure
              compliance for all type of business set ups:
            </h2>
            <h3>
              Annual Compliance for ​Companies (Starting from Rs. 6,000/- plus
              GST)
            </h3>
            <h3>
              Annual Compliance for ​LLPs (Starting from Rs. 3,000/- plus GST)
            </h3>
            <h3></h3>
            <p style={paragraph}>
              We offer following Annual compliance for Private limited company:
            </p>
            <ul>
              <li>Filing of Annual MCA return</li>
              <li>Filing of Annual Income tax return</li>
              <li>
                Preparation of Accounts, Auditors Report, Directors Report, and
                necessary Board Resolutions
              </li>
            </ul>

            <h1>Other Compliance (Starting from Rs. 1,000 plus GST)</h1>

            <ul style={list}>
              <li>Name Change</li>
              <li>Registered Office Change</li>
              <li>Add Directors</li>
              <li>Remove Directors</li>
              <li>Increase Authorized Capital</li>
              <li>Share Transfer</li>
              <li>MOA Amendment</li>
              <li>Add Partner</li>
            </ul>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
const section = {
  width: "80%",
  margin: "0px auto  50px auto",
  textTransform: "capitalize",
};

const paragraph = {
  fontSize: "20px",
};
const list = {
  fontSize: "20px",
};
