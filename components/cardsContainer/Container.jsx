import { Stack } from '@chakra-ui/react'
import React from 'react'
import PriceCards from './PriceCards'

function Container() {
  return (
    <Stack py={20} alignItems='center' justifyContent='center' direction={{base:'column', sm:'row'}}>
      <PriceCards pro={false} price='19.99' type='Basic' storage='500 GB' users='2' gb='3' active='' />
      <PriceCards pro={true} price='24.99' type='Professional' storage='1 TB' users='5' gb='10' active='' />
      <PriceCards pro={false} price='39.99' type='Master' storage='2 TB' users='10' gb='20' active='' />
    </Stack>
  )
}

export default Container