import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../../theme";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import BannerService from "../../sections/bannerService";

const title = "Business Incorpliance";
const description =
  "Get your info tests delivered at home collect a sample from the your progress tests.";

export default function Business() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Support System Landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />

        <BannerService description={description} title={title} />

        <div style={section}>
          <ul style={list}>
            <li>Partnership Firm</li>
            <li>LLP Incorporation</li>
            <li>Company Incorporation</li>
          </ul>
          <div>
            <p>
              Partnership Firm & LLP Incorporation A partnership is an
              arrangement where parties, known as partners, agree to cooperate
              to advance their mutual interests. The partners in a partnership
              may be individuals, businesses, interest-based organizations,
              schools, governments, or combinations.
            </p>
            <p>
              A partnership is easy to form since no complex business
              formalities are required to be fulfilled. Partnership Firm
              Registration in India
            </p>
            <p>
              Partnership registration is not compulsory and in at the
              discretion of the partners whether they want to register the
              partnership firm or not. But a partnership firm cannot avail legal
              benefits if it is not registered, hence it is always advisable to
              register it. Documents required for partnership formation (whether
              registered or not) are:-
            </p>

            <ul style={list}>
              <li>Partnership Deed</li>
              <li>Documents of Firm</li>
              <li>Documents of Partners</li>
              <li>Additional Documents in case of Registration</li>
              <li>Current Bank Account</li>
            </ul>

            <h2>Partnership Deed</h2>
            <p>
              Although partnership deed can be oral, generally a partnership
              deed is written to avoid any future conflict. Partnership deed is
              created on a judicial stamp paper and has to be signed by all the
              partners. It contains rights and duties of the firm and the
              partners.
            </p>

            <h2>Documents of Partners</h2>
            <p>
              PAN card of partners – All partners are required to submit their
              PAN number as identity proof. Address proof of partners – Partners
              can submit Aadhar Card, Driving License, passport or Voter ID card
              as address proof. Name and other details on address proof should
              match PAN card details.
            </p>

            <h2> Documents of Firm</h2>
            <p>
              {" "}
              PAN card of firm – Partners need to apply for PAN of the firm.
              Form 49A has to be filed to apply for a PAN. Address Proof of firm
              – If the registered office place is rented, rent agreement and one
              utility bill (electricity bill, water bill, property tax bill, gas
              receipt etc.) have to be submitted. Also, NOC from landlord will
              be submitted. If the registered office place is own, utility bill
              has to be submitted mentioning the name of the owner. Also, a NOC
              from the owner (owner as mentioned in utility bill) has to be
              submitted.{" "}
            </p>

            <h2> Additional Documents in case of Registration </h2>
            <p>
              In case partners wish to register the partnership firm, they need
              to submit partnership deed, ID and address proofs of the firm as
              well as the partners to the Registrar of Partnerships. With it, an
              affidavit is also required to be submitted certifying that all the
              details mentioned in deed and documents are correct.{" "}
            </p>

            <h2> GST Registration </h2>
            <p>
              For obtaining a GST registration, a firm needs to submit PAN
              number, address proof and identity & address proofs of partner.
              For Details visit our GST registration page.{" "}
            </p>

            <h2> Current Bank Account </h2>

            <p>
              For opening a current bank account, a firm needs to submit
              following documents:
            </p>

            <ul style={list}>
              <li>Partnership deed</li>
              <li>Partnership firm PAN card</li>
              <li>Address Proof of the partnership firm</li>
              <li>Identity proofs of all the partners</li>
              <li>
                Partnership registration certificate (if partnership has been
                registered)
              </li>
              <li>
                Any registration document issued by central or state government
                (normally GST certificate is submitted)
              </li>
              <li>
                Copy of electricity bill, telephone bill or water bill (not more
                than 3 months old)
              </li>
              <li>
                Authorisation letter on the letterhead of the firm authorising a
                partner as authorised signatory for the bank account.
              </li>
            </ul>

            <h2> Company Incorporation </h2>

            <h3>
              The following are the documents required for Incorporation of
              Private Limited Company under SPICe process
            </h3>

            <ul>
              <li>
                Documents from Directors and Shareholders
                <ul>
                  <li>
                    Identity Proof
                    <ul>
                      <li>Permanent Account Number (PAN) Card</li>
                      <li>
                        Aadhaar Card / Passport / Driving License / Voter
                        Identity Card
                      </li>
                    </ul>
                  </li>
                  <li>
                    Address Proof
                    <ul>
                      <li>Telephone Bill / Mobile Bill</li>
                      <li> Electricity Bill / Water Bill</li>
                      <li>
                        Bank Statement /Bank Passbook with latest transaction
                        (Any one of the Document not older than 2 months)
                      </li>
                    </ul>
                  </li>
                  <li>
                    C. Passport size Photographs – 3 each
                    <h5>Notes:</h5>
                    <p>
                      All the Copies of documents must be Self Attested by the
                      applicant. Telephone Bill / Mobile Bill/Electricity Bill /
                      Bank Account Statement must be in the name of applicant
                      and should not be older than 2 months. If the documents
                      are not in than English, it should be translated to
                      English.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                Documents to be Signed by DIRECTORS
                <ul>
                  <li>Consent to Act as Director: Form DIR-2</li>
                  <li> Details for DIN</li>
                  <li>Declaration of DIN (If DIN is allotted already)</li>
                </ul>
              </li>
              <li>
                {" "}
                Documents to be Signed by SHAREHOLDERS
                <ul>
                  <li>Application for Digital Signature Certificate (DSC)</li>
                  <li>Declaration by Subscribers & Director: INC-9</li>
                </ul>
              </li>
              <li>
                Documents from Company / LLP / Trademark Owner, if any
                <ul>
                  <li>
                    Board Resolution / Formal authorisation for use of Name /
                    Trademark
                  </li>
                  <li>
                    Authorisation for execution Documents from Company / LLP
                    Note:- These shall be signed by the concerned on their
                    Letter head
                  </li>
                </ul>
              </li>
              <li>
                Registered Office – Address
                <ul>
                  <li>
                    No-Objection letter from the Owner of Address to use the
                    address of the registered office of the Company.
                  </li>
                  <li>
                    Address Proof – In the name of the Owner Electricity Bill,
                    Telephone Bill (Fixed Line Only), Gas Bill or Water Bill
                    (Not older than 2 months);- To be signed by the of the Owner
                    of Premises
                    <br />
                    OR
                    <br />
                    Tax Paid Receipt or Copy of Registered Sale Deed- To be
                    signed by the Shared Office Service provider.
                  </li>
                </ul>
              </li>
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
