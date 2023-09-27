import { Button, Card, FormLabel, Input, TextField, Typography } from '@mui/joy'
import React, { ChangeEvent, useState } from 'react'

export default function LoginForm() {
  const [loginForm, setLoginForm] = useState({email: '', password: ''})
  
  const handleChange = (event: ChangeEvent) => {
    //@ts-ignore
    setLoginForm({...loginForm, [event.target.name]: event.target.value})
  }

  const handleClick = async () => {
    let newSession = {...loginForm}

    const res = await fetch('/api/customer/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ newSession })
    })

    const resData = await res.json()
    console.log(resData)
  }
  
  return (
    <Card>
      <FormLabel>
        <Typography>Email:</Typography>
        <Input name='email' value={loginForm.email} onChange={(event) => handleChange(event)}/>
      </FormLabel>
      <FormLabel>
        <Typography>Password:</Typography>
        <Input name='password' type='password' value={loginForm.password} onChange={(event) => handleChange(event)}/>
      </FormLabel>
      <Button onClick={() => handleClick()}>Send</Button>
    </Card>
  )
}
