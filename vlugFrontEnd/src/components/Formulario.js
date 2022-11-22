import styled, { css } from "styled-components";

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
  background: #fff;
  border-radius: 12px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 2px solid #999;

  &:focus {
    border: 3px solid #222;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
  }
  ${props => props.valido === 'true' && css`
    border: 3px solid transparent;
  `}
  ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
  `}
`;