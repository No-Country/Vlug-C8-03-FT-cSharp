import React, { useState } from 'react'
import JASONDATA from '../assets/airportscities.json';
import { Button } from "./Button";
import { DropdownInput } from "./DropdownInput";
import { Formulario, GrupoInput, Input, Label, CheckBox } from "./Formulario";
import SearchComponent from "./SearchComponent"

const Reserva = () => {
  const [datos] = useState(JASONDATA)
  const [valido, setValido] = useState({ 'round-trip': false, 'going': false })

  const validateCheck = (e) => {
    const id = e.target.id;
    const roundTripInput = document.getElementById("round_trip");
    const goingInput = document.getElementById("going");
    const returnTripInput = document.getElementById("return_date");

    if (roundTripInput.checked == false && goingInput.checked == false) {
      setValido({ 'round-trip': false, 'going': false })
    } else if (id === "going") {
      roundTripInput.checked = false;
      returnTripInput.disabled = true
      setValido({ 'round-trip': false, 'going': true })
    } else if (id === "round_trip") {
      goingInput.checked = false;
      returnTripInput.disabled = false
      setValido({ 'round-trip': true, 'going': true })

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
        htmlFor="from"
        tipo="text"
        id="from"
        place="Cali, CLO - Col"
        datos={datos} />

      <SearchComponent
        label="Hasta"
        htmlFor="to"
        tipo="text"
        id="to"
        place="Buenos Aires, BUE - Arg"
        datos={datos} />

      <GrupoInput style={{ opacity: !valido.going ? '.3' : '1' }}>
        <Label htmlFor='salida'>Salida</Label>
        <Input
          htmlFor="salida"
          type="date"
          disabled={!valido.going}
          id="departure_date" />
      </GrupoInput>

      <GrupoInput style={{ opacity: !valido['round-trip'] ? '.3' : '1' }}>
        <Label htmlFor='regreso'>Regreso</Label>
        <Input
          htmlFor="regreso"
          type="date"
          disabled={!valido['round-trip']}
          id="return_date" />
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