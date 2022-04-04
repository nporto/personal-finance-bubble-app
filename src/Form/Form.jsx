import { Input, Button, Stack, Heading} from '@chakra-ui/react'
import { useBubblesCreation } from '../contexts/BubblesCreationContext'

function Form() {
      const { nameInputValue, totalBudgetInputValue, handleNameInputChange, handleTotalBudgetChange, handleFormSubmitClick} = useBubblesCreation()

  return (
      <Stack 
      p={10}
      display="flex"
      spacing={6}
      borderRadius="0.6rem"
      backgroundColor="black"
      color="white">
                  <Heading textAlign="center">Create New Bubble</Heading>
            <Stack spacing={8}>
                  <Input
                  value={nameInputValue}
                  onChange={handleNameInputChange}
                  type="text" 
                  placeholder="Category"
                  _placeholder={{ opacity: 1, color: 'gray.500' }}
                  borderColor="gray.600"
                  color="gray.300"
                  fontSize="lg" />
                  <Input 
                  value={totalBudgetInputValue}
                  onChange={handleTotalBudgetChange} 
                  type="number" 
                  placeholder="Total budget" 
                  _placeholder={{ opacity: 1, color: 'gray.500' }} 
                  borderColor="gray.600" 
                  color="gray.300" 
                  fontSize="lg" />
            </Stack>
            <Button 
            type="submit" 
            onClick={handleFormSubmitClick} 
            backgroundColor="green.200" 
            _hover="backgroundColor='green.300'" 
            fontSize="xl">
            Create Bubble
            </Button>
      </Stack>
  )
}

export default Form