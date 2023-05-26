import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import './App.css'
import { produce } from "immer"

// Creating Context
import { createContext, useState } from "react"

export const OrderContext = createContext()



function App() {

  const [order, setOrder] = useState([])

  function addItemToOrder(drink) {
    const newOrder = produce(order, draft => {
      draft.push(drink)
    })
    setOrder(newOrder)

    console.log('fui apertado')

  }

  const [coffees, setCoffees] = useState(1)


  return (
    <BrowserRouter>
      <OrderContext.Provider 
        value={{
          order,
          addItemToOrder,
          coffees,
        }}

      >
        <Router />
      </OrderContext.Provider>
    </BrowserRouter>
  )
}

export default App
