import styled, { css } from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  ` 

export const Logo = styled.div`
  width: 200px;
  color: #8c52ff;
  font-size: 2em;
  font-weight: 700;
  display: grid;
  align-items: center;
  text-align: center;
  padding: 0 1em;
`

export const Menu = styled.ul`
  display: flex;
  width: 40%;
  margin-left: auto;

  > li {
  list-style: none;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 100%;
  }
`