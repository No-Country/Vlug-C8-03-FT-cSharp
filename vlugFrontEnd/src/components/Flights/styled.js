import styled, { css } from "styled-components";

export const Title = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 1em auto;

  > h1 {
    font-size: 3em;
    color: #8c52ff;
    font-weight: 700;
    text-align: center;
  }
`
export const ReserveBox = styled.div`
  width: 100%;
  border-radius: 25px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`