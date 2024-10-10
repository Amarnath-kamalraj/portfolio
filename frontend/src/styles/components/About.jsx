import styled from "styled-components";

export const EducationContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 4rem auto 8rem auto;
`;

export const ScrollingBar = styled.div`
  position: absolute;
  top: 0;
  left: 12rem;
  width: 4px;
  height: 100%;
  background: var(--color-primary-700);
  transform-origin: top;
  border-radius: 5rem;
`;

export const EducationLists = styled.ul`
  margin-left: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  row-gap: 3rem;
`;

export const TimelineCardList = styled.li`
  margin: 1rem auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: -1rem;

  & h3 {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 2.2rem;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  column-gap: 0.5rem;

  & p {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const DurationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;

  & p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const ShortDescription = styled.p`
  font-size: 1.45rem;
  font-weight: 400;
  letter-spacing: 0.35px;
  line-height: 1.6;
  text-align: justify;
`;

export const SkillsContainer = styled.div`
  position: relative;
  margin: 1rem auto 8rem auto;
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: repeating-radial-gradient(
    rgba(0, 0, 0, 0.075) 2px,
    #f7f7f7 9px,
    #ffffff 100px
  );
`;

export const Skill = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background: var(--color-primary-900);
  color: #fff;
  padding: 0.6rem 1.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: default;
`;

export const SkillCategoryLists = styled.ul`
  display: flex;
  column-gap: 1.5rem;
  margin-top: 3rem;

  & li {
    text-transform: capitalize;
    padding: 0.7rem 1.6rem;
    border-radius: 5rem;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.35px;
    background: #f1f3f5;
    color: var(--color-grey-500);
    border: 1px solid #dee2e6;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--color-primary-900);
      border: 1px solid transparent;
      color: #fff;
    }

    &.active {
      background-color: var(--color-primary-900);
      border: 1px solid transparent;
      color: #fff;
    }
  }
`;

export const SkillPercentageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6rem;
  row-gap: 3rem;
  margin-top: 3rem;
`;

export const SkillPercentage = styled.div`
  position: relative;
  overflow-x: hidden;
`;
export const SkillName = styled.p`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  font-weight: 500;
`;
export const SkillBarBox = styled.span`
  position: relative;
  width: 100%;
  height: 7px;
  margin: 0 !important;
  display: inline-flex;
  border-radius: 5rem;
  background: rgba(0, 0, 0, 0.1);
`;
export const SkillBar = styled.span`
  width: ${({ width }) => width};
  height: 100%;
  background: var(--color-primary-700);
  border-radius: 5rem;
`;
export const Percentage = styled.span`
  position: absolute;
  top: -3.2rem;
  right: 0;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  font-weight: 500;
`;
