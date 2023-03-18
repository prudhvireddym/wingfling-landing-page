import React from 'react';
import Hero from './LandingPageComponents/Hero';
import Features from './LandingPageComponents/Features';
import Testimonials from './LandingPageComponents/Testimonials';
import Footer from './LandingPageComponents/Footer';
// import Hero from './LandingPageComponents/Hero';
// import Hero from './LandingPageComponents/Hero';
import styled from 'styled-components';


const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #001628;
  color: #fff;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;
