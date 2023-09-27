'use client'
import { Box, Button, Card, FormControl, FormLabel, Input, Typography } from '@mui/joy'
import React, { ChangeEvent, useState } from 'react'

export default function SignupForm() {
  const [signupForm, setSignupForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  })

  const handleChange = (event: ChangeEvent) => {
    //@ts-ignore
    setSignupForm({...signupForm, [event.target.name]: event.target.value})
  }

  const handleClick = async () => {
    let newCustomer = {...signupForm}
    console.log(newCustomer)
    const res = await fetch("/api/customer/create", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ newCustomer }),
    })
    const resData = await res.json()
    console.log(resData)
  }

  return (
    <Box>
      <Card>
          <FormLabel>
            <Typography>Email:</Typography>
            <Input  name="email" value={signupForm.email} onChange={(event) => handleChange(event)}/>
          </FormLabel>
          <FormLabel>
            <Typography>First Name:</Typography>
            <Input  name="firstName" value={signupForm.firstName}  onChange={(event) => handleChange(event)}/>
          </FormLabel>
          <FormLabel>
            <Typography>Last Name:</Typography>
            <Input  name="lastName" value={signupForm.lastName}  onChange={(event) => handleChange(event)}/>
          </FormLabel>
          <FormLabel>
            <Typography>Password:</Typography>
            <Input type='password'  name="password" value={signupForm.password}  onChange={(event) => handleChange(event)}/>
          </FormLabel>
          <Button onClick={() => handleClick()}>Signup</Button>
      </Card>
    </Box>
  )
}
