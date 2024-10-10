import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../MainNavigation/Footer";
import { MainBox } from "../../styles/components/MainNavigation";

const MainSection = () => {
  return (
    <>
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </>
  );
};

export default MainSection;
