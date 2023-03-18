import React from 'react';
import styled from 'styled-components';
import { AiFillMessage, AiFillHeart, AiFillCamera, AiFillCopy } from 'react-icons/ai'; // Import icons from react-icons

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  background: linear-gradient(120deg, #516395 0%, #02203C 100%); // Add a background gradient
  color: #ffffff;
`;

const FeaturesTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 2rem;
  margin: 1rem;
  background-color: #02203C;
  border-radius: 10px;
  border: 1px solid #516395; // Add a border
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Add a drop-shadow effect
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Features = () => {
  const featureData = [
    {
        icon: <AiFillMessage />,
        title: 'Engaging Conversation Starters',
        description: 'Spark genuine interest with conversation starters crafted to match your date\'s personality and passions.',
      },
      {
        icon: <AiFillHeart />,
        title: 'Adaptive Emotional Tone',
        description: 'Convey your intent by tailoring messages with emotional tones like witty, flirty, cheerful, playful, or sarcastic.',
      },
      {
        icon: <AiFillCamera />,
        title: 'Smart Screenshot Assistance',
        description: 'Snap and upload a screenshot of your chat, and let the AI guide you with the most suitable response.',
      },
      {
        icon: <AiFillCopy />,
        title: 'Witty Replies on Demand',
        description: 'Paste any message and instantly receive a clever, tone-adapted response that keeps the conversation flowing.',
      }
  ];


return (
    <FeaturesContainer>
        <FeaturesTitle>Features</FeaturesTitle>
        <FeaturesList>
            {featureData.map((feature, index) => (
                <FeatureCard key={index}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
            ))}
        </FeaturesList>
    </FeaturesContainer>
);
};
export default Features;
