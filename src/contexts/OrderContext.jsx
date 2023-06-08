import { createContext, useState } from "react"
import { produce } from "immer"


export const OrderContext = createContext()




export function OrderProvider({ children }) {
    const [order, setOrder] = useState([])
    const [coffees, setCoffees] = useState(1)

    
    function addItemToOrder(drink) {
        const isDrinkAlreadyOnList = order.find(order => order.id == drink.id)
    
        if (isDrinkAlreadyOnList) {
    
          const newOrder = produce(order, draft => {
            const orderedDrink = draft.find(order => order.id == drink.id)
            orderedDrink.quantity += 1
          })
          setOrder(newOrder)
    
          // console.log('esta bebida JÁ estava na lista') 
        } else {
    
          const newOrder = produce(order, draft => {draft.push(
            {
              ...drink,
              quantity: 1
            }
          )})
    
          setOrder(newOrder)
          
          // console.log('essa bebida NÃO estava na lista')
        }
    }


    return (
        <OrderContext.Provider
            value={{
                order,
                addItemToOrder,
                coffees
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
  