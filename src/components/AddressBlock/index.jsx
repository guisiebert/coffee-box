import { MapPinLine } from '@phosphor-icons/react'
import './styles.css'

export function AddressBlock() {

    return(
        <div className='address-form-block block'>
            <div className='title-desc-icon-div'>
                <MapPinLine size={22} color='#8047F8' />
                <div>
                    <p className='block-title'>Endereço de Entrega</p>
                    <p className='block-description'>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
            <form action="">
                <div className='input-line'>
                    <input 
                        type="text" name="cep" id="CEP"  placeholder='CEP' style={{width:"30%"}}
                    />
                </div>
                <div className='input-line'>
                    <input 
                        type="text" name="street" id="street" placeholder='Rua' style={{width:"100%"}} 
                    />
                </div>
                <div className='input-line'>
                    <input 
                        type="text" name="number" id="number"  placeholder='Número' style={{width:"30%"}}
                    />
                    <input 
                        type="text" name="complement" id="complement"  placeholder='Complemento'  style={{width:"70%"}}
                    />
                </div>
                <div className='input-line'>
                    <input 
                        type="text" name="neighborhood" id="neighborhood"  placeholder='Bairro'  style={{width:"30%"}}
                    />
                    <input 
                        type="text" name="city" id="city"  placeholder='Cidade'  style={{width:"60%"}}
                    />
                    <input 
                        type="text" name="state" id="state"  placeholder='UF'  style={{width:"10%"}}
                    />
                </div>

            </form>
        </div>
    )

}