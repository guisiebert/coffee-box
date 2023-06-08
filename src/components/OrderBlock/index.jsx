import { useContext } from "react"
import { OrderItem } from "../OrderItem"
import { Link } from "react-router-dom"
import { OrderContext } from "../../contexts/OrderContext"

export function OrderBlock() {

    const {getTotal, order} = useContext(OrderContext)
    const total = getTotal()
    
    const orderList = order.map(item => {
        // if (item.quantity > 0) {
            return (
                <OrderItem 
                    item={item}
                    key={item.id}
                />
            )
        // }
    }) 

    return(
        <div className='order-block block'>
            {orderList}
            <div className='summary'>
                <div className='summary-line'>
                    <p>Total de Itens </p> 
                    <p>R${(total - 3.50).toFixed(2)} </p>
                </div>
                <div className='summary-line'>
                    <p>Entrega </p> 
                    <p>R$3,50 </p>
                </div>
                <div className='summary-line'>
                    <p>Total</p> 
                    <p>R${total.toFixed(2)}</p>
                </div>
                <Link className='link' to={'/thanks'}>
                    <button className='confirm'>
                        Confirmar Pedido
                    </button>
                </Link>
            </div>
        </div>
    )
}