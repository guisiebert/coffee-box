import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import './App.css'

// Creating Context
import { createContext, useState } from "react"

export const OrderContext = createContext()



function App() {

  const [coffees, setCoffees] = useState(1)

  function increaseCoffees() {
    setCoffees(prev => prev + 1)
  }

  return (
    <BrowserRouter>
      <OrderContext.Provider 
        value={{
          coffees,
          increaseCoffees
        }}

      >
        <Router />
      </OrderContext.Provider>
    </BrowserRouter>
  )
}

export default App
