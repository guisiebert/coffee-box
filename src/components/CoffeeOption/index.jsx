import './styles.css'
import { ShoppingCart, Plus, Minus} from '@phosphor-icons/react'
import latte from '../../assets/coffee-op-latte.png'
import { useContext } from 'react'
import { OrderContext } from '../../App'
import { Link } from 'react-router-dom'

export function CoffeeOption({drink}) {

    const order = useContext(OrderContext)

    function addThisItem() {
        order.addItem({
            name: drink.name,
            price: "R$9,90",
            quantity: 1
        })
    }

    return (
        <div className='option-card'>
            <img src={latte} alt="" />
            <div className='tags'>
                {drink.tags.map(tag => <span className='tag'>{tag}</span>)}
            </div>
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <div className='buy-section'>
                <h3><span>R$</span>9,90</h3>
                <div className='quantity'>
                    <button className='qty-btns' onClick={order.decreaseCoffees}>
                        <Minus/>
                    </button>
                    {order.coffees}
                    <button className='qty-btns' onClick={addThisItem}>
                        <Plus/>
                    </button>
                </div>
                <div className='cart-button'>
                    <Link to={'/checkout'}>
                        <ShoppingCart className='cart-button-icon'  />
                    </Link>
                </div>

            </div>
        </div>
    )
}