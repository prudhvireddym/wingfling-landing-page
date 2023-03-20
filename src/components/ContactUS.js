import React from 'react';
import styled from 'styled-components';
import ReactGA from "react-ga4";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, #2E3192 0%, #1BFFFF 100%);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;

const Contact = () => {
  const appName = "Wingfling";
  const contactEmail = "prudhvibusiness@gmail.com";
  const profileImageSrc = "https://lh3.googleusercontent.com/ttUw-N2PWc8ZHHOzTgIebUYE1x6wD7vF4E9ZRzBUXWpFeT7P5HyajTtveHzb5Eu4H7U=w2400";
  const instagramLink = "https://www.instagram.com/imprudhvim/";
  const linkedinLink = "https://www.linkedin.com/in/iamprudhvireddy/";
  const twitterLink = "https://twitter.com/mprudhvireddi";

  useEffect(() => {
    ReactGA.initialize('G-EGTQPQ5Z6R');

    ReactGA.send('pageview', { dp: '/contact', dt: 'Contact page visited' });
  }, []);

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ProfileImage src={profileImageSrc} alt="Prudhvi Reddy" />
      <Socials>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://lh3.googleusercontent.com/pPnY9KbQTI_ETX5n7Djc54P6PxOYD7dChu9IxuTBbwcPy-pgvYDMZatb6vzveIEkXKo=w2400" alt="Instagram" />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://lh5.googleusercontent.com/PNHjtWoVC8JIqN-HZ4R5sKQlEwLtxYaK4gD7MQupuYOKl--Ca3TpJ8-pmGwJIQ-qEsA=w2400" alt="LinkedIn" />
        </a>
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://lh6.googleusercontent.com/06JUlRJNd-Wr3QQJuYzTysk4208xb-ofdmlnpwzHwOneN52zBAz0-DO2x6SDYkJwTgM=w2400" alt="Twitter" />
        </a>
      </Socials>
      <ContactInfo>If you have any concerns or business enquries email me at {contactEmail}</ContactInfo>
    </ContactContainer>
  );
}

export default Contact;

