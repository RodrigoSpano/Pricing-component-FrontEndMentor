import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const PriceCards = (props) => {

  let gradient = 'linear-gradient(342deg, hsl(237, 63%, 64%) 59%, hsl(236, 72%, 79%) 100%)'

  let background = props.pro ? gradient : 'hsl(240, 78%, 98%)'
  let color = props.pro ? 'hsl(240, 78%, 98%)' : 'hsl(232, 13%, 33%)'
  let btnColor = props.pro ? 'hsl(237, 63%, 64%)' : 'hsl(240, 78%, 98%)'
  let btnBg = props.pro ? 'hsl(240, 78%, 98%)' : gradient

  return (
    <Stack bg={background} w={{base:'xs',sm:'sm'}} h='lg' borderRadius={10} p={10} gap={5}>
      <Flex direction='column' alignItems='center'>
        <Heading as='h2' fontSize='16px' color={color} >{props.type}</Heading>
        <Flex direction='row' alignItems='center' gap={2}>
          <Text fontSize='30px' color={color}>$</Text>
          <Text color={color} fontWeight='bold' fontSize='6xl'>{props.price}</Text>
        </Flex>
      </Flex>

      <Flex direction='column' alignItems='center' color={color} fontWeight='bold' >
        <Text py={5} w={{base:'250px',sm:'xs'}} textAlign='center' borderTop='1px solid white' >{props.storage} Storage</Text>
        <Text py={5} w={{base:'250px',sm:'xs'}} textAlign='center' borderTop='1px solid white' >{props.users} Users Allowed</Text>
        <Text w={{base:'250px',sm:'xs'}} textAlign='center' borderTop='1px solid white' borderBottom='1px solid white' py='5' >Send up to {props.gb} GB</Text>
      </Flex>

      <Button type='button' textTransform='uppercase' bg={btnBg} color={btnColor} fontSize='14px' _hover={props.pro ? {bgColor: 'transparent', color:'white', border:'1px solid white'} : {bg:'transparent', color: 'hsl(237, 63%, 64%)', border:'1px solid gray'}}>learn more</Button>
    </Stack>
  )
}

export default PriceCards