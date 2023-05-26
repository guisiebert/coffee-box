import './styles.css'
import latte from '../../assets/coffee-op-latte.png'

export function OrderItem({item}) {


    return (
        <div className='container'>
            <img src={latte} alt="" />
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
        </div>
    )
}