import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Label, Input, GrupoInput } from "./Formulario";

export default function SearchComponente({ tipo, label, place, name, datos }) {
  // const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const [searchFlight, setSearchFlight] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [dateFlight, setDateFlight] = useState()
  const [passengers, setPassengers] = useState()
// console.log(searchFlight)
  const inputEl = useRef("")

  const getSearch = () => {
    searchHandler(inputEl.current.value)
    // console.log(dateFlight)
  }
  const searchHandler = (searchFlight) => {
    // console.log(searchFlight)
    setSearchFlight(searchFlight)
    if (searchFlight !== "") {
      const newFlightList = datos.filter((flight) => {
        return Object.values(flight)
          .join(" ")
          .toLowerCase()
          .includes(searchFlight.toLowerCase())
      })
      setResults([...newFlightList])
      // console.log(results)
    }
  }
  return <div>
    <GrupoInput>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={tipo}
        value={searchFlight}
        placeholder={place}
        id={name}
        ref={inputEl}
        onChange={getSearch}
        onBlur={() => setShowResults(true)}
        onFocus={() => setShowResults(false)} />
    </GrupoInput>
    {console.log("results ",results.length)}
    {results.length > 0  && (
      <RenderFlights flights={results} show={showResults} setValue={setSearchFlight}/>
    ) }
  </div>
}

function RenderFlights({ flights, show, setValue }) {
  return (
    <Dropdown style={{display: show && 'none'}}>
      {console.log("flihts ",flights.length)}
      {flights && flights.map((flight) => {
        return <p onMouseDown={()=>setValue(flight.city)} key={flight.id}>{flight.city} - {flight.country}</p>
      })}
    </Dropdown>
  )
}

const Dropdown = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 0.5em;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;