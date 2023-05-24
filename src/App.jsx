import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import './App.css'

// Creating Context
import { createContext } from "react"

export const OrderContext = createContext({})



function App() {

  return (
    <BrowserRouter>
      <OrderContext.Provider value={{coffees: 1}}>
        <Router />
      </OrderContext.Provider>
    </BrowserRouter>
  )
}

export default App
