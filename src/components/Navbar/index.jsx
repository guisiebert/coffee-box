import { Link } from 'react-router-dom'
import logo from '../../assets/coffee-delivery-logo.svg'
import './styles.css'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

function Navbar() {
    return (
        <nav>
            <Link to={'/'}>
                <img className='logo' src={logo} alt="coffee delivery logo" />
            </Link>
            <div className='actions' >
                <div className='location-action'>
                    <MapPin weight="fill" size={22} /> <span>Porto Alegre, RS</span>
                </div>
                <div className='cart-action'>
                    <ShoppingCart weight="fill" size={22}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
