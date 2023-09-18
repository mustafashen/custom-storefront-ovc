'use client'

import { createCustomer } from '@/resources/createCustomer'
import { Box, Button, Card, FormControl, FormLabel, Input, Typography } from '@mui/joy'
import React, { ChangeEvent, useState } from 'react'

export default function SignupForm() {
  const [signupForm, setSignupForm] = useState({
    email: '',
    name: '',
    lastName: '',
    password: ''
  })

  const handleChange = (event: ChangeEvent) => {
    console.log(handleChange)
    //@ts-ignore
    setSignupForm({...signupForm, [event.target.name]: event.target.value})
  }

  const handleClick = () => {
    let newCustomer = {...signupForm}

    createCustomer(newCustomer)
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
            <Input  name="name" value={signupForm.name}  onChange={(event) => handleChange(event)}/>
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