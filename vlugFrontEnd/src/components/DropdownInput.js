import styled, { css } from "styled-components";

export const DropdownInput = styled.div`
  margin: 0;
  width: 150px;
  overflow: hidden;
  background-color: #fff;
  background: #fff;
  position: relative;
  border-radius: 12px;
  height: 45px;
  line-height: 40px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 2px solid #999;

  > select {
    width: 130%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  > select:focus {
    outline: none;
  }
  &:after {
    top: 50%;
    left: 85%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-top-color: #000000;
    border-width: 5px;
    margin-top: -2px;
    z-index: 100;
  }
`