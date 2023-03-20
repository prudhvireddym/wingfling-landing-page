import React,{useEffect} from 'react';
import Hero from './LandingPageComponents/Hero';
import Features from './LandingPageComponents/Features';
import Testimonials from './LandingPageComponents/Testimonials';
import Footer from './LandingPageComponents/Footer';
import styled from 'styled-components';
import ReactGA from "react-ga4";


const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #001628;
  color: #fff;
`;

const LandingPage = () => {

  useEffect(() => {
    ReactGA.initialize('G-EGTQPQ5Z6R');

    ReactGA.send('pageview', { dp: '/', dt: 'Landing page visited' });
  }, []);

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
