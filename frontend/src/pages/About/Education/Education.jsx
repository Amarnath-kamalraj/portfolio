import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import MainHeading from "../../../components/Heading/MainHeading";
import EducationItem from "./EducationItem";
import {
  EducationContainer,
  EducationLists,
  ScrollingBar as ScrollingBarStyled,
} from "../../../styles/components/About";

const ScrollingBar = motion(ScrollingBarStyled);

const Education = () => {
  const scrollingBarRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollingBarRef,
    offset: ["start end", "center start"],
  });

  return (
    <div>
      <MainHeading title="Learning Milestones" description="My Education" />
      <EducationContainer ref={scrollingBarRef}>
        <ScrollingBar
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <EducationLists>
          <EducationItem
            qualification="Electronics and Communication Engineering"
            institute="Vellore Institute of Technology"
            location="Chennai"
            duration="2023-Present"
            marks="9.2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia praesentium dolorem non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam officiis praesentium dolorem non labore rerum mollitia praesentium dolorem non."
          />
          <EducationItem
            qualification="Higher Secondary School - XII Standard"
            institute="Kendriya Vidyalaya"
            location="Chennai"
            duration="2022-2023"
            marks="9.6"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia
          praesentium dolorem non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia
          praesentium dolorem non."
          />
          <EducationItem
            qualification="Secondary School - X Standard"
            institute="Kendriya Vidyalaya"
            location="Chennai"
            duration="2020-2021"
            marks="9.4"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia
          praesentium dolorem non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia
          praesentium dolorem non."
          />
          <EducationItem
            qualification="Secondary School - X Standard"
            institute="Kendriya Vidyalaya"
            location="Chennai"
            duration="2020-2021"
            marks="9.4"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia
          praesentium dolorem non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aperiam officiis praesentium dolorem non labore rerum mollitia
          praesentium dolorem non."
          />
        </EducationLists>
      </EducationContainer>
    </div>
  );
};

export default Education;
