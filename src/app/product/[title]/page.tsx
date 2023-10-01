import ProductVariant from '@/components/ProductVariant'
import { getProduct } from '@/resources/getProduct'
import { Button } from '@mui/joy'
import React from 'react'

export default async function page({searchParams}: any) {

  const res = await getProduct(searchParams.id)
  const product = res.body.data.product
  console.log(product.variants.edges)
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
      <ProductVariant variants={product.variants.edges}/>
    </div>
  )
}
