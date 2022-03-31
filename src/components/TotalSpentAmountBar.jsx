import { Box, Heading, Stack, Progress } from '@chakra-ui/react'
import { useBubblesCreation } from '../contexts/BubblesCreationContext'

function TotalSpentAmountBar() {

  const { expenses, displayMainBox, bubbles } = useBubblesCreation()

  const totalSpentAmount = expenses.reduce(
    (total, expense) => parseInt(total) + parseInt(expense.cost),
    0
  )

  const totalAmount = bubbles.reduce(
    (total, bubble) => parseInt(total) + parseInt(bubble.totalBudget),
    0
  )

  function getSpentAmountPercentage() {
    if (((totalSpentAmount/totalAmount)*100) > 0) {
      return (totalSpentAmount/totalAmount)*100
    } else {
      return 0
    }
  }

  const spentAmountPercentage = getSpentAmountPercentage()

  function changeSpentAmountBarColor() {
    let spentAmountBarColor = "red"
    if(spentAmountPercentage < 33) {
      return spentAmountBarColor = "green"
    } else if(spentAmountPercentage < 66) {
      return spentAmountBarColor = "yellow"
    } else {
      return spentAmountBarColor = "red"
    }
  }

  const barColor = changeSpentAmountBarColor()

  return (
    <Box display={displayMainBox} >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Heading fontSize="3xl">Total Spent Amount: {totalSpentAmount}</Heading>
          <Heading fontSize="3xl">Total Amount: {totalAmount}</Heading>
        </Stack>
        <Progress hasStripe isAnimated height="35px" value={spentAmountPercentage} colorScheme={barColor} />
      </Stack>
      
    </Box>
  )
}

export default TotalSpentAmountBar