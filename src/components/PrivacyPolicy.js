import React,{useEffect} from 'react';
import styled from 'styled-components';
import ReactGA from "react-ga4";


const PrivacyPolicy = () => {
  const appName = "Wingfling";
  const contactEmail = "prudhvisbusiness@gmail.com";

  useEffect(() => {
    ReactGA.initialize('G-EGTQPQ5Z6R');

    ReactGA.send('pageview', { dp: '/privacy', dt: 'Privacy page visited' });
  }, []);

  const PrivacyPolicyContainer = styled.div`
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

    <PrivacyPolicyContainer>
      <div className="section">
        <h1>Privacy Policy for {appName} App</h1>
        <p>
          This privacy policy outlines the information collected and used by the {appName} app (“{appName}” or “App”) and how it is used to provide you with a better user experience. This policy applies to all users of {appName} and governs data collection and usage. By using {appName}, you consent to the data practices described in this policy.
        </p>
      </div>

      <div className="section">
        <h2>Information Collection and Use</h2>
        <p>
          {appName} collects several types of information, including:
        </p>

        <h3>1. Personal Information:</h3>
        <p>
          Personal information is data that can be used to identify or contact you, such as your name, email address, or phone number. {appName} may collect personal information when you create an account or participate in certain features of the App.
        </p>

        <h3>2. Non-personal Information:</h3>
        <p>
          Non-personal information is data that cannot be used to identify or contact you, such as usage data and demographic information. {appName} may collect non-personal information about your use of the App, such as your device type and operating system, the date and time you used the App, and the features you used.
        </p>
      </div>

      <div className="section">
        <h2>Information Sharing and Disclosure</h2>
        <p>
          {appName} does not sell, rent, or share personal information with third parties for their promotional purposes. {appName} may disclose personal information to third parties in the following circumstances:
        </p>

        <h3>1. With your Consent:</h3>
        <p>
          {appName} may share personal information with third parties when you give your consent.
        </p>

        <h3>2. For Legal Purposes:</h3>
        <p>
          {appName} may disclose personal information when required by law, such as in response to a court order or subpoena.
        </p>

        <h3>3. For Internal Operations:</h3>
        <p>
          {appName} may share personal information with its affiliates and contractors to support the internal operations of the App.
        </p>
      </div>

      <div className="section">
        <h2>Data Security</h2>
        <p>
          {appName} takes reasonable measures to secure your personal information against unauthorized access, alteration, or destruction. However, no security measures are foolproof, and {appName} cannot guarantee the security of your personal information.
        </p>
      </div>

      <div className="section">
        <h2>Changes to This Policy</h2>
        <p>
          {appName} may update this policy from time to time. When changes are made, {appName} will update the date at the top of this policy and publish the changes on the App. By using {appName} after changes are published, you consent to
                the revised policy.
    </p>
  </div>

  <div className="section">
    <h2>Contact Information</h2>
    <p>
      If you have any questions or concerns about this privacy policy, please contact {appName} at {contactEmail}.
    </p>
  </div>
  </PrivacyPolicyContainer>
  </BackgroundGradient>

)};

export default PrivacyPolicy;