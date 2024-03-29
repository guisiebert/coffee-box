import { createContext, useState } from "react"
import { produce } from "immer"


export const OrderContext = createContext()




export function OrderProvider({ children }) {
    const [order, setOrder] = useState([])

    
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

    function decreaseQty(drinkId) {
        const newOrder = produce(order, draft => {
            const drinkToDecrease = order.findIndex( drink => drink.id == drinkId)
            if (draft[drinkToDecrease].quantity > 0) {
                draft[drinkToDecrease].quantity = draft[drinkToDecrease].quantity - 1
            }
            if (draft[drinkToDecrease].quantity <= 0) {
                draft.splice(drinkToDecrease, 1)
            }
        })
    
        setOrder(newOrder)
    }

    function removeItem(drinkId) {
        const newOrder = produce(order, draft => {
            const orderToDelete = draft.findIndex( drink => drink.id == drinkId)
            draft.splice(orderToDelete, 1)
        })

        setOrder(newOrder)
    }

    function getTotal() {
        let total = 0
        if (order.length > 0) {
            for (let item in order) {
                // console.log(order[item].name)
                total += order[item].price * order[item].quantity
            }
        }
        return total
    }

    const [formData, setFormData] = useState({
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        metodo: ""
    })

    console.log(formData)

    function changeFormData(event) {
        const {name, value} = event.target

        const newFormData = produce(formData, draft => {
            draft[name] = value
        })

        setFormData(newFormData)
    }


    return (
        <OrderContext.Provider
            value={{
                order,
                addItemToOrder,
                getTotal,
                decreaseQty,
                removeItem,
                formData,
                changeFormData
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
  