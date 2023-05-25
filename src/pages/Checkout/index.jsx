import './styles.css'
import { } from '@phosphor-icons/react'
import Navbar from '../../components/Navbar'

import { useContext } from 'react'
import { OrderContext } from '../../App'
import { Link } from 'react-router-dom'




function Checkout() {

    const someInfo = useContext(OrderContext)
    console.log(someInfo)
    

    return (
        <>
            <Navbar />
            <main>
                <div className='address-form'>
                    <div>
                        <h3>Endereço de Entrega</h3>
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
                            <input type="text" name="state" id="state"  placeholder='UF'/>
                        </div>

                    </form>
                </div>
                <div className='payment-form'>
                    <div>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </div>

                <div className='cart'>

                </div>
            </main>
            
        </>
    )
}

export default Checkout