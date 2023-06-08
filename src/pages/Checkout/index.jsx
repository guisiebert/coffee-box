import './styles.css'
import { Bank, CreditCard, Money, MapPinLine } from '@phosphor-icons/react'
import Navbar from '../../components/Navbar'

import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Link } from 'react-router-dom'
import { OrderItem } from '../../components/OrderItem'




function Checkout() {

    const someInfo = useContext(OrderContext)
    
    const {order, newOrder} = useContext(OrderContext)
    
    const orderList = order.map(item => {return (
        <OrderItem 
            item={item}
        />
    )}) 

    

    return (
        <>
            <Navbar />
            <main className='checkout-container'>
                <div className='left-panel'>
                    <h3>Complete seu pedido</h3>
                    <div className='address-form-block block'>
                        <div className='title-desc-icon-div'>
                            <MapPinLine size={22} color='#8047F8' />
                            <div>
                                <p className='block-title'>Endereço de Entrega</p>
                                <p className='block-description'>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>
                        <form action="">
                            <div className='input-line'>
                                <input 
                                    type="text" name="cep" id="CEP"  placeholder='CEP' style={{width:"30%"}}
                                />
                            </div>
                            <div className='input-line'>
                                <input 
                                    type="text" name="street" id="street" placeholder='Rua' style={{width:"100%"}} 
                                />
                            </div>
                            <div className='input-line'>
                                <input 
                                    type="text" name="number" id="number"  placeholder='Número' style={{width:"30%"}}
                                />
                                <input 
                                    type="text" name="complement" id="complement"  placeholder='Complemento'  style={{width:"70%"}}
                                />
                            </div>
                            <div className='input-line'>
                                <input 
                                    type="text" name="neighborhood" id="neighborhood"  placeholder='Bairro'  style={{width:"30%"}}
                                />
                                <input 
                                    type="text" name="city" id="city"  placeholder='Cidade'  style={{width:"60%"}}
                                />
                                <input 
                                    type="text" name="state" id="state"  placeholder='UF'  style={{width:"10%"}}
                                />
                            </div>

                        </form>
                    </div>
                    <div className='payment-method-block block'>
                        <div>
                            <div className='title-desc-icon-div'>
                                <MapPinLine size={22} color='#8047F8' />
                                <div>
                                    <p className='block-title'>Pagamento</p>
                                    <p className='block-description'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </div>
                            <div className='payment-methods'>
                                <div className='payment-option'>
                                    <CreditCard size={16} color='#8047F8'/>
                                    <p>Cartão de Crédito</p>
                                </div>
                                <div className='payment-option'>
                                    <Bank size={16} color='#8047F8'/>
                                    <p>Cartão de Débito</p>
                                </div>
                                <div className='payment-option'>
                                    <Money size={16} color='#8047F8' />
                                    <p>Dinheiro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right-panel'>
                    <h3>Cafés selecionados</h3>
                    <div className='order-block block'>
                        {order.length > 0 
                        ? orderList
                        : <h3>Ainda não há pedidos aqui</h3> }
                         
                        <div className='summary'>
                            <div className='summary-line'>
                                <p>Total de Itens </p> 
                                <p>R$29,70 </p>
                            </div>
                            <div className='summary-line'>
                                <p>Entrega </p> 
                                <p>R$3,50 </p>
                            </div>
                            <div className='summary-line'>
                                <p>Total</p> 
                                <p>R$33,20</p>
                            </div>
                            <button className='confirm'>Confirmar Pedido</button>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Checkout