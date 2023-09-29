'use client'
import { createAddress } from '@/resources/createAddress'
import { getCookie } from '@/utils/getCookie'
import { Button, Card, FormLabel, Input, Typography } from '@mui/joy'
import React, { ChangeEvent, useState } from 'react'


export default function AddressForm() {
const [addressForm, setAddressForm] = useState({
    address1: "",
    address2: "",
    city: "",
    company: "",
    country: "",
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    zip: ""
  })

  const handleChange = (event: ChangeEvent) => {
    //@ts-ignore
    setAddressForm({...addressForm, [event.target.name]: event.target.value})
  }

  const handleClick = async () => {
    const newAddress = {...addressForm}
    const token = await getCookie('accessToken') 

    if (token) {
      const res = await createAddress(newAddress, token.value)
      console.log(res)
    }
  }

  return (
    <Card>
    <FormLabel>
      <Typography>Address 1:</Typography>
      <Input name='address1' value={addressForm.address1} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>Address 2:</Typography>
      <Input name='address2' value={addressForm.address2} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>city:</Typography>
      <Input name='city' value={addressForm.city} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>company:</Typography>
      <Input name='company' value={addressForm.company} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>country:</Typography>
      <Input name='country' value={addressForm.country} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>firstName:</Typography>
      <Input name='firstName' value={addressForm.firstName} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>lastName:</Typography>
      <Input name='lastName' value={addressForm.lastName} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>phone:</Typography>
      <Input name='phone' value={addressForm.phone} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>province:</Typography>
      <Input name='province' value={addressForm.province} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <FormLabel>
      <Typography>zip:</Typography>
      <Input name='zip' value={addressForm.zip} onChange={(event) => handleChange(event)}/>
    </FormLabel>
    <Button onClick={() => handleClick()}>Send</Button>
  </Card>
  )
}
