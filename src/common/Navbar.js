import { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {
  NavBar,
  NavMenuBar,
  Nav,
  NavItems,
  NavToggle,
  NavItem,
  StyledNavLink,
  Close,
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
          <NavItems>
            <NavToggle onClick={showSidebar}>
              <Close to="#">
                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
              </Close>
            </NavToggle>
            <NavItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="buttons">Buttons</StyledNavLink>
            </NavItem>
          </NavItems>
        </Nav>
      : null}
    </>
  );
};
