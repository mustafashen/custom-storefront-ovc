'use client'
import { AspectRatio, Box, Button, Card, Grid, Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import React from 'react'

export default function Product({product}: any) {
  const img_url = product.node.images.edges[0].node.url

  const addToCart = async () => {
    console.log(product.node.id)
  }
  return (
    <Grid 
      xl={3}
      md={4}
      xs={6}
      gap={5}
      >
      <AspectRatio ratio={2/3}>
        <Stack>
          <Image src={img_url} width={1000} height={1000} alt='a product' 
            style={{
              width: '90%',
              height: '90%',
              borderRadius: '5px'
            }}/>
          <Box sx={{width: '100%', flexGrow: '1', paddingTop: '15px'}}>
            <div
              style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Typography level={'h3'}>{product.node.title}</Typography>
                <Typography>{product.node.description}</Typography>
            </div>
          </Box>
          <Button onClick={() => addToCart()}>Add to cart</Button>
        </Stack>
      </AspectRatio>
    </Grid>
  )
}
