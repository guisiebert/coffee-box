import './styles.css'
import { ShoppingCart, Plus, Minus, ShoppingCartSimple} from '@phosphor-icons/react'
// import latte from '../../assets/coffee-op-latte.png'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Link } from 'react-router-dom'

export function CoffeeOption({drink}) {
    
    const order = useContext(OrderContext)

    function addThisItem() {
        order.addItemToOrder(drink)
    }

    function decreaseThisItem() {
        order.decreaseQty(drink.id)
    }

    function checkQuantityOfThisItemInOrder() {
        const thisItemInOrder = order.order.find(item => item.id == drink.id)
        let amountOfThisItemInOrder = 0
        if (thisItemInOrder) {
            amountOfThisItemInOrder = thisItemInOrder.quantity
        }
        
        return amountOfThisItemInOrder
    }

    const qty = checkQuantityOfThisItemInOrder()

    return (
        <div className='option-card'>

            <img src={drink.image} alt="" /> 

            <div className='tags'>
                {drink.tags.map(tag => <span className='tag' key={tag}>{tag}</span>)}
            </div>
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <div className='buy-section'>
                <p>R$ <span className='price'>9,90</span></p>
                <div className='qty-box'>
                        <Minus 
                            size={14} 
                            weight="bold"  
                            color='#8047F8'  
                            className='qty-btns' 
                            onClick={decreaseThisItem} 
                        />
                    {qty}
                        <Plus 
                            size={14} 
                            weight="bold"  
                            color='#8047F8'  
                            className='qty-btns' 
                            onClick={addThisItem} 
                        />
                </div>
                <Link to={'/checkout'} className='cart-button'>
                    <ShoppingCartSimple weight="fill" color="white" size={22}  />
                </Link> 

            </div>
        </div>
    )
}