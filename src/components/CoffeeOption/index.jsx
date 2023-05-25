import './styles.css'
import { ShoppingCart, Plus, Minus} from '@phosphor-icons/react'
import latte from '../../assets/coffee-op-latte.png'
import { useContext } from 'react'
import { OrderContext } from '../../App'

export function CoffeeOption() {

    const order = useContext(OrderContext)

    return (
        <div className='option-card'>
            <img src={latte} alt="" />
            <div className='tags'>
                <span className='tag'>tradicional</span>
                <span className='tag'>com leite</span>
            </div>
            <h3>Latte</h3>
            <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
            <div className='buy-section'>
                <h3><span>R$</span>9,90</h3>
                <div className='quantity'>
                    <button className='qty-btns' onClick={order.decreaseCoffees}>
                        <Minus/>
                    </button>
                    {order.coffees}
                    <button className='qty-btns' onClick={order.increaseCoffees}>
                        <Plus/>
                    </button>
                </div>
                <button><ShoppingCart /></button>

            </div>
        </div>
    )
}