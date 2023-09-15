import { getCollections } from '@/resources/getCollections'
import { Box, Divider, Dropdown, IconButton, Menu, MenuButton, MenuItem, Sheet, Stack, Typography } from '@mui/joy'
import React from 'react'

export default async function Navbar() {
  const res = await getCollections()
  const collections = res.body.data.collections.edges

  return (
    <Sheet>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Box>
          <Typography>Logo</Typography>
        </Box>
        <Box>
          {
            collections.map((collection: {node: {title : string}}) => {
              return (
                <Dropdown key={Math.round(Math.random() * 100)}>
                  <MenuButton sx={{border: 'none'}}>
                    {collection.node.title}
                  </MenuButton>
                  {/* <Menu>
                    <MenuItem></MenuItem>
                    …
                  </Menu> */}
                </Dropdown>
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
