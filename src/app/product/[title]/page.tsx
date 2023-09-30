import { getProduct } from '@/resources/getProduct'
import { Button } from '@mui/joy'
import React from 'react'

export default async function page({searchParams}: any) {

  const res = await getProduct(searchParams.id)
  const product = res.body.data.product
  console.log(product)
  const {title, description, variants} = product
  return (
    <div>
      {title}
      <br></br>
      {description}
      <br/>
      {variants.edges.map((variant: any) => {
        return variant.node.title
      })}
      <Button>Add To Cart</Button>
    </div>
  )
}
