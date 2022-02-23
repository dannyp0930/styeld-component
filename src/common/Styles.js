import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  background-color: LightSkyBlue;
  height: 4rem;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const NavMenuBar = styled(NavLink)`
  margin-left: 2rem;
  color: Blue;
  font-size: 2rem;
  background:none;
`;

export const Nav = styled.nav`
  font-family: Maru Buri;
  font-size: 1.5em;
  text-align: center;
  color: blue;
  text-decoration: none;
  background-color: LightSkyBlue;
  width: 10rem;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  transition: 850ms;
`;

export const NavItems = styled.ul`
  width: 100%;
`;

export const NavToggle = styled.li`
  color: blue;
  background-color: LightSkyBlue;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: Blue;
  text-decoration: none;
`;