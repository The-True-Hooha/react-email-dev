import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const KoalaWelcomeEmail = ({ userFirstname }: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Petroleum Personnel Privilege (PPP) Welcome Email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Congratulations {userFirstname},</Text>
        <Text style={paragraph} className="text-justify">
          We sincerely hope this mail meets you well. You pre-enrolment form was
          received, reviewed and you have been recommended for immediate
          enlisting in the Petroleum Personnel Privilege (PPP) system.
          Congratulations, once again. With this mail, we hereby acknowledge
          your genuine interest in joining our exclusive community whose
          membership guarantees you access to the essential products offered
          through the PPP system at highly discounted prices. Therefore, kindly
          see this mail as an official “ACCEPTANCE LETTER” requiring your full
          consent to validate your willingness to join the PPP community. We
          enjoin you to carefully read through the guidelines of the PPP system,
          make effort to understand each one, so you can make the most of your
          membership.
          <br />
          <br />
          The guidelines, as listed below have been designed primarily to
          guarantee full access to all offerings and mitigate all forms of abuse
          of the benefits and privileges of being enjoyed through the PPP
          system. The guidelines are as follows:
          <ol type="1">
            <li>
              The Petroleum Personnel Privilege (PPP) system by design serves
              all members who are “Very Important Personalities” (VIP) to us and
              are treated accordingly. The system operates on a first come –
              first serve basis, so it is important that you take full advantage
              of your opportunities/privileges as well as acknowledge and
              respect when the system is serving others members which requires
              that you exercise patience diligently waiting for your turn.
            </li>
            <br />
            <li>
              The Petroleum Personnel Privilege (PPP) system operates a one-time
              use voucher program, which means to purchase any product through
              the system, you must have a voucher approved and generated by the
              system which can be used to buy any products on offering.
            </li>
            <br />
            <li>
              All vouchers generated by the PPP system are capped at the sum of
              Fifty Thousand Nigerian Naira (50, 000 NGN), meaning you can only
              purchase products worth Fifty Thousand Nigerian Naira (50, 000
              NGN) at a time. This management measure is to ensure the products
              being offered at highly discounted prices through the PPP system
              are available to all members at all time.
            </li>
            <br />
            <li>
              To get an approved voucher to make your purchases, you must first
              pay into the designated account, the amount you wish to make you
              purchase with. Once the sum is received and acknowledged by the
              system, it will take one (1) to ten (10) days for your vouchers to
              be approved. This wait period exist because the system is serving
              other members, so we enjoin you to be patient as much as possible.
            </li>
            <br />
            <li>
              If the amount paid into the designated account is above the
              voucher cap of Fifty Thousand Nigerian Naira (50, 000 NGN), the
              system will breakdown the amount paid in and your vouchers will be
              approved in batches of Fifty Thousand Nigerian Naira (50, 000 NGN)
              each, so be advised to make payment for your vouchers as the sum
              of or in batches of Fifty Thousand Nigerian Naira (50, 000 NGN).
            </li>
            <br />
            <li>
              All products offered on the PPP system are sold through PPP
              partner outlets referred to as “Point Of Collection (POC)”. Every
              POC is manned by a PPP representative whose job is to assist you
              to verify your voucher and facilitate the pickup of the product of
              your choice.
            </li>
            <br />
            <li>
              The Petroleum Personnel Privilege (PPP) system is strongly opposed
              and 100% against all forms of black market activities especially
              for our flagship product – Premium Motor Spirit (PMS). Therefore,
              it is not allowed for you to buy the above products in Jerry-Cans
              exclusively. However, a member is entitled to use only one unit of
              50 Liters jerry can to buy products alongside his vehicle.
            </li>
            <br />
            <li>
              Any member caught engaging in black market activities will be
              suspended from the system and any his funds deposited awaiting
              voucher approval will be refunded immediately meaning such member
              will no longer be able to secure approved vouchers to make
              purchases till further notice.
            </li>
            <br />
            <li>
              We encourage you to be discreet and diligent, making sure that you
              pay in for your vouchers ahead of time to avoid delays. As a
              member, you can only recommend an individual for membership, it is
              left for the management to accept or reject their pre-enrollment
              which is 100% FREE.
            </li>
            <br />
            <li>
              We expect you to relate to PPP staff with utmost regard, decorum
              and professionalism. Engaging in the use of bribes and other
              tactics to influence outcomes on the system is highly prohibited
              and members caught engaging is such acts will be promptly
              suspended from the system.
            </li>
          </ol>
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://getkoala.com">
            Agree To Terms and Conditions
          </Button>
        </Section>
        <br />
        <br />
        <Text style={paragraph} className="flex justify-center font-bold">
          <div style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0;">
            <div style="max-width: 800px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: #fff;">
              <h1 style="color: #333;">PAYMENT INSTRUCTIONS</h1>
              <p>
                We encourage you to maintain a copy of this email, so you can
                reference all payment information and do the needful as required
                at any time. There are only two types of payment approved for
                members in the PPP system.
              </p>
              <p>They are:</p>
              <ul style={{list-style-type: "square"; margin-left: "20px;"}}>
                <li>Payment for the annual membership subscription levy</li>
                <li>Making deposits for one's voucher</li>
              </ul>
              <p>Any other payment is 100% illegal and must be disregarded.</p>
              <p>
                There is also one bank account all payments must be made to, in
                order for the system to receive and acknowledge them.
              </p>
              <h3 style={{color: "#555;"}}>ANNUAL SUBSCRIPTION LEVY:</h3>
              <p>Thirty Five Thousand Nigerian Naira (35,000 NGN) Only.</p>
              <h3 style={{color: "#555"}}>VOUCHER PAYMENT:</h3>
              <p>
                Fifty Thousand Nigerian Naira (50, 000 NGN) only per voucher.
              </p>
              <h3 style={{color: "#555"}}>
                MAKE ALL PAYMENTS WITH APPROPRIATE DESCRIPTIONS TO:
              </h3>
              <p>
                ACCOUNT NAME: Myita Farmers Multipurpose Cooperative Society
              </p>
              <p>ACCOUNT NUMBER: 4011 392 669</p>
              <p>BANK: Fidelity Bank Plc</p>
              <p>
                Be advised that you can make payment for your annual
                subscription levy immediately and then you can start paying for
                your voucher within the next 24 hours of payment.
              </p>
              <p>
                In conclusion, to accept this offer of membership and agree to
                follow the guidelines above, kindly click on the link below.
              </p>
            </div>
          </div>
        </Text>
        <Text style={paragraph}>
          Best,
          <br />
          The Koala team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
