'use client'
import { cartLinesAdd } from '@/resources/cartLineAdd'
import { createCart } from '@/resources/createCart'
import { getCookie } from '@/utils/getCookie'
import { Button } from '@mui/joy'
import { redirect } from 'next/navigation'
import React from 'react'

export default function ProductVariant({variants}: {variants: {node: {id: string}}[]}) {
  
  const handleAddCart = async () => {
    
    const accessToken = await getCookie('accessToken')
    if (!accessToken) {
      redirect('/login')
    }
    const lineID = variants[0].node.id

    let cookie = await getCookie('cartID')
    let cartID = cookie?.value

    if (!cartID) {
      await createCart(accessToken.value)
      cookie = await getCookie('cartID')
      cartID = cookie?.value
    }

    if (cartID) {
      const res = await cartLinesAdd(cartID, [{merchandiseId: lineID, quantity: 1}])
      console.log(res)
    }
    
  }

  return (
    <div>
      <Button onClick={() => handleAddCart()}>Add To Cart</Button>
    </div>
  )
}
