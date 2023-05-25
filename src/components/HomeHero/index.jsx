import './styles.css'
import heroPicture from '../../assets/hero coffee picture.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function HomeHero() {
    return (
        <div className='hero-wrapper'>
            <div className='hero-text'>
                <div className='hero-title'>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <div className='hero-features'>
                    <div className='feats1'>
                        <div className='single-feature'>
                            <ShoppingCart size={16} className='icon icon1' weight="fill"/>
                            <p>Compra simples e segura</p>
                        </div>
                        
                        <div className='single-feature'>
                            <Timer size={16} className='icon icon3' weight="fill"/>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                    </div>

                    <div className='feats2'>

                        <div className='single-feature'>
                            <Package size={16} className='icon icon2' weight="fill"/>
                            <p>Embalagem mantém o café intacto</p>
                        </div>

                        <div className='single-feature'>
                            <Coffee size={16} className='icon icon4' weight="fill"/>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            <img src={heroPicture} alt="" />

        </div>
    )
}





{/* <div>
    <ShoppingCart />
    <span></span>
</div>

<div>
    <ShoppingCart />
    <span></span>
</div>

<div>
    <ShoppingCart />
    <span></span>
</div> */}