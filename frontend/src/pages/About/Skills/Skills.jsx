import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SkillPercentageBox,
  SkillCategoryLists,
  SkillsContainer,
  Skill,
  SkillPercentage,
  SkillName,
  SkillBarBox,
  SkillBar as SkillBarStyled,
  Percentage,
} from "../../../styles/components/About";
import SkillItem from "./SkillItem";
import MainHeading from "../../../components/Heading/MainHeading";
import { Heading } from "../../../styles/UI/Heading";

const SkillBar = motion(SkillBarStyled);

const skills = [
  {
    name: "Node JS",
    x: "10rem",
    y: "-13.5rem",
    category: "development",
    skill_percentage: "100%",
  },
  {
    name: "React JS",
    x: "34rem",
    y: "10rem",
    category: "development",
    skill_percentage: "90%",
  },
  {
    name: "MongoDB",
    x: "-27rem",
    y: "6rem",
    category: "development",
    skill_percentage: "80%",
  },
  {
    name: "MySQL",
    x: "0",
    y: "23.5rem",
    category: "development",
    skill_percentage: "95%",
  },
  {
    name: "HTML",
    x: "-44rem",
    y: "-10rem",
    category: "development",
    skill_percentage: "60%",
  },
  {
    name: "CSS",
    x: "-34rem",
    y: "23.5rem",
    category: "development",
    skill_percentage: "82%",
  },
  {
    name: "Javascript",
    x: "-30rem",
    y: "-24.5rem",
    category: "development",
    skill_percentage: "90%",
  },
  {
    name: "Python",
    x: "25rem",
    y: "-20.5rem",
    category: "development",
    skill_percentage: "30%",
  },
  {
    name: "JAVA",
    x: "58rem",
    y: "-6rem",
    category: "development",
    skill_percentage: "45%",
  },
  {
    name: "Photoshop",
    x: "-15rem",
    y: "-7rem",
    category: "design",
    skill_percentage: "100%",
  },
  {
    name: "Figma",
    x: "28rem",
    y: "25rem",
    category: "design",
    skill_percentage: "50%",
  },
];

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const getSkillCategories = () => {
    return [...new Set(skills.map((skill) => skill.category))];
  };

  const handleSkillCategoryChange = (category) => {
    setActiveCategory(category);
    if (category !== "All Skills") {
      setFilteredSkills(skills.filter((skill) => skill.category === category));
      return;
    }
    setFilteredSkills(skills);
  };

  return (
    <div>
      <Heading fsize="3rem">Skills Overview</Heading>
      <SkillsContainer>
        <Skill>Web</Skill>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill.name} x={skill.x} y={skill.y} />
        ))}
      </SkillsContainer>
      <section>
        <MainHeading title="What I Excel At" description="All Skills" />
        <SkillCategoryLists>
          {["All Skills", ...getSkillCategories()].map((category, index) => (
            <li
              key={index}
              className={category === activeCategory ? "active" : ""}
              onClick={() => handleSkillCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </SkillCategoryLists>
        <SkillPercentageBox>
          {filteredSkills.map((skill, index) => (
            <SkillPercentage key={index}>
              <SkillName>{skill.name}</SkillName>
              <SkillBarBox>
                <SkillBar
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  width={`${skill.skill_percentage}`}
                >
                  <Percentage>{skill.skill_percentage}</Percentage>
                </SkillBar>
              </SkillBarBox>
            </SkillPercentage>
          ))}
          {filteredSkills.map((skill, index) => (
            <SkillPercentage key={index}>
              <SkillName>{skill.name}</SkillName>
              <SkillBarBox>
                <SkillBar
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  width={`${skill.skill_percentage}`}
                >
                  <Percentage>{skill.skill_percentage}</Percentage>
                </SkillBar>
              </SkillBarBox>
            </SkillPercentage>
          ))}
        </SkillPercentageBox>
      </section>
    </div>
  );
};

export default Skills;
