import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  background-color: #001628;
  color: #ffffff;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
`;

const TestimonialsSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;
const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #02203C;
  padding: 1rem;
  border-radius: 10px;
  min-width: 300px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
`;

const TestimonialName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Testimonials = () => {
  const testimonialData = [
    {
      text: 'Wingfling has completely transformed my online dating experience. I feel much more confident and in control of my conversations.',
      name: 'Michael Smith',
    },
    {
      text: 'This app is a game-changer! I never have to worry about what to say next or how to respond to a tricky message.',
      name: 'Emily Johnson',
    },
    {
      text: 'I used to struggle with keeping conversations engaging and fun, but now I have a wingman in my pocket to help me out!',
      name: 'Taylor Lee',
    },
  ];

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <TestimonialsSlider>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialName>{testimonial.name}</TestimonialName>
          </TestimonialCard>
        ))}
      </TestimonialsSlider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
