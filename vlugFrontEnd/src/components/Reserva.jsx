import React, { useState } from 'react'
import JASONDATA from '../assets/airportscities.json';
import { CheckBox } from "./Flights/styled";
import { Button } from "./Button";
import { DropdownInput } from "./DropdownInput";
import { Formulario, GrupoInput, Input, Label } from "./Formulario";
import SearchComponent from "./SearchComponent"

const Reserva = () => {
  const [datos] = useState(JASONDATA)

  const validateCheck = (e) => {
    const id = e.target.id;
    const roundTripInput = document.getElementById("round_trip");
    const goingInput = document.getElementById("going");
    const returnTripInput = document.getElementById("return_date");
    returnTripInput.setAttribute('class', 'inline')

    if (id === "going") {
      roundTripInput.checked = false;
      returnTripInput.setAttribute('class', 'hidden')
    } else if (id === "round_trip") {
      goingInput.checked = false;
      if (returnTripInput.classList.value !== 'block') {
        returnTripInput.setAttribute('class', 'inline')
      }
    }
  };

  const search = e => {
    e.preventDefault()
  }
  return (<>
    <div style={{ 'display': 'flex' }}>
      <CheckBox>
        <input
          type="checkbox"
          name="round_trip"
          id="round_trip"
          onChange={(e) => validateCheck(e)} />
        <label htmlFor="round_trip"><span></span>Ida y vuelta</label>
      </CheckBox>
      <CheckBox>
        <input
          type="checkbox"
          name="going"
          id="going"
          onChange={(e) => validateCheck(e)} />
        <label htmlFor="going"><span></span>Solo ida</label>
      </CheckBox>
    </div>
    <Formulario>
      <SearchComponent
        label="Desde"
        htmlFor="desde"
        tipo="text"
        id="desde"
        place="Cali, CLO - Col"
        datos={datos} />

      <SearchComponent
        label="Hasta"
        htmlFor="hasta"
        tipo="text"
        id="hasta"
        place="Buenos Aires, BUE - Arg"
        datos={datos} />

      <GrupoInput>
        <Label htmlFor='salida'>Salida</Label>
        <Input
          htmlFor="salida"
          type="date"
          id="salida" />
      </GrupoInput>
      
      <GrupoInput>
        <Label htmlFor='regreso'>Regreso</Label>
        <Input
          htmlFor="regreso"
          type="date"
          id="regreso" />
      </GrupoInput>

      <GrupoInput>
        <p>Pasajeros</p>
        <DropdownInput>
          <select name="passengers_amount" id="passengers_amount">
            <option value="1">1 Pasajero</option>
            <option value="2">2 Pasajero/s</option>
            <option value="3">3 Pasajero/s</option>
            <option value="4">4 Pasajero/s</option>
            <option value="5">5 Pasajero/s</option>
          </select>
        </DropdownInput>
      </GrupoInput>
    </Formulario>
    <Button onClick={e => search(e)} style={{ "marginLeft": "auto" }} type="submit">
      <span>Buscar vuelos</span>
    </Button>
  </>)
}

export default Reserva