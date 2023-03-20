import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(120deg, #2E3192 0%, #1BFFFF 100%); // Add a background gradient
  color: #ffffff;
`;

const HeroIcon = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 1rem;
  margin-top: -12rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif; // Add a modern font
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Poppins', sans-serif; // Add a modern font
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const AppStoreButton = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

const PlayStoreButton = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;


const HighlightedText = styled.span`
  color: #fff  ; // Add a different, modern color
`;

const Hero = () => {
  const trackAppStoreButtonClick = () => {
    console.log('App Store Button Clicked')
    ReactGA.event({
      category: 'Button',
      action: 'App Store Download',
      label: 'App Store Button Clicked'
    });
  };

  const trackPlayStoreButtonClick = () => {
    console.log('Play Store Button Clicked')
    ReactGA.event({
      category: 'Button',
      action: 'Play Store Download',
      label: 'Play Store Button Clicked'
    });
  };

  return (
    <HeroContainer>
      <HeroIcon src="https://lh5.googleusercontent.com/9bxL3gf0YXAfvFoPBsRh38OYdqC918igjRs4dZ1uMSC5FIQj-E_9sElVMMeHqNh2SeY=w2400" alt="Wingfling Logo" />
      <HeroTitle>Wingfling</HeroTitle>
      <HeroSubtitle>Unleash the Power of AI to Boost Your Dating Game | <HighlightedText>Free for the first 1000 users</HighlightedText></HeroSubtitle>
      <DownloadButtons>
        <a href="https://apps.apple.com/app/id1673598311" target="_blank" rel="noopener noreferrer">
          <AppStoreButton
            src="https://lh3.googleusercontent.com/-dxFgBBDvKbfFfUQcWqmK4_V2hIz_4bB04tFuEwRpzGp6kHJZdQ75hVd3wReOm3FtBc=w2400"
            alt="Download from App Store"
            onClick={trackAppStoreButtonClick}
          />
        </a>
        <a href=" https://play.google.com/store/apps/details?id=com.wingfling" target="_blank" rel="noopener noreferrer">
          <PlayStoreButton
            src="https://lh6.googleusercontent.com/MtTYDVbzO57Zl1wdkN3uxlRSBbGxFgmCRvIn0YAcPHNQSeOK6Ck9PhYPit29hqxKFW4=w2400"
            alt="Download from Play Store"
            onClick={trackPlayStoreButtonClick}
          />
        </a>
      </DownloadButtons>
    </HeroContainer>
  );
};

export default Hero;
