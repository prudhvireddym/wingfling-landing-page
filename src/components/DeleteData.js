import React,{useEffect} from 'react';
import styled from 'styled-components';
import ReactGA from "react-ga4";


const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, #2E3192 0%, #1BFFFF 100%);
`;

const InstructionsCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
`;

const InstructionsTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const InstructionsText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const DeleteInstructions = () => {

  useEffect(() => {
    ReactGA.initialize('G-EGTQPQ5Z6R');

    ReactGA.send('pageview', { dp: '/delete', dt: 'Delete page visited' });
  }, []);

  return (
    <InstructionsContainer>
      <InstructionsCard>
        <InstructionsTitle>Instructions to Delete Your Data</InstructionsTitle>
        <InstructionsText>
          1. Login to the app.<br />
          2. Go to the settings page.<br />
          3. Click on Deactivate Account at the bottom.<br />
          4. Click Yes when asked for confirmation.<br />
          5. All your data will be deleted and you will be logged out.<br />
        </InstructionsText>
      </InstructionsCard>
    </InstructionsContainer>
  );
};

export default DeleteInstructions;
