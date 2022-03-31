import { Box, Button } from '@chakra-ui/react'
import { useBubblesCreation } from '../../contexts/BubblesCreationContext'
import Bubble from '../Bubble'
import { CloseIcon } from '@chakra-ui/icons'
import ExpenseHistory from './ExpenseHistory'
import AddExpense from './AddExpense'

function BubbleStatisticsModal() {

      const { handleModalCloseClick, clickedBubble, getBudgetExpenses, deployBubble } = useBubblesCreation()

      const amount = getBudgetExpenses(clickedBubble[0].id).reduce(
            (total, expense) => parseInt(total) + parseInt(expense.cost),
            0
          )

  return (
    <Box 
    height={{ base: 'auto', md: 'auto', lg: '80%' }}
    width="90%" 
    backgroundColor="white" 
    borderRadius="0.6rem" 
    display="flex" 
    flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
            <Box position="relative" top="1rem" left="1rem">
                  <Button onClick={handleModalCloseClick}><CloseIcon /></Button>
            </Box>     
            <Box display="flex" flexDirection={{ base: 'column', md: 'column', lg: 'row' }} width="100%">
                  <Box 
                  width={{ base: '100%', md: '100%', lg: '25%' }} 
                  display="flex" 
                  justifyContent="center" 
                  alignItems="center" 
                  marginLeft={{ base: '0', md: '0', lg: '5rem' }}
                  marginBottom={{ base: '1.5rem', md: '1.5rem', lg: '0' }}>
                        <Bubble 
                        height={{ base: '180px', md: '200px', lg: '400px' }} 
                        width={{ base: '60%', md: '60%', lg: '400px' }} 
                        id={clickedBubble[0].id} 
                        spentAmount={amount} 
                        name={clickedBubble[0].name} 
                        totalBudget={clickedBubble[0].totalBudget} />
                  </Box>
                  <AddExpense />
                  <ExpenseHistory />
            </Box>
    </Box>
  )
}

export default BubbleStatisticsModal