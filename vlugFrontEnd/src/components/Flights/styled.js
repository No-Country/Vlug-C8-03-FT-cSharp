import styled, { css } from "styled-components";

export const CheckBox = styled.div`
  padding: .5em;
  > input {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }

  > label {
    display: inline-block;
    color: #333;
    cursor: pointer;
    position: relative;
  }
  > label span {
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 20px;
    height: 20px;
    transform-origin: center;
    border: 2px solid #333;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    transition: background-color 150ms 200ms, transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);
  }
  > label span:before {
    content: "";
    width: 0px;
    height: 2px;
    border-radius: 2px;
    background: #333;
    position: absolute;
    transform: rotate(45deg);
    top: 8px;
    left: 5px;
    transition: width 50ms ease 50ms;
    transform-origin: 0% 0%;
  }
  > label span:after {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: #333;
    position: absolute;
    transform: rotate(305deg);
    top: 12px;
    left: 6px;
    transition: width 50ms ease;
    transform-origin: 0% 0%;
  }
  > label:hover span:before {
    width: 5px;
    transition: width 100ms ease;
  }
  > label:hover span:after {
    width: 10px;
    transition: width 150ms ease 100ms;
  }

  > input[type=checkbox] {
    display: none;
  }
  > input[type=checkbox]:checked + label span {
    background-color: #333;
    transform: scale(1.25);
  }
  > input[type=checkbox]:checked + label span:after {
    width: 10px;
    background: #fff;
    transition: width 150ms ease 100ms;
  }
  > input[type=checkbox]:checked + label span:before {
    width: 5px;
    background: #fff;
    transition: width 150ms ease 100ms;
  }
  > input[type=checkbox]:checked + label:hover span {
    background-color: #333;
    transform: scale(1.25);
  }
  > input[type=checkbox]:checked + label:hover span:after {
    width: 10px;
    background: #fff;
    transition: width 150ms ease 100ms;
  }
  > input[type=checkbox]:checked + label:hover span:before {
    width: 5px;
    background: #fff;
    transition: width 150ms ease 100ms;
  }
`

export const ReserveBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  /* padding: 2em; */
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`