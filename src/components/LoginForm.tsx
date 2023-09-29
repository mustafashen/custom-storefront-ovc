'use client'
import { Button, Card, FormLabel, Input, Typography } from '@mui/joy'
import React, { ChangeEvent, useState } from 'react'
import { loginCustomer } from '@/resources/loginCustomer'
import { createCookie } from '@/utils/createCookie'


export default function LoginForm() {

  const [loginForm, setLoginForm] = useState({email: '', password: ''})
  
  const handleChange = (event: ChangeEvent) => {
    //@ts-ignore  
    setLoginForm({...loginForm, [event.target.name]: event.target.value})
  }

  const handleClick = async () => {
    let newSession = {...loginForm}
    await loginCustomer(newSession)
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
