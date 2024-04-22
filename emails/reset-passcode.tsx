import {
  Body,
  Text,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export default function AccountSignUp() {
  return (
    <Html>
      <Head>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#007291",
                },
              },
            },
          }}
        >
          <Html>
            <Head />
            <Preview>Trocah Account Opening</Preview>
            <Body style={main}>
              <Container style={container}>
                <Section style={coverSection}>
                  <Section
                    style={singleText}
                    className="bg-[#0368ee] rounded-tr-lg rounded-tl-lg text-white w-full h-[50px]"
                  >
                    <div className="md:flex md:justify-between text-[9px] items-center">
                      <Link href="http://www.trocah.com" target="_blank">
                        <Img
                          src="https://dev-trocah-words-store.sfo3.cdn.digitaloceanspaces.com/logo-assets/trocah-logo.svg"
                          alt="trocah logo"
                          loading="lazy"
                          className=" md:ml-3 md:w-[100px] ml-[30%]"
                          width="100"
                          height="50"
                          title="logo"
                        />
                      </Link>
                      <div className="md:mr-3 md:text-[17px] mx-[15px] font-medium text-[11px] mb-3 md:mb-0">
                        Powering Community Focused Financial Services
                      </div>
                    </div>
                  </Section>
                  <Section style={upperSection}>
                    <Section
                      style={singleText}
                      className="mb-4 flex justify-center md:text-[25px] text-[14px] font-semibold md:text-[25px]"
                    >
                      Secure Passcode Reset
                    </Section>
                    <Section
                      className="right-0 font-normal mt-[30px] text-[14px] mb-[20px]"
                      style={singleText}
                    >
                      Hello User,
                    </Section>
                    <Text
                      style={mainText}
                      className="text-justify whitespace-normal text-pretty"
                    >
                      You've requested to reset your Trocah
                      passcode. To ensure the security of your account, please
                      use the following One-Time Password (OTP) to proceed with
                      setting a new passcode:
                    </Text>
                    <Section>
                      <Text
                        style={singleText}
                        className="bg-[#EAF3FF]  text-[24px] font-medium w-[80px] pr-4 pl-4 rounded-lg py-4"
                      >
                        776644
                      </Text>
                    </Section>
                  </Section>
                  <Section
                    style={lowerSection}
                    className="mt-[-30px] text-justify"
                  >
                    <Text style={cautionText}>
                      This OTP is valid for 5 minutes and will be used only for
                      your current registration process.
                      <br />
                      <br />
                      <span className="font-bold text-[15px] leading-2 ">
                        Didn&apos;t request this?
                      </span>
                      <br />
                      If you did not initiate this registration or if you feel
                      your email is being used without your consent, contact our
                      support team immediately at
                      <br />
                      <Link
                        className="text-[13px] hover:bg-blue-700"
                        href="mailto:support@trocah.com"
                        style={link}
                      >
                        support@trocah.com
                      </Link>
                      <br />
                      <br />
                      Thank you for choosing Trocah for your financial needs.
                      <br />
                      <Text style={cautionText} className="mt-[16px]">
                        Warm regards,
                        <br />
                        The Trocah Team
                      </Text>
                    </Text>
                  </Section>
                  <Section className="">
                    <Text
                      style={singleText}
                      className="flex text-[14px] md:font-normal justify-center"
                    >
                      Follow us
                    </Text>
                    <div className="flex justify-center gap-4">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61550853871670"
                        target="_blank"
                      >
                        <Img
                          src="https://dev-trocah-words-store.sfo3.cdn.digitaloceanspaces.com/logo-assets/facebook.svg"
                          alt="trocah facebook"
                          loading="lazy"
                          className="  md:w-[80px] "
                          width="35.3"
                          height="35.3"
                          title="logo"
                        />
                      </Link>
                      <Link
                        href="https://www.instagram.com/usetrocah"
                        target="_blank"
                      >
                        <Img
                          src="https://dev-trocah-words-store.sfo3.cdn.digitaloceanspaces.com/logo-assets/instagram.svg"
                          alt="trocah instagram"
                          loading="lazy"
                          className="  md:w-[80px] "
                          width="35.3"
                          height="35.3"
                          title="logo"
                        />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/trocah"
                        target="_blank"
                      >
                        <Img
                          src="https://dev-trocah-words-store.sfo3.cdn.digitaloceanspaces.com/logo-assets/linkedin.svg"
                          alt="trocah logo"
                          loading="lazy"
                          className="  md:w-[80px] "
                          width="35.3"
                          height="35.3"
                          title="logo"
                        />
                      </Link>
                      <Link href="https://twitter.com/trocahhq" target="_blank">
                        <Img
                          src="https://dev-trocah-words-store.sfo3.cdn.digitaloceanspaces.com/logo-assets/twitter.svg"
                          alt="trocah twitter"
                          loading="lazy"
                          className=" md:w-[80px] "
                          width="35.3"
                          height="35.3"
                          title="logo"
                        />
                      </Link>
                    </div>
                    {/* <Section>
                    <FaFacebook /> <FaInstagram /> <FaLinkedin /> <BsTwitterX />
                  </Section> */}
                  </Section>
                  <Hr style={hrStyle} />
                  <Text
                    style={footerText}
                    className="text-left pt-10 pb-10 rounded-lg text-justify"
                  >
                    <span className="font-bold text-[14px]" style={singleText}>
                      Trocah Technology Limited. <br />
                    </span>
                    Registered Office: 128, City Road, London, United Kingdom
                    Company Registration Number: 14672514 <br />
                    <br />
                    <span className="pt-8 ">
                      Trocah Technology Limited. No. RC 14672514 is authorized
                      and regulated by the Financial Conduct Authority (FCA)
                      under the Moorwand as an Agent Distributor (EMD). Moorwand
                      is licensed by the Financial Conduct Authority of the
                      United Kingdom as a regulated Electronic Money Institution
                      to issue electronic money and provide payment services.{" "}
                      <br />
                    </span>
                    <br />
                    As a financial services provider, Trocah Technology operates
                    under the strict guidelines and regulations of the Financial
                    Conduct Authority (FCA). For detailed information on our
                    regulatory status and the services we provide, please visit
                    our Legal & Compliance Page.
                    <br />
                    <br />
                    For more information about the services Trocah Technology
                    provides and any inquiries you may have, please contact us
                    via the in-app chat in the Trocah app or by emailing
                    <Link
                      className="ml-2"
                      href="mailto:support@trocah.com"
                      style={link}
                    >
                      support@trocah.com
                    </Link>
                    <br />
                    <br />
                    This email is part of our communication regarding your
                    Trocah account.
                    <br />
                    <br />
                    Trocah © 2023. All rights reserved.
                  </Text>
                </Section>
              </Container>
            </Body>
          </Html>
        </Tailwind>
      </Head>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};
const singleText = {
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  // fontWeight: "",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "auto 0",
};

const imageSection = {
  backgroundColor: "#0368ee",
  display: "flex",
  padding: "0px 10px",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
  backgroundColor: "#fafbff",
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center" as const,
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "24px",
  // margin: "10px 0",
};

const validityText = {
  ...text,
  margin: "0px",
  textAlign: "center" as const,
};

const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };

const hrStyle = {
  border: "none", // Remove default border
  height: "1px", // Set the height of the line
  background: "#fafbff", // Set the color of the line
  margin: "20px 0",
};
