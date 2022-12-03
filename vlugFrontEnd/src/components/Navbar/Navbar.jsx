import { NavLink } from "react-router-dom";
import { LogInButton } from "../LogInButton";
import { NavBarStyled, Logo, Menu } from "./NavBarStyled";
import { Icon } from '@iconify/react';

export const Navbar = () => {

  return (<>
    <NavBarStyled>
      <Logo>
        <NavLink to="/"
          className={({ isActive }) => isActive ? 'link-active' : ''}>VLUG</NavLink>
      </Logo>
      <Menu>
        <li>
          <NavLink to="/ofertas"
            className={({ isActive }) => isActive ? 'link-active' : ''}>Ofertas</NavLink>
        </li>
        <li>
          <NavLink to="/estado-de-vuelo"
            className={({ isActive }) => isActive ? 'link-active' : ''}>Estado del vuelo</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={({ isActive }) => isActive ? 'link-active' : ''}>About</NavLink>
        </li>
      </Menu>
      <NavLink to="/signin"
        className={({ isActive }) => isActive ? 'link-active' : ''}>
        <LogInButton>
          <Icon icon="ph:user-circle-duotone" color="#8c52ff" width="32" />
          <span>Iniciar sesión</span>
        </LogInButton>
      </NavLink>
    </NavBarStyled>
  </>
  );
};
