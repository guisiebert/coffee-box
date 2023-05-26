import './styles.css'
import { } from '@phosphor-icons/react'
import Navbar from '../../components/Navbar'

import { useContext } from 'react'
import { OrderContext } from '../../App'
import { Link } from 'react-router-dom'
import { OrderItem } from '../../components/OrderItem'




function Checkout() {

    const someInfo = useContext(OrderContext)
    
    const {currentOrder, newCurrentOrder} = useContext(OrderContext)

    

    return (
        <>
            <Navbar />
            <main className='checkout-container'>
                <div className='left-panel'>
                    <h3>Complete seu pedido</h3>
                    <div className='address-form-block block'>
                        <div>
                            <h4>Endereço de Entrega</h4>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                        <form action="">
                            <div>
                                <input type="text" name="cep" id="CEP"  placeholder='CEP'/>
                            </div>
                            <div>
                                <input type="text" name="street" id="street" placeholder='Rua' />
                            </div>
                            <div>
                                <input type="text" name="number" id="number"  placeholder='Número'/>
                                <input type="text" name="complement" id="complement"  placeholder='Complemento'/>
                            </div>
                            <div>
                                <input type="text" name="neighborhood" id="neighborhood"  placeholder='Bairro'/>
                                <input type="text" name="city" id="city"  placeholder='Cidade'/>
                                {/* <input type="text" name="state" id="state"  placeholder='UF'/> */}
                            </div>

                        </form>
                    </div>
                    <div className='payment-method-block block'>
                        <div>
                            <h4>Pagamento</h4>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            <div className='payment-methods'>
                                <p>Cartão de Crédito</p>
                                <p>Cartão de Débito</p>
                                <p>Dinheiro</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right-panel'>
                    <h3>Cafés selecionados</h3>
                    <div className='order-block block'>
                        {newCurrentOrder.map(item => {return (
                            <OrderItem 
                                item={item}
                            />
                        )})}
                         
                        <div className='summary'>
                            <table>
                                <tr>
                                    <td>Total de Itens</td>
                                    <td>R$29,70</td>
                                </tr>
                                <tr>
                                    <td>Entrega</td>
                                    <td>R$3,50</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>R$33,20</td>
                                </tr>
                            </table>
                            <button className='confirm'>Confirmar Pedido</button>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Checkout