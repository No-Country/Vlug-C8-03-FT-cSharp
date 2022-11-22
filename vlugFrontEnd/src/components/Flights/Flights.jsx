import React, { useState } from "react";
import { data } from "browserslist";
import TabGroup from "./Tabs";
import { ReserveBox } from "./styled";

const Flights = () => {

  const types = ['Reserva', 'Administrar vuelo', 'Estado de vuelo'];

  return (<>
    <ReserveBox>
      <TabGroup tabs={types}>
      </TabGroup>
    </ReserveBox>
  </>
  );
};

export default Flights;
