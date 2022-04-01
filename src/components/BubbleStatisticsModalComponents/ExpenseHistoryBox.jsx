import { Box, Text, Stack, Button } from '@chakra-ui/react'
import { useBubblesCreation } from '../../contexts/BubblesCreationContext'
import { DeleteIcon } from '@chakra-ui/icons'

function ExpenseHistoryBox(props) {

      const { handleDeleteExpenseClick } = useBubblesCreation()

  return (
      <Stack 
      display="flex" 
      direction="row"
      alignItems="center" 
      width="90%"
      justifyContent="space-between"
      paddingRight={{ base: '0rem', md: '0rem', lg: '2rem' }} 
      paddingTop={{ base: '0rem', md: '0rem', lg: '1.5rem' }}>
            <Box maxWidth="60%">
                  <Text fontSize="xl" fontWeight="bold">{props.expenseReason}</Text>
                  <Text fontSize="xl">{props.expenseCost}</Text>
            </Box>
            <Stack flexDirection="column" spacing={0.1}>
                  <Text align="right" fontSize="xl" fontWeight="bold">{props.date}</Text>
                  <Button colorScheme="whatsapp" data-id={props.id} onClick={handleDeleteExpenseClick}>Delete<DeleteIcon marginLeft="0.3rem" /></Button>
            </Stack>
      </Stack>
  )
}

export default ExpenseHistoryBox

//<Button data-id={props.id} onClick={handleDeleteExpenseClick}>Delete<DeleteIcon marginLeft="0.3rem" /></Button>