import { useContext } from "react"
import { OrderItem } from "../OrderItem"
import { Link } from "react-router-dom"
import { OrderContext } from "../../contexts/OrderContext"

export function BlankOrderBlock() {

    const {getTotal, order} = useContext(OrderContext)
    const total = getTotal()
    
    const orderList = order.map(item => {return (
        <OrderItem 
            item={item}
            key={item.id}
        />
    )}) 

    return(
        <div className='blank-order-block block'>
            <p>Seu carrinho está vazio</p> 
        </div>
    )
}