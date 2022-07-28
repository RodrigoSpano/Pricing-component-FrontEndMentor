import { Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import PriceCards from './PriceCards'

function Container() {

  const plan = useSelector(state => state.theme.plan)

  return (
    <Stack py={20} alignItems='center' justifyContent='center' direction={{base:'column', sm:'row'}}>
      <PriceCards pro={false} price={!plan ? '19.99' : '199.99'} type='Basic' storage='500 GB' users='2' gb='3' />
      <PriceCards pro={true} price={!plan ? '24.99' : '249.99'} type='Professional' storage='1 TB' users='5' gb='10' />
      <PriceCards pro={false} price={!plan ? '39.99' : '399.99'} type='Master' storage='2 TB' users='10' gb='20' />
    </Stack>
  )
}

export default Container