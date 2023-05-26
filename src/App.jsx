import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import './App.css'
import { produce } from "immer"

// Creating Context
import { createContext, useState } from "react"

export const OrderContext = createContext()



function App() {

  const [currentOrder, setCurrentOrder] = useState([
    {
      name: "Latte",
      price: "R$9,90",
      quantity: 1
    },
    {
      name: "Expresso",
      price: "R$9,90",
      quantity: 1
    },

  ])
  
  const newCurrentOrder = produce(currentOrder, draft => {})

  function addItem(drink) {
    const newcoiso = produce(currentOrder, draft => {
      draft.push(drink)
    })
    setCurrentOrder(newcoiso)

  }

  












  const [coffees, setCoffees] = useState(1)


  function increaseCoffees() {
    addItem()
  }

  function decreaseCoffees() {
    setCoffees(prev => prev - 1)
  }











  return (
    <BrowserRouter>
      <OrderContext.Provider 
        value={{
          currentOrder,
          newCurrentOrder,
          addItem,
          coffees,
          increaseCoffees,
          decreaseCoffees
        }}

      >
        <Router />
      </OrderContext.Provider>
    </BrowserRouter>
  )
}

export default App
