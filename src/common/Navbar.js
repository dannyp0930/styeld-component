import { NavLink } from 'react-router-dom'
import * as N from './Styles'

export function Navbar() {
  return (
    <N.Nav>
      <NavLink to='/'>Home</NavLink>
    </N.Nav>
  );
};
