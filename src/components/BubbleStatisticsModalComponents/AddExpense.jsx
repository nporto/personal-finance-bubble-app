import { Box, Heading, Button, Stack, Input } from '@chakra-ui/react'
import { useBubblesCreation } from '../../contexts/BubblesCreationContext'

function AddExpense() {

      const { handleExpenseReasonChange, handleExpenseCostChange, clickedBubbleSpentAmount, expenseCost, expenseReason, handleAddExpenseFormSubmit } = useBubblesCreation()

  return (
      <Stack 
      width={{ base: '100%', md: '100%', lg: '45%' }} 
      spacing={6} 
      display="flex" 
      justifyContent="center" 
      alignItems="center">
            <Heading size="xl">Add expense</Heading>
            <Box width="70%">
                  <Heading size="lg">Expense reason</Heading>
                  <Input
                  value={expenseReason}
                  onChange={handleExpenseReasonChange}
                  type="text" 
                  variant="flushed"
                  placeholder="Example: ..."
                  _placeholder={{ opacity: 1, color: 'gray.500' }}
                  borderColor="gray.600"
                  color="black"
                  fontSize="xl"
                  width="100%">
                  </Input>
            </Box>
            <Box width="70%">
                  <Heading size="lg">Expense cost</Heading>
                  <Input
                  value={expenseCost}
                  onChange={handleExpenseCostChange}
                  type="number" 
                  variant="flushed"
                  placeholder="Example: 500"
                  _placeholder={{ opacity: 1, color: 'gray.500' }}
                  borderColor="gray.600"
                  color="black"
                  fontSize="xl">
                  </Input>
            </Box>
            <Button 
            onClick={handleAddExpenseFormSubmit}
            type="submit" 
            backgroundColor="green.200" 
            _hover="backgroundColor='green.300'" 
            fontSize="xl">
            Submit
            </Button>
      </Stack>
  )
}

export default AddExpense