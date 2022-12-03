import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { GrupoInput, Label, Input, Mensaje } from '../components/Formulario'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth.js'

const SignUp = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup, currentUser } = useAuth()

  const userRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passConfirmRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      if (!currentUser) {
        setLoading(true)
      }
    }, 500)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    const userName = userRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passConfirm = passConfirmRef.current.value

    if (password !== passConfirm) {
      return setError('Passwords do not match')
    }
    if (password.length < 6) {
      return setError('Password should be at least 6 characters')
    }
    try {
      setError('')
      await signup(userName, email, password)
      setLoading(true)
      setSuccess(true)
    } catch (err) {
      console.log(err)
      setError('Fail to create an account')
    }
    setLoading(false)
  }

  return (

    <SignUpForm onSubmit={handleSubmit} hidden={!loading}>
      <h1>Registrate</h1>
      <GrupoInput>
        <Label>Nombre de usuario:</Label>
        <Input type='text' ref={userRef}></Input>
      </GrupoInput>

      <GrupoInput>
        <Label>E-mail:</Label>
        <Input type='text' ref={emailRef}></Input>
      </GrupoInput>

      <GrupoInput>
        <Label>Contraseña:</Label>
        <Input type='password' ref={passwordRef}></Input>
      </GrupoInput>

      <GrupoInput>
        <Label>Confirme contraseña:</Label>
        <Input type='password' ref={passConfirmRef}></Input>
      </GrupoInput>

      <Button type="submit">
        Registrase
      </Button>

      {error && <Mensaje tipo={'error'}>{error}</Mensaje>}
    </SignUpForm>
  )
}

export default SignUp

const SignUpForm = styled.form`
  width: max(50%, 400px);
  margin: auto;
  margin-top: 5em;
  padding: 2em;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  > h1 {
    margin: .6em 0
  }
`