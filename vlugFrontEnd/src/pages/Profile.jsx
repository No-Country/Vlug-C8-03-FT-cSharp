import { useState } from 'react'
import { Button } from '../components/Button'
import { Mensaje } from '../components/Formulario'

const Profile = () => {
  const [success, setSuccess] = useState(false)

  function handleLogout() {
  }
  
  return (<>

      <h1>Profile</h1>
      <p> Nombre: </p>
      <p> Email: </p>
      <Button onClick={() => handleLogout()}>
        Cerrar Sesión
      </Button>
      {success && <Mensaje tipo={'exito'}>Log out existoso</Mensaje>}

  </>
  )
}

export default Profile