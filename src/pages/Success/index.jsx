import './styles.css'
import { MapPin, Pinwheel, ShoppingCart } from '@phosphor-icons/react'
import cover from '../../assets/confirmation-cover.svg'
import Navbar from '../../components/Navbar'
import { OrderContext } from '../../contexts/OrderContext'
import { useContext } from 'react'

function Success() {

    const {formData} = useContext(OrderContext)



    return (
        <>
            <Navbar />
            <main>
                <div>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                    <div className='order-details'>
                        <div className='order-detail-feature'>
                            <MapPin />
                            <div>
                                <p>Entrega em {formData.rua}, {formData.numero} </p>
                                <p>{formData.bairro} - {formData.cidade}, {formData.uf}</p>
                            </div>
                        </div>
                        <div className='order-detail-feature'>
                            <MapPin />
                            <div>
                                <p>Previsão de entrega </p>
                                <p>20 min - 30 min </p>
                            </div>
                        </div>
                        <div className='order-detail-feature'>
                            <MapPin />
                            <div>
                                <p>Pagamento na entrega</p>
                                <p>Cartão de Crédito</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={cover} alt="" />
            </main>
        </>
    )
}

export default Success