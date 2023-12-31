'use client'
import { createCart } from '@/resources/createCart'
import { getCart } from '@/resources/getCart'
import { getCollections } from '@/resources/getCollections'
import { getCookie } from '@/utils/getCookie'
import { Box, Button, Divider, Dropdown, IconButton, Menu, MenuButton, MenuItem, Sheet, Stack, Typography } from '@mui/joy'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [collectionArray, setCollectionArray] = useState<{node: {title : string, handle: string}}[]>([])
  useEffect(() => {
    const setCollection = async () => {
      const res = await getCollections()
      setCollectionArray([...res.body.data.collections.edges])
    }
    setCollection()
  }, [])

  const createCartAction = async () => {
    const cart = await getCart()
    console.log(cart)
  }

  

  return (
    <Sheet>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Box>
          <Link
            href={'/'}
          >
            <IconButton><Typography>Logo</Typography></IconButton>
          </Link>
        </Box>
        <Box>
          {
            collectionArray.map((collection: {node: {title : string, handle: string}}) => {
              return (
                <Link 
                  key={Math.round(Math.random() * 100)} 
                  href={{
                    pathname: `/collections/${collection.node.title}`,
                    query: {handle: collection.node.handle}
                  }}>
                  <IconButton sx={{border: 'none'}}>
                    {collection.node.title}
                  </IconButton>
                </Link>
              )
            })
          }
        </Box>
        <Box>
          <Typography>
            <IconButton>Wish</IconButton>
            <Link 
              key={Math.round(Math.random() * 100)} 
              href={{
                pathname: `/cart`
              }}>
              <IconButton onClick={() => createCartAction()}>Cart</IconButton>
            </Link>
          </Typography>
        </Box>
      </Stack>
      <Divider/>
    </Sheet>
  )
}
