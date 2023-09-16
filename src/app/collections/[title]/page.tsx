import Products from '@/components/Products'
import { getProducts } from '@/resources/getProducts'
import { Typography } from '@mui/joy'
import React from 'react'

export default async function page({searchParams} : any) {

  const res = await getProducts(searchParams.handle)
  const products = res.body.data.collection.products.edges

  return (
    <div>
      <Typography level={'h1'}>{searchParams.handle}</Typography>
      <Products products={products}/>
    </div>
  )
}
