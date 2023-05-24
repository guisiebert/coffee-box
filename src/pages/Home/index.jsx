import './styles.css'
import { ShoppingCart } from '@phosphor-icons/react'
import heroPicture from '../../assets/hero coffee picture.png'
import Navbar from '../../components/Navbar'

import { useContext } from 'react'
import { OrderContext } from '../../App'
import { Link } from 'react-router-dom'

function Home() {

    const someInfo = useContext(OrderContext)
    console.log(someInfo)

    return (
        <>
            <Navbar />
            <main>
                <div className='hero'>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        <div className='features'>
                            <div>
                                <ShoppingCart />
                                <span>Compra simples e segura</span>
                            </div>
                            <div>
                                <ShoppingCart />
                                <span>Entrega rápida e rastreada</span>
                            </div>
                            <div>
                                <ShoppingCart />
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div>
                                <ShoppingCart />
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </div>
                    </div>
                    <img src={heroPicture} alt="" />

                </div>
                <div className='coffee-list'>
                    <h2>Nossos cafés</h2>
                    <button
                        onClick={someInfo.increaseCoffees}
                    >
                        Adicionar
                    </button>
                    <h1>So you want {someInfo.coffees} coffees?</h1>
                   <Link to={'/checkout'}> Go to checkout </Link>
                </div>
            </main>
            
        </>
    )
}

export default Home