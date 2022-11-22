import { useState } from "react";
import styled, { css } from "styled-components";
import Reserva from "../Reserva"

export default function TabGroup({tabs, children}) {
  const [active, setActive] = useState(tabs[0]);
  return (
    <>
      <ButtonGroup>
        {tabs.map(tab => (
          <Tab
            key={tab}
            active={active === tab}
            onClick={() => setActive(tab)}>
            {tab}
          </Tab>
        ))}
      </ButtonGroup>
      <div style={{padding: "2em"}}>
        {active === 'Reserva' && <Reserva/>}
      </div>
    </>
  );
}

const Tab = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 60px;
  width: 100%;
  background-color: #8c52ff;
  color: white;
  cursor: pointer;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    background: white;
    color: black
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;
