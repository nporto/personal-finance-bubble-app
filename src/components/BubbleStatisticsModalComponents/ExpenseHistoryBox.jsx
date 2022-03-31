import { Box, Text } from '@chakra-ui/react'

function ExpenseHistoryBox(props) {

  return (
      <Box display="flex" justifyContent="space-between" paddingRight={2} paddingTop={1.5}>
            <Box>
                  <Text fontSize="2xl" fontWeight="bold">{props.expenseReason}</Text>
                  <Text fontSize="xl">{props.expenseCost}</Text>
            </Box>
            <Box>
                  <Text align="right" fontSize="xl" fontWeight="bold">{props.date}</Text>
            </Box>
      </Box>
  )
}

export default ExpenseHistoryBox