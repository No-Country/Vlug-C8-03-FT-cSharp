import { LogInButton } from "../LogInButton";
import { NavBarStyled, Logo, Menu } from "./NavBarStyled";
import { Icon } from '@iconify/react';

export const Navbar = () => {

  return (<>
    <NavBarStyled>
      <Logo>
        <a to="/">VLUG</a>
      </Logo>
      <Menu>
        <li>
          <a to="/ofertas">Ofertas</a>
        </li>
        <li>
          <a to="/estado-de-vuelo">Estado del vuelo</a>
        </li>
        <li>
          <a to="/about">About</a>
        </li>
      </Menu>
      <a to="/signin">
        <LogInButton>
          <Icon icon="ph:user-circle-duotone" color="#8c52ff" width="32" />
          <span>Iniciar sesión</span>
        </LogInButton>
      </a>
    </NavBarStyled>
  </>
  );
};
