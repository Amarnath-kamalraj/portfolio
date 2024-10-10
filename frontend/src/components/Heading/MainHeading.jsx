import React from "react";
import { TitleSection, Heading, MainTitle } from "../../styles/UI/Heading";

const MainHeading = ({ title, description }) => {
  return (
    <TitleSection>
      <MainTitle>{title}</MainTitle>
      <Heading>{description}</Heading>
    </TitleSection>
  );
};

export default MainHeading;
