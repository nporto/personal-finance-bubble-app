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

      const handleFormSubmitClick = () => {
            if (nameInputValue.length > 0 && totalBudgetInputValue > 0) {
                  const newBubble = {
                        id: uuidV4(),
                        totalBudget: totalBudgetInputValue,
                        name: nameInputValue,
                        expenses: []
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

      const handleBubbleClick = (event) => {
            event.preventDefault()
            if (displayStatisticsModal == false) {
                  setDisplayStatisticsModal(true)
                  setDisplayMainBox("none")    
                  
                  setClickedBubble(bubbles.filter(bubble => bubble['id'] == event.target.dataset.id))
            }
      }

      const handleDeleteBubbleClick = (event) => {
            //setBubbles(bubbles.filter(bubble => bubble['id']!==clickedBubble[0].id))
            console.log(event.target)
      }

      //Modal Logic

      const [displayStatisticsModal, setDisplayStatisticsModal] = useState(false)
      const [displayMainBox, setDisplayMainBox] = useState("flex")

      const handleModalCloseClick = () => {
            setDisplayStatisticsModal(false)
            setDisplayMainBox("flex")
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

                  const bubbleId = clickedBubble[0].id
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
                  handleDeleteBubbleClick
            }}>
                  {children}
            </BubblesCreationContext.Provider>
      )
}