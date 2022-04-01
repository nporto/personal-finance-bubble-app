import { Heading, Stack } from '@chakra-ui/react'
import { useBubblesCreation } from '../contexts/BubblesCreationContext'

function Bubble(props) {

  const { handleBubbleClick } = useBubblesCreation()

  return (
    <Stack
    onClick={handleBubbleClick}
    data-id={props.id} 
    height={props.height} 
    minWidth={props.width}
    backgroundColor="cyan.400"
    borderRadius="50%" 
    display="flex" 
    alignItems="center" 
    justifyContent="center" 
    flexDirection="column" 
    spacing={4}>
      <Heading data-id={props.id} as="h3" size="lg" color="white">{props.name}</Heading>
      <Heading data-id={props.id} as="h1" size="lg" color="white">{props.spentAmount}/{props.totalBudget}</Heading>
    </Stack>
  )
}

export default Bubble