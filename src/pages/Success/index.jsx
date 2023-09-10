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
                <h1>Uhu! Pedido confirmado</h1>
                <p className='success-description'>Agora é só aguardar que logo o café chegará até você</p>
                <div className='order-hero'>
                    <div className='order-details'>
                        <div className='order-detail-feature'>
                            <MapPin size={32}  fill={'blue'} weight='fill'/>
                            <div>
                                <p>Entrega em <strong>{formData.rua}, {formData.numero}</strong> </p>
                                <p>{formData.bairro} - {formData.cidade}, {formData.uf}</p>
                            </div>
                        </div>
                        <div className='order-detail-feature'>
                            <MapPin size={32} color={'white'} fill={'blue'} weight='fill' />
                            <div>
                                <p>Previsão de entrega </p>
                                <strong>20 min - 30 min </strong>
                            </div>
                        </div>
                        <div className='order-detail-feature'>
                            <MapPin size={32}  fill={'blue'} weight='fill'/>
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>Cartão de Crédito</strong>
                            </div>
                        </div>
                    </div>
                    <img src={cover} alt="" />
                </div>
            </main>
        </>
    )
}

export default Success