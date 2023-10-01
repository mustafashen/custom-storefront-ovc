import { getCart } from '@/resources/getCart'
import { getCookie } from '@/utils/getCookie'
import { Typography } from '@mui/joy'
import React from 'react'

export default async function page() {
  const resData = await getCart()
  const cartLines = resData.body.data.cart.lines.edges
  console.log(cartLines)
  return (
    <div>
      <Typography typography={'h1'}>Cart</Typography>
      <ul>
        {
          cartLines.map((line: {node: {id: string}}) => {
            return <li key={line.node.id}>{line.node.id}</li>
          })
        }
      </ul>
    </div>
  )
}
