import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import './App.css'
import { produce } from "immer"

// Creating Context
import { createContext, useState } from "react"

export const OrderContext = createContext()



function App() {
  const [order, setOrder] = useState([])
  console.log(order)
  
  function addItemToOrder(drink) {
    const isDrinkAlreadyOnList = order.find(order => order.id == drink.id)

    if (isDrinkAlreadyOnList) {

      const newOrder = produce(order, draft => {
        const orderedDrink = draft.find(order => order.id == drink.id)
        orderedDrink.quantity += 1
      })
      setOrder(newOrder)

      console.log('esta bebida JÁ estava na lista') 
    } else {

      const newOrder = produce(order, draft => {draft.push(
        {
          ...drink,
          quantity: 1
        }
      )})

      setOrder(newOrder)
      
      console.log('essa bebida NÃO estava na lista')
    }
      

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
