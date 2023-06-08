import './styles.css'
import latte from '../../assets/coffee-op-latte.png'
import { Trash, Minus, Plus } from '@phosphor-icons/react'

export function OrderItem({item}) {

    const subtotal = item.price * item.quantity

    return (
        <div className='container'>
            <img src={latte} alt="" />
            <div className='center-block'>
                <p>{item.name}</p>
                <div className='qty-rmv'>
                    <div className='qty-block'>
                        <Minus/>
                        <p>{item.quantity}</p>
                        <Plus/>

                    </div>
                    <div className='rmv-btn'>
                        <Trash size={16} />
                        REMOVER
                    </div>
                </div>

            </div>
            <strong>R$ {subtotal.toFixed(2)}</strong>
        </div>
    )
}