import './styles.css'

import Navbar from '../../components/Navbar'
import { HomeHero } from '../../components/HomeHero'
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
                        key={drink.id}
                    />)}
                </div>


            </main>
            
        </>
    )
}

export default Home