import styled, { css } from "styled-components";

export const LogInButton = styled.button`
  background-color: transparent;
  align-items: center;
  border: 3px solid #8c52ff;
  border-radius: 12px;
  box-sizing: border-box;
  color: #8c52ff;
  cursor: pointer;
  display: flex;
  /* flex-direction: column; */
  font-family: "Codec cold",sans-serif;
  font-size: 1em;
  font-weight: 400;
  height: 48px;
  justify-content: center;
  letter-spacing: .4px;
  max-width: 100%;
  padding-left: .5em;
  padding-right: .5em;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  > span {
    padding: 0 .5em;
  }
`