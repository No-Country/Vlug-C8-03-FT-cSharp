import { useState } from 'react'
import { useAuth } from "../hooks/useAuth";
import { Button } from '../components/Button'
import { Mensaje } from '../components/Formulario'

const Profile = () => {
  const [success, setSuccess] = useState(false)
  const { currentUser, signout } = useAuth()

  async function handleLogout() {
    try {
      await signout()
      setSuccess(true)
    } catch (err) {
      console.log(err)
      setError('Failed to log out')
    }
  }
  return (<>

      <h1>Profile</h1>
      <p> Nombre: {currentUser ? currentUser.displayName : ''}</p>
      <p> Email: {currentUser ? currentUser.email : ''}</p>
      <Button onClick={() => handleLogout()}>
        Cerrar Sesión
      </Button>
      {success && <Mensaje tipo={'exito'}>Log out existoso</Mensaje>}

  </>
  )
}

export default Profile