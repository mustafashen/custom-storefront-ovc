import { getProducts } from '@/resources/getProducts'
import { AspectRatio, Card, Grid, Stack, Typography } from '@mui/joy'
import React from 'react'

export default async function Products() {
  
  const res = await getProducts()
  const products = res.body.data.products.edges

  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
      }}>
      {
        products.map((product: any) => {
          return (
            <AspectRatio 
              key={Math.round(Math.random() * 100)} 
              ratio={2/3}   
              sx={{
                bgcolor: 'background.level2',
                borderRadius: 'md',
                gridColumn: 'span 3 / span 3'
              }}>
              <Card>
                <Stack>
                  <Stack>
                    <Typography>{product.node.title}</Typography>
                    <Typography>{product.node.description}</Typography>
                  </Stack>
                </Stack>
              </Card>
            </AspectRatio>
          )
        })
      }
    </Grid>
  )
}
