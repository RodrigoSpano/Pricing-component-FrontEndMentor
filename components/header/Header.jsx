import { Heading, Stack, Switch, Text } from '@chakra-ui/react'


function Header() {

  return (
    <Stack alignItems='center' justifyContent='center' pt={16} gap={5}>
      <Heading as='h1' textAlign='center' fontFamily='Montserrat, sans-serif' color='hsl(233, 13%, 49%)'>Our Pricing</Heading>
      <Stack direction='row' gap={5} color='hsl(234, 14%, 74%)'>
        <Text>Annually</Text>
        <Switch defaultChecked size='lg'/>
        <Text>Monthly</Text>
      </Stack>
    </Stack>
  )
}

export default Header