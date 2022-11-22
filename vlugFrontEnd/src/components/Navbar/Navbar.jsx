import React from "react";
import { LogInButton } from "../LogInButton";
import { Icon } from '@iconify/react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[70px] border-2 border-black">
      <div className="w-[200px] text-center ">VLUG</div>
      <div className="flex items-center justify-between w-[40%] h-[70px]">
        <ul className="flex items-center w-[35em] justify-around h-[70px]">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> Booking </a>
          </li>
          <li>
            <a href="#"> Profile </a>
          </li>
        </ul>
      </div>
      <LogInButton>
        <Icon icon="ph:user-circle-duotone" color="#8c52ff" width="32"/>
        <span>Iniciar sesión</span>
      </LogInButton>
    </nav>
  );
};
