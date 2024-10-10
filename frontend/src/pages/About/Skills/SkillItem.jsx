import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillStyled } from "../../../styles/components/About";

const Skill = motion(SkillStyled);

const SkillItem = ({ skill, x, y }) => {
  return (
    <Skill
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {skill}
    </Skill>
  );
};

export default SkillItem;
