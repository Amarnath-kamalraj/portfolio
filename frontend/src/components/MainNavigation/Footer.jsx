import React from "react";
import { FooterContainer } from "../../styles/components/MainNavigation";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Copyright &#169;2023-{new Date().getFullYear()} AK Portfolio. All Rights
        Reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
