import { Container, Box, Grid } from '@chakra-ui/react'
import { useBubblesCreation } from './contexts/BubblesCreationContext'
import Bubble from './components/Bubble'
import BubbleStatisticsModal from './components/BubbleStatisticsModalComponents/BubbleStatisticsModal'
import Form from './Form/Form'
import TotalSpentAmountBar from './components/TotalSpentAmountBar'

function App() {
  const { bubbles, displayStatisticsModal, displayMainBox, getBudgetExpenses } = useBubblesCreation()

  return (
    <Box height="100%" width="100%" >
      {displayStatisticsModal && <BubbleStatisticsModal />}
      <TotalSpentAmountBar />
      <Box height="100%" width="100%" display={displayMainBox} alignItems="center" flexDirection="row">
        <Container maxW="container.sm" maxWidth="500px" marginLeft="6rem">
          <Form />
        </Container>
        <Container height="100%" maxW="container.xl" display="flex" alignItems="center" justifyContent="center">
          <Grid templateColumns='repeat(3, 1fr)' gap={10} height="80%" width="80%">
          {bubbles.map(bubble => {
            const amount = getBudgetExpenses(bubble.id).reduce(
              (total, expense) => parseInt(total) + parseInt(expense.cost),
              0
            )
            return (
              <Bubble 
              id={bubble['id']} 
              height="250px" 
              width="250px" 
              key={bubble['id']} 
              totalBudget={bubble['totalBudget']} 
              name={bubble['name']}
              spentAmount={amount}
              ></Bubble>)
          })}
          </Grid>
        </Container>
        </Box>
    </Box>
  )
}

export default App