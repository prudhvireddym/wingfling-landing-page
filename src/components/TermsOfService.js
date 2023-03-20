import React,{useEffect} from 'react';
import styled from 'styled-components';
import ReactGA from "react-ga4";


const TermsOfService = () => {
  const appName = "Wingfling";
  const contactEmail = "prudhvisbusiness@gmail.com";

  useEffect(() => {
    ReactGA.initialize('G-EGTQPQ5Z6R');

    ReactGA.send('pageview', { dp: '/terms', dt: 'Terms page visited' });
  }, []);

  const TermsOfServiceContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Header = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #34495e;
`;

const SubHeader = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 15px 0;
  color: #2c3e50;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  color: #2c3e50;
`;

const BackgroundGradient = styled.div`
  background: linear-gradient(120deg, #74b9ff, #a29bfe);
  padding: 100px 0;
  border-radius: 10px;
`;

const InnerContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

  return (
    <BackgroundGradient>

    <TermsOfServiceContainer>

      <InnerContainer>
        <Section>
          <Header>Terms of Service for {appName} App</Header>
        </Section>
        <Section>
          <Header>1. Introduction</Header>
          <Text>
            Welcome to Wingfling! These Terms of Service (the "Terms") govern your use of our website, mobile application, and other services (collectively, the "Services"). Please read these Terms carefully before using the Services. By using the Services, you agree to be bound by these Terms, our Privacy Policy, and any additional terms to which you agree when using specific features of the Services.
          </Text>
          <SubHeader>2. Use of the Services</SubHeader>
          <Text>
            The Services are provided for your personal and non-commercial use only. You agree not to use the Services for any illegal or unauthorized purpose. You also agree not to use the Services in a manner that interferes with or disrupts the integrity or performance of the Services.
          </Text>
        </Section>
        <Section>
          <Header>3. User Content</Header>
          <Text>
            The Services may allow you to submit, upload, publish, or otherwise make available content, including but not limited to text, photographs, and videos (collectively, "User Content"). You retain all rights in and are solely responsible for your User Content. By making any User Content available through the Services, you grant to Wingfling a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised (including in connection with the Services and Wingfling's business and on third-party sites and services), without further notice to or consent from you, and without the requirement of payment to you or any other person or entity.
          </Text>
        </Section>
        <Section>
          <Header>4. User Conduct</Header>
          <Text>
            You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the Services in any medium, including without limitation by any automated or non-automated "scraping"; (ii) using any automated system, including without limitation "robots," "spiders," "offline readers," etc., to access the Services in a manner that sends more request messages to the Wingfling servers than a human can reasonably produce in the same period of time by using a conventional on-line web browser; (iii) transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services; (v) taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure; (vi) uploading invalid data, viruses, worms, or other software agents through the Services; (vii) collecting or harvesting any personally identifiable information, including account names, from the Services; (viii) using the Services for any commercial solicitation purposes; (ix) impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity; (x) interfering with the proper working of the Services; (xi) accessing any content on the Services through any technology or means other than those provided or authorized by the Services
            </Text>
        </Section>
        <Section>
          <Header>5. Modification of Terms of Service</Header>
          <Text>
            Wingfling reserves the right, at its sole discretion, to modify or replace the Terms at any time. If the alterations constitute a material change to the Terms, Wingfling will notify you by posting an announcement on the Services or sending you an email. What constitutes a material change will be determined at Wingfling's sole discretion.
          </Text>
        </Section>
        <Section>
          <Header>Contact Information</Header>
          <Text>
            If you have any questions or concerns about these Terms of Service, please contact {appName} at {contactEmail}.
          </Text>
        </Section>
      </InnerContainer>
  </TermsOfServiceContainer>
  </BackgroundGradient>

)};

export default TermsOfService;