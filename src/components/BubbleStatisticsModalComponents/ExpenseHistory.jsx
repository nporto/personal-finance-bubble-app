import { Heading, Stack } from '@chakra-ui/react'
import { useBubblesCreation } from '../../contexts/BubblesCreationContext'
import ExpenseHistoryBox from './ExpenseHistoryBox'

function ExpenseHistory() {

  const { clickedBubble, getBudgetExpenses } = useBubblesCreation()

  const expensesHistory = getBudgetExpenses(clickedBubble.id)

  return (
    <Stack
    display="flex" 
    alignItems="center" 
    flexDirection="column"
    marginRight={{ base: '0.6rem', md: '0.6rem', lg: '1rem' }}
    marginLeft={{ base: '0.6rem', md: '0.6rem', lg: '0rem' }}
    marginTop={{ base: '1.5rem', md: '1.5rem', lg: '2rem' }}
    marginBottom={{ base: '1rem', md: '1rem', lg: '1rem' }}
    width={{ base: '100%', md: '100%', lg: '30%' }}
    spacing={6}>
      <Heading as="h2" size="xl" color="black">History</Heading>
      <Stack spacing={4} maxH="80%" width="100%" overflow="auto">
        {expensesHistory.map(expense => {
           return (<ExpenseHistoryBox key={expense['id']} id={expense['id']} date={expense['date']} expenseReason={expense['reason']} expenseCost={expense['cost']}></ExpenseHistoryBox>)
        })}
      </Stack>
    </Stack>
  )
}

export default ExpenseHistory
