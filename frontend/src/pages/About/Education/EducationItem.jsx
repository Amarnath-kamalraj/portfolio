import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  EducationDetails,
  TimelineCardList as TimelineCardListStyled,
  LocationInfo,
  DurationInfo,
  ShortDescription,
} from "../../../styles/components/About";
import LiIcon from "../../../components/LiIcon/LiIcon";

const TimelineCardList = motion(TimelineCardListStyled);

const EducationItem = ({
  qualification,
  institute,
  location,
  duration,
  marks,
  description = "",
}) => {
  const pathCircleRef = useRef(null);

  return (
    <TimelineCardList ref={pathCircleRef}>
      <LiIcon pathCircleRef={pathCircleRef} />
      <EducationDetails>
        <h3>{qualification}</h3>
        <LocationInfo>
          <p>{institute},</p>
          <p>{location}</p>
        </LocationInfo>
        <DurationInfo>
          <p>{duration}</p>
          <p>{marks}/10</p>
        </DurationInfo>
        <ShortDescription>{description}</ShortDescription>
      </EducationDetails>
    </TimelineCardList>
  );
};

export default EducationItem;
