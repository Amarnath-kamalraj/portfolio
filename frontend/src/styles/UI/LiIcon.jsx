import styled, { css } from "styled-components";

export const LiIconFigure = styled.figure`
  position: absolute;
  top: -2rem;
  left: -9.15rem;
  stroke: #fff;
`;

export const LiIconCircle = styled.circle`
  fill: ${({ fill }) => fill};
  ${({ strokeWidth }) =>
    strokeWidth &&
    css`
      stroke-width: ${strokeWidth};
    `}
  ${({ stroke }) =>
    stroke &&
    css`
      stroke: ${stroke};
    `}
`;
