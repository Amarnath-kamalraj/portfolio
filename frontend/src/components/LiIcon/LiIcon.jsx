import React from "react";
import { motion, useScroll } from "framer-motion";
import {
  LiIconCircle as LiIconCircleStyled,
  LiIconFigure,
} from "../../styles/UI/LiIcon";

const LiIconCircle = motion(LiIconCircleStyled);

const LiIcon = ({ pathCircleRef }) => {
  const { scrollYProgress } = useScroll({
    target: pathCircleRef,
    offset: ["center end", "center center"],
  });

  return (
    <LiIconFigure>
      <svg
        style={{ transform: "rotate(90deg)" }}
        width="50"
        height="50"
        viewBox="0 0 100 100"
      >
        <LiIconCircleStyled
          cx="75"
          cy="50"
          r="20"
          stroke="var(--color-primary-700)"
          strokeWidth="1rem"
          fill="none"
        />
        <LiIconCircle
          cx="75"
          cy="50"
          r="19"
          strokeWidth="0.1rem"
          fill="#ffffff"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <LiIconCircleStyled
          cx="75"
          cy="50"
          r="10"
          fill="var(--color-primary-700)"
        />
      </svg>
    </LiIconFigure>
  );
};

export default LiIcon;
