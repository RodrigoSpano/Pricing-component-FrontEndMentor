import { Heading, Stack, Switch, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changetheme } from '../../features/themeSlice'


function Header() {

  const [check, setCheck] = useState(true)

  const dispatch = useDispatch()
  const plan = useSelector(state => state.theme.plan)

  const handleCheck = () => {
    setCheck(!check)
  }
  
  useEffect(() => {
    dispatch(changetheme(check))
    console.log(plan)
  }, [check])

  return (
    <Stack alignItems='center' justifyContent='center' pt={16} gap={5}>
      <Heading as='h1' textAlign='center' fontFamily='Montserrat, sans-serif' color='hsl(233, 13%, 49%)'>Our Pricing</Heading>
      <Stack direction='row' gap={5} color='hsl(234, 14%, 74%)'>
        <Text>Annually</Text>
        <Switch onChange={handleCheck} checked={check}  defaultChecked size='lg'/>
        <Text>Monthly</Text>
      </Stack>
    </Stack>
  )
}

export default Header