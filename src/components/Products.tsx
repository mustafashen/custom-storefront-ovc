import { getProducts } from '@/resources/getProducts'
import { AspectRatio, Card, Grid, Stack, Typography } from '@mui/joy'
import React from 'react'
import Product from './Product'

export default async function Products({products} : any) {
  
  return (
    <Grid container columns={12}>
      {
        products.map((product: any) => {
          const id = product.node.id.match(/\d+$/g)[0]
          return (
            <Product product={product} key={id}/>
          )
        })
      }
    </Grid>
  )
}
