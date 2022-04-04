import { Container, Box, Grid, Stack } from '@chakra-ui/react'
import { useBubblesCreation } from './contexts/BubblesCreationContext'
import Bubble from './components/Bubble'
import BubbleStatisticsModal from './components/BubbleStatisticsModalComponents/BubbleStatisticsModal'
import Form from './Form/Form'
import TotalSpentAmountBar from './components/TotalSpentAmountBar'

function App() {
  const { bubbles, displayStatisticsModal, displayMainBox, getBudgetExpenses } = useBubblesCreation()

  return (
    <Box 
    height={{ base: 'auto', md: 'auto', lg: '100%'}} 
    maxW="100%"
    padding={{ base: '2rem', md: '1rem', lg: '0.8rem' }}
    display="flex"
    alignItems="center"
    justifyContent="center">
      {displayStatisticsModal && <BubbleStatisticsModal />}
      <Box 
      height="100%" 
      width="100%" 
      display={displayMainBox} 
      alignItems="center" 
      flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
        <Stack 
        direction="column" 
        spacing={6} 
        marginBottom={{ base: '0rem', md: '0rem', lg: '4rem' }} 
        marginLeft={{ base: '0rem', md: '0rem', lg: '6rem' }}>
          <TotalSpentAmountBar />
          <Form />
        </Stack>
        <Container 
        height={{base: 'auto', md: 'auto', lg: '100%'}}
        maxW="container.xl" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        marginTop="20px">
          <Grid 
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={10} 
          height={{base: 'auto', md: 'auto', lg: '80%'}}
          width={{ base: 'auto', md: 'auto', lg: '80%'}}>
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