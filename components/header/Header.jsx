import { Heading, Stack, Switch, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changetheme } from '../../features/themeSlice'


function Header() {

  const [check, setCheck] = useState(false)

  const dispatch = useDispatch()
  const plan = useSelector(state => state.theme.plan)

  const handleCheck = () => {
    setCheck(!check)
    dispatch(changetheme(check))
    console.log(plan)
  }
  


  return (
    <Stack alignItems='center' justifyContent='center' pt={16} gap={5}>
      <Heading as='h1' textAlign='center' fontFamily='Montserrat, sans-serif' color='hsl(233, 13%, 49%)'>Our Pricing</Heading>
      <Stack direction='row' gap={5} color='hsl(234, 14%, 74%)'>
        <Text>Annually</Text>
        <Switch onChange={handleCheck} isChecked={check} size='lg'/>
        <Text>Monthly</Text>
      </Stack>
    </Stack>
  )
}

export default Header