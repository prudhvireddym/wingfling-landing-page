import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(120deg, #2E3192 0%, #1BFFFF 100%);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
`;

const AboutUsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
`;

const AboutUsDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CreatorImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const CreatorName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
`;

const CreatorDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const CreatorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const CreatorDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled.img`
  width: 50px;
  height: auto;
  cursor: pointer;
`;


const AboutUs = () => {
    return (
        <AboutUsContainer>
          <AboutUsTitle>About</AboutUsTitle>
          <AboutUsDescription>
            Wingfling is an AI-powered app that aims to help you enhance your online dating experience.
            Our cutting-edge technology generates customized conversation starters, responses, and witty
            comebacks tailored to your chosen emotional tone. With Wingfling, you'll never have to worry about awkward
            silences again!
          </AboutUsDescription>
          <CreatorSection>
            <CreatorImage src="https://lh3.googleusercontent.com/ttUw-N2PWc8ZHHOzTgIebUYE1x6wD7vF4E9ZRzBUXWpFeT7P5HyajTtveHzb5Eu4H7U=w2400" alt="Prudhvi Reddy" />
            <CreatorDetails>
              <CreatorName>Prudhvi Reddy</CreatorName>
                <CreatorDescription>
                Hello, thank you for checking out my app, this is Prudhvi Reddy,solo developer for wingfling, feel free to text or follow me on my socials below for no reason ;)
              </CreatorDescription>
              <Socials>
                <a href="https://www.instagram.com/imprudhvim/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon src="https://lh3.googleusercontent.com/pPnY9KbQTI_ETX5n7Djc54P6PxOYD7dChu9IxuTBbwcPy-pgvYDMZatb6vzveIEkXKo=w2400" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/iamprudhvireddy/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon src="https://lh5.googleusercontent.com/PNHjtWoVC8JIqN-HZ4R5sKQlEwLtxYaK4gD7MQupuYOKl--Ca3TpJ8-pmGwJIQ-qEsA=w2400" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/mprudhvireddi" target="_blank" rel="noopener noreferrer">
                    <SocialIcon src="https://lh6.googleusercontent.com/06JUlRJNd-Wr3QQJuYzTysk4208xb-ofdmlnpwzHwOneN52zBAz0-DO2x6SDYkJwTgM=w2400" alt="Twitter" />
                </a>
                </Socials>
            </CreatorDetails>
          </CreatorSection>
        </AboutUsContainer>
      );
};

export default AboutUs;
