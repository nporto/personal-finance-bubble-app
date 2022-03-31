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
    <Box position="relative" left="5%" top="10%" height="80%" width="90%" backgroundColor="white" borderRadius="0.6rem" display="flex" flexDirection="row">
            <Box position="relative" top="1rem" left="1rem">
                  <Button onClick={handleModalCloseClick}><CloseIcon /></Button>
            </Box>     
            <Box display="flex" flexDirection="row" width="100%">
                  <Box width="25%" display="flex" justifyContent="center" alignItems="center" marginLeft="5rem">
                        <Bubble height="400px" width="400px" id={clickedBubble[0].id} spentAmount={amount} name={clickedBubble[0].name} totalBudget={clickedBubble[0].totalBudget} />
                  </Box>
                  <AddExpense />
                  <ExpenseHistory />
            </Box>
    </Box>
  )
}

export default BubbleStatisticsModal