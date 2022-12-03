import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { GrupoInput, Label, Input, Mensaje } from '../components/Formulario'
import { useAuth } from '../hooks/useAuth.js'

const SignIn = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signin, currentUser } = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      if (!currentUser) {
        setLoading(true)
      }
    }, 500)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signin(emailRef.current.value, passwordRef.current.value)
    } catch (err) {
      console.log(err)
      setError('Error')
    }
  }

  return (
    <>
      <SignInForm onSubmit={handleSubmit} hidden={!loading}>
        <h1>Inicie sesión</h1>
        <GrupoInput>
          <Label>E-mail:</Label>
          <Input type='text' ref={emailRef}></Input>
        </GrupoInput>

        <GrupoInput>
          <Label>Password:</Label>
          <Input type='password' ref={passwordRef}></Input>
        </GrupoInput>

        <Button type="submit">
          Iniciar Sesión
        </Button>

        {error && <Mensaje tipo={'error'}>{error}</Mensaje>}
        {success && <Mensaje tipo={'exito'}>Inicio de sesesión existoso</Mensaje>}

        <p>¿No tiene una cuenta registrada?</p>

        <Link to="/signup">
          Registrate →
        </Link>

      </SignInForm>
    </>)
}

export default SignIn

const SignInForm = styled.form`
  width: max(50%, 400px);
  margin: auto;
  margin-top: 5em;
  padding: 2em;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  > h1 {
    margin: .6em 0
  }

  > p {
    color: gray;
    font-style: italic;
    margin: 1em 0;
  }
  > a {
    color: #8c52ff;
    font-weight: 600;

    &:hover{
      text-decoration-line: underline;
    }
  }
`