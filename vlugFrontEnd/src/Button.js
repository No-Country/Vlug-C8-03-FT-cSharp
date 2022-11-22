import styled, { css } from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: #8c52ff;
  margin: 1em 0;
  border: 0;
  border-radius: 12px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: grid;
  /* flex-direction: column; */
  font-family: "Codec cold",sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  min-height: 48px;
  /* justify-content: center; */
  letter-spacing: .4px;
  line-height: 1;
  width: fit-content;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:active {
  outline: 0;
  transform: translateY(0.125rem);
}

&:hover {
  outline: 0;
}


@media screen and (max-width: 991px) {
    font-size: 15px;
    height: 50px;
  }

> span {
    transition: all 200ms;
    @media screen and (max-width: 991px) {
      line-height: 50px;
    }
  }
`