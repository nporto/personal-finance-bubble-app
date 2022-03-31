import { Heading, Stack } from '@chakra-ui/react'
import { useBubblesCreation } from '../../contexts/BubblesCreationContext'
import ExpenseHistoryBox from './ExpenseHistoryBox'

function ExpenseHistory() {

  const { clickedBubble, getBudgetExpenses } = useBubblesCreation()

  const expensesHistory = getBudgetExpenses(clickedBubble[0].id)

  return (
    <Stack
    display="flex" 
    alignItems="center" 
    flexDirection="column"
    marginRight="1.5rem"
    marginTop="2rem"
    marginBottom="1rem"
    width="30%"
    spacing={8}>
      <Heading as="h2" size="xl" color="black">History</Heading>
      <Stack spacing={4} maxH="80%" width="100%" overflow="auto">
        {expensesHistory.map(expense => {
           return (<ExpenseHistoryBox key={expense['id']} date={expense['date']} expenseReason={expense['reason']} expenseCost={expense['cost']}></ExpenseHistoryBox>)
        })}
      </Stack>
    </Stack>
  )
}

export default ExpenseHistory
