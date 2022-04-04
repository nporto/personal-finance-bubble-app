import React, { useContext, useState, createContext } from 'react'
import  { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../Hooks/useLocalStorage'

const BubblesCreationContext = createContext()

export function useBubblesCreation() {
     return useContext(BubblesCreationContext)
}

export const BubblesCreationProvider = ({ children }) => {

//Bubbles Creation

      const [nameInputValue, setNameInputValue] = useState("");
      const [totalBudgetInputValue, setTotalBudgetInputValue] = useState("");
      const [bubbles, setBubbles] = useLocalStorage("bubbles", []);

      const handleNameInputChange = (event) => {
            setNameInputValue(event.target.value) 
      }

      const handleTotalBudgetChange = (event) => {
            setTotalBudgetInputValue(event.target.value)
      }

      function bubbleCreationHeight(totalBudget) {
            if (totalBudget < 5000) {
                  return "150px"
            } else if (totalBudget < 10000) {
                  return "175px"
            } else if (totalBudget < 15000) {
                  return "200px"
            } else if (totalBudget < 20000) {
                  return "225px"
            } else if (totalBudget < 25000) {
                  return "250px"
            } else {
                  return "275px"
            }

            
      }

      function bubbleCreationWidth(totalBudget) {
            if (totalBudget < 5000) {
                  return "30%"
            } else if (totalBudget < 10000) {
                  return "60%"
            } else if (totalBudget > 10000) {
                  return "100%"
            }


            
      }

      const handleFormSubmitClick = () => {
            if (nameInputValue.length > 0 && totalBudgetInputValue > 0) {
                  const newBubble = {
                        id: uuidV4(),
                        totalBudget: totalBudgetInputValue,
                        name: nameInputValue,
                        expenses: [],
                        height: bubbleCreationHeight(totalBudgetInputValue),
                        width: bubbleCreationWidth(totalBudgetInputValue)
                  }

                  setBubbles(prevBubbles => {
                        if (prevBubbles.find(bubble => bubble.name === nameInputValue)) {
                              return prevBubbles
                        } else {
                              setBubbles([...bubbles].concat(newBubble))
                        }
                  })
                  
                  setNameInputValue("")
                  setTotalBudgetInputValue("")
            }
      }

// Bubbles Logic

      const [clickedBubble, setClickedBubble] = useState()
      const [bubbleCursor, setBubbleCursor] = useState("pointer")

      const handleBubbleClick = (event) => {
            event.preventDefault()
            if (displayStatisticsModal == false) {
                  setDisplayStatisticsModal(true)
                  setDisplayMainBox("none")    
                  
                  setBubbleCursor("default")
                  setClickedBubble(bubbles.filter(bubble => bubble['id'] == event.target.dataset.id)[0])
            }
      }

      const handleDeleteBubbleClick = (event) => {
            if (displayStatisticsModal == true) {
                  setDisplayStatisticsModal(false)
                  setDisplayMainBox("flex")    
                  
                  setExpenses([...expenses].filter(expense => expense['bubbleId'] !== event.target.dataset.id))
                  setBubbles([...bubbles].filter(bubble => bubble['id'] !== event.target.dataset.id))
            }
      }

      //Modal Logic

      const [displayStatisticsModal, setDisplayStatisticsModal] = useState(false)
      const [displayMainBox, setDisplayMainBox] = useState("flex")

      const handleModalCloseClick = () => {
            setDisplayStatisticsModal(false)
            setDisplayMainBox("flex")
            setBubbleCursor("pointer")
      }

      const [expenseReason, setExpenseReason] = useState("");
      const [expenseCost, setExpenseCost] = useState("");
      const [expenses, setExpenses] = useLocalStorage("expenses", [])

      const handleExpenseReasonChange = (event) => {
            setExpenseReason(event.target.value)
      }

      const handleExpenseCostChange = (event) => {
            setExpenseCost(event.target.value)
      }

      const handleAddExpenseFormSubmit = () => {
            if(expenseCost.length > 0 && expenseReason.length > 0) {

                  const bubbleId = clickedBubble.id
                  const date = new Date().toLocaleString()

                  const newExpense = {
                        id: uuidV4(),
                        bubbleId: bubbleId,
                        reason: expenseReason,
                        cost: expenseCost,
                        date: date
                  }

                  setExpenses([...expenses].concat(newExpense))

                  setExpenseReason("")
                  setExpenseCost("")
            }
      }

      const handleDeleteExpenseClick = (event) => {
            setExpenses(expenses.filter(expense => expense['id'] !== event.target.dataset.id))
      }

      function getBudgetExpenses(bubbleId) {
            return expenses.filter(expense => expense.bubbleId === bubbleId)
          }

      return (
            <BubblesCreationContext.Provider value={{
                  nameInputValue,
                  totalBudgetInputValue,
                  bubbles,
                  expenses,
                  setNameInputValue,
                  setTotalBudgetInputValue,
                  handleFormSubmitClick,
                  handleNameInputChange,
                  handleTotalBudgetChange,
                  displayStatisticsModal,
                  displayMainBox,
                  setDisplayMainBox,
                  handleBubbleClick,
                  handleModalCloseClick,
                  expenseReason,
                  expenseCost,
                  handleExpenseReasonChange,
                  handleExpenseCostChange,
                  handleAddExpenseFormSubmit,
                  clickedBubble,
                  getBudgetExpenses,
                  handleDeleteBubbleClick,
                  handleDeleteExpenseClick,
                  bubbleCursor
            }}>
                  {children}
            </BubblesCreationContext.Provider>
      )
}