import { Box, Text, Stack } from '@chakra-ui/react'

function ExpenseHistoryBox(props) {

  return (
      <Stack 
      display="flex" 
      direction="row"
      alignItems="center" 
      justifyContent="space-between"
      maxWidth="100%" 
      paddingRight={{ base: '0rem', md: '0rem', lg: '2rem' }} 
      paddingTop={{ base: '0rem', md: '0rem', lg: '1.5rem' }}>
            <Box maxWidth="60%">
                  <Text fontSize="xl" fontWeight="bold">{props.expenseReason}</Text>
                  <Text fontSize="xl">{props.expenseCost}</Text>
            </Box>
            <Box>
                  <Text align="right" fontSize="xl" fontWeight="bold">{props.date}</Text>
            </Box>
      </Stack>
  )
}

export default ExpenseHistoryBox