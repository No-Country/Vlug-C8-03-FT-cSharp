import styled, { css } from "styled-components";

const colores = {
  error: "#bb2929",
  exito: "#1ed12d"
}

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 600px){
    grid-template-columns: 1fr ;
  }
`;
export const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
  font-weight: 700;
  display: grid;
  > p {
    padding: 10px;
    padding-bottom: 0;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  padding: 10px;
  padding-bottom: 0;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 1em;
  font-weight: 500;
  background: #fff;
  border-radius: 12px;
  height: 45px;
  line-height: 45px;
  padding: 0 0px 0 10px;
  transition: .3s ease all;
  border: 2px solid #999;

  &:focus {
    border: 3px solid #222;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
  }
  ${props => props.valido === 'true' && css`
    border: 2px solid #999;
  `}
  ${props => props.valido === 'false' && css`
    border: 3px solid #cfcfd1;
  `}
`;

export const LeyendaError = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  margin-top: 10px;
  color: ${colores.error};
  display: none;

  ${props => props.valido === 'true' && css`
    display: none;
  `}
  ${props => props.valido === 'false' && css`
    display: block;
  `}
`;

export const Mensaje = styled.div`
  height: 45px;
  line-height: 45px;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  color: white;
  font-weight: 500;
  p {
    margin: 0;
  } 
  b {
    margin-left: 10px;
  }
  ${props => props.tipo === 'exito' && css`
    background: ${colores.exito};
  `}
  ${props => props.tipo === 'error' && css`
    background: ${colores.error};
  `}
  @media (max-width: 600px){
    height: 90px;
    grid-column: span 1;
  }
`;

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