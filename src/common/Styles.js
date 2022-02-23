import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  background-color: #6667AB;
  height: 4rem;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const NavMenuBar = styled(NavLink)`
  margin-left: 2rem;
  color: #AB9E67;
  font-size: 2rem;
  background:none;
`;

export const Nav = styled.nav`
  font-family: Maru Buri;
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
  background-color: #6667AB;
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
  padding-left: 0;
`;

export const NavToggle = styled.li`
  background-color: #6667AB;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
  padding-left:0;
`;

export const Close = styled(NavLink)`
  color: #AB9E67;
  text-decoration: none;

`;

export const StyledNavLink = styled(NavLink)`
  color: #AB9E67;
  text-decoration: none;

  &.active {
		color: #2F305E;
		font-weight: bold;
	}
`;