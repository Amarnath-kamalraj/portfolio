import styled, { keyframes } from "styled-components";

const professionRotate = keyframes`
  0%, 20% {
    transform: rotate(0deg);
  }
  25%, 45% {
    transform: rotate(-90deg);
  }
  50%, 70% {
    transform: rotate(-180deg);
  }
  75%, 95% {
    transform: rotate(-270deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const HomeSection = styled.section`
  padding: 2rem 7%;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const ProfileInfoBox = styled.div`
  max-width: 60rem;

  & h3 {
    font-size: 3.2rem;
    line-height: 0.8;
  }

  & h1 {
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.6rem;
  }
`;

export const SocialIconsLists = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 1.8rem;
  margin: 3rem 0;

  & a {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-0.5rem);
    }

    & svg {
      font-size: 1.3rem;
      margin-top: 5px;
    }
  }
`;

export const ProfessionContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 730px;
  height: 730px;
  overflow: hidden;
`;

export const ProfessionBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${professionRotate} 13s ease-out infinite;
  animation-delay: 3.5s;
`;

export const Profession = styled.div`
  position: absolute;
  left: 0;
  transform-origin: 365px;
  transform: ${({ rotateBy, index }) => `rotate(${rotateBy * index}deg)`};
  padding: 13px 0;
  background: #fff;

  & h3 {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export const ProfessionCircle = styled.div`
  width: 72%;
  height: 72%;
  border: 3px solid var(--color-primary-900);
  border-radius: 50%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 365px solid var(--color-primary-900);
  border-right: 365px solid var(--color-primary-900);
  border-bottom: 365px solid var(--color-primary-900);
  border-left: 365px solid transparent;
`;
