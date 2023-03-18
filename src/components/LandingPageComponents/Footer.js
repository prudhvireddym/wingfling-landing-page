import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  background-color: #001628;
  color: #ffffff;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopyright = styled.p`
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Footer = () => {
  const links = [
    { text: 'About', href: '/about' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms of Service', href: '/terms' },
    { text: 'Contact Us', href: '/contact' },
  ];

  return (
    <FooterContainer>
      <FooterLinks>
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.text}
          </FooterLink>
        ))}
      </FooterLinks>
      <FooterCopyright>© {new Date().getFullYear()} Wingfling. All rights reserved.</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
