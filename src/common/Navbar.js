import { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom'
import {
  NavBar,
  NavMenuBar,
  Nav,
  NavItems,
  NavToggle,
  StyledNavLink,
} from './Styles'

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  function showSidebar() { setSidebar(!sidebar) };

  return (
    <>
      <NavBar>
        <NavMenuBar to="#">
          <FaIcons.FaBars onClick={showSidebar}/>
        </NavMenuBar>
      </NavBar>
      {sidebar ? 
        <Nav>
          <NavItems onClick={showSidebar}>
            <NavToggle>
              <StyledNavLink to="#">
                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
              </StyledNavLink>
            </NavToggle>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavItems>
        </Nav>
      : null}
    </>
  );
};