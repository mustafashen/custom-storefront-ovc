import { getCollections } from '@/resources/getCollections'
import { Box, Button, Divider, Dropdown, IconButton, Menu, MenuButton, MenuItem, Sheet, Stack, Typography } from '@mui/joy'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

export default async function Navbar() {
  const res = await getCollections()
  const collections = res.body.data.collections.edges

  console.log(collections)
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
            collections.map((collection: {node: {title : string, handle: string}}) => {
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
            <IconButton>Cart</IconButton>
          </Typography>
        </Box>
      </Stack>
      <Divider/>
    </Sheet>
  )
}
