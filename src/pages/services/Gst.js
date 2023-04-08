import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../../theme";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import BannerService from "../../sections/bannerService";

const title = "Gst Incorpliance";
const description =
  "We provide best in class services at a reasonable cost to ensure compliance for all type of business set ups";

export default function Gst() {
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
            <p>
              All registered businesses have to file monthly, quarterly and/or
              annual GST Returns based on the type of business. GSTR 3B is
              required to be filed monthly for all registered non composition
              business. GSTR 1 is required to be filed monthly if turnover
              exceeds Rs. 1.5 crore, upto 1.5 crore this can be filed quarterly.
            </p>
            <h3>Composition holders need to file quarterly returns.</h3>

            <h2>OUR GST RETURN PACKAGES</h2>

            <h3>Monthly Package</h3>
            <ul>
              <li>Nil Return from Rs. 199/- per month. </li>
              <li>Upto 10 Transaction Rs. 499/- per month. </li>
              <li>Upto 50 Transaction Rs. 999/- per month. </li>
              <li>Upto 100 Transaction Rs. 1499/- per month. </li>
            </ul>

            <h2> Quarterly Package</h2>
            <ul>
              <li>Nil Return from Rs. 399/- per quarter</li>
              <li>Upto 10 Transaction Rs. 999/- per quarter</li>
              <li>Upto 50 Transaction Rs. 1999/- per quarter</li>
              <li>Upto 100 Transaction Rs. 2999/- per quarter</li>
            </ul>

            <h2> Yearly Package</h2>
            <ul>
              <li>Nil Return from Rs. 1199/- per year</li>
              <li>Upto 10 Transaction Rs. 2999/- per year</li>
              <li>Upto 50 Transaction Rs. 5999/- per year</li>
              <li>Upto 100 Transaction Rs. 8999/- per year</li>
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
