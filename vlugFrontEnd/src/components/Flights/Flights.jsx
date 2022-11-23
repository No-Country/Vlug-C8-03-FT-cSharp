import React, { useState } from "react";
import { data } from "browserslist";
import TabGroup from "./Tabs";
import { ReserveBox } from "./styled";
import Reserva from "../Reserva"
import AdministrarVuelo from "../AdministrarVuelo";
import EstadoVuelo from "../EstadoVuelo";

const types = ['Reserva', 'Administrar vuelo', 'Estado de vuelo'];

const Flights = () => {
  const [active, setActive] = useState(types[0]);

  return (<>
    <ReserveBox>
      <TabGroup tabs={types} active={active} setActive={setActive}>
        {active === 'Reserva' && <Reserva />}
        {active === 'Administrar vuelo' && <AdministrarVuelo />}
        {active === 'Estado de vuelo' && <EstadoVuelo />}
      </TabGroup>
    </ReserveBox>
  </>
  );
};

export default Flights;
