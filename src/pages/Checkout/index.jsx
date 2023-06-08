import './styles.css'
import Navbar from '../../components/Navbar'

import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { AddressBlock } from '../../components/AddressBlock'
import { PaymentBlock } from '../../components/PaymentMethodBlock'
import { OrderBlock } from '../../components/OrderBlock'
import { BlankOrderBlock } from '../../components/BlankOrderBlock'



function Checkout() {
    
    const {order} = useContext(OrderContext)

    return (
        <>
            <Navbar />
            <main className='checkout-container'>
                <div className='left-panel'>
                    
                    <h3>Complete seu pedido</h3>
                    <AddressBlock />
                    <PaymentBlock />
                </div>

                <div className='right-panel'>
                    <h3>Cafés selecionados</h3>
                    {order.length > 0 
                    ? <OrderBlock />
                    : <BlankOrderBlock />}
                </div>
            </main>
            
        </>
    )
}

export default Checkout