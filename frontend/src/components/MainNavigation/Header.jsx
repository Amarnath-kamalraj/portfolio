import React from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import {
  HeaderBox,
  NavListBox,
  ToggleSection,
} from "../../styles/components/MainNavigation";

const navItems = [
  {
    id: "1",
    name: "Home",
    to: "/",
  },
  {
    id: "2",
    name: "About",
    to: "/portfolio/about",
  },
  {
    id: "3",
    name: "Project",
    to: "/portfolio/project",
  },
  {
    id: "4",
    name: "Contact",
    to: "/portfolio/contact",
  },
];

const Header = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <HeaderBox isHomeRoute={isHomeRoute}>
      <div>Portfolio</div>
      <NavListBox isHomeRoute={isHomeRoute}>
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={item.to}
          >
            {item.name}
          </NavLink>
        ))}
        <HiOutlineMoon />
      </NavListBox>
    </HeaderBox>
  );
};

export default Header;
