import styled, { css } from "styled-components";

export const HeaderBox = styled.header`
  display: grid;
  grid-template-columns: 2fr 8fr;
  padding: 1.5rem 7%;
  ${({ isHomeRoute }) =>
    isHomeRoute
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: transparent;
          z-index: 100000;
        `
      : css`
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100000;
          background: #fff;
          box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
        `}
`;

export const NavListBox = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 6rem;

  & a {
    position: relative;
    font-size: 1.45rem;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.35px;
    color: ${({ isHomeRoute }) =>
      isHomeRoute ? "#fff" : "var(--color-grey-500)"};
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;
    color: ${({ isHomeRoute }) =>
      isHomeRoute ? "#fff" : "var(--color-grey-500)"};
  }
`;

export const ToggleSection = styled.div`
  & svg {
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const MainBox = styled.section`
  padding: 1.25rem 7% 0 7%;
`;

export const FooterContainer = styled.section`
  padding: 2.2rem 1.2rem;
  margin-top: 6rem;
  background: var(--color-grey-800);
  color: var(--color-grey-300);

  & p {
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: #ccc;
  }
`;
