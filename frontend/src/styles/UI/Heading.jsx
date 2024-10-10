import styled from "styled-components";

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 2rem 0;
`;

export const MainTitle = styled.h3`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--color-primary-600);
  letter-spacing: 1px;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: ${({ fsize }) => (fsize ? `${fsize}` : "3.5rem")};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : "center")};
  text-transform: capitalize;
  color: var(--color-grey-600);
`;
