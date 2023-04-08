import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../../theme";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import BannerService from "../../sections/bannerService";

const title = "Gst Incorpliance";
const description =
  "We provide best in class services at a reasonable cost to ensure compliance for all type of business set ups";

export default function Itr() {
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
              Your gross total income (before allowing any deductions under
              section 80C to 80U) exceeds Rs.2,50,000 in the FY 2017-18 This
              limit is Rs 3,00,000 for senior citizens (who are more than 60
              years old but less than 80 years old) or Rs 5,00,000 for super
              senior citizens (who are more than 80 years old) You are a company
              or a firm irrespective of whether you have income or loss during
              the financial year. You want to claim an income tax refund. You
              want to carry forward a loss under a head of income.
            </p>

            <h3>
              A proof of return filing may also be required at the time of
              applying for a loan or a visa.
            </h3>

            <h1>OUR ITR PACKAGES </h1>

            <ul style={list}>
              <li>Salaried Employees Rs. 499/-</li>
              <li>Business Professionals Rs. 999/-</li>
              <li>Preparation of Balance Sheet and P&L Rs. 999/-</li>
              <li>CA Certificate on Balance Sheet and P&L Rs. 999/-</li>
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
