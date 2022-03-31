import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BubblesCreationProvider } from './contexts/BubblesCreationContext'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BubblesCreationProvider>
        <App />
      </BubblesCreationProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
