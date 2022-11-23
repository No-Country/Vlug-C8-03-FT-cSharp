import React from 'react'
import { GrupoInput, Input, Label } from './Formulario'

const AdministrarVuelo = () => {
  return (<div style={{display: "grid", gap: "2em", gridTemplateColumns: "repeat(2, 1fr)"}}>
    <GrupoInput>
      <Label htmlFor='nombre-reserva'>Nombre de reservación</Label>
      <Input
        htmlFor="nombre-reserva"
        type="text"
        id="nombre-reserva" />
    </GrupoInput>
    <GrupoInput>
      <Label htmlFor='apellido'>Apellido</Label>
      <Input
        htmlFor="apellido"
        type="text"
        id="apellido" />
    </GrupoInput>
  </div>
  )
}

export default AdministrarVuelo