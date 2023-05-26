import './styles.css'

import Navbar from '../../components/Navbar'
import { HomeHero } from '../../components/HomeHero'

import { useContext } from 'react'
import { OrderContext } from '../../App'
import { CoffeeOption } from '../../components/CoffeeOption'

import { menuItems } from '../../contexts/MenuContext'

function Home() {


    return (
        <>
            <Navbar />
            <main>
                <HomeHero />
                <h2>Nossos cafés</h2>
                <div className='coffee-list'>
                    {menuItems.map(drink => <CoffeeOption
                        drink={drink}
                    />)}
                </div>


            </main>
            
        </>
    )
}

export default Home