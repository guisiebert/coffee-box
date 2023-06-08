import { MapPinLine } from '@phosphor-icons/react'
import './styles.css'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function AddressBlock() {

    const {changeFormData, formData} = useContext(OrderContext)


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
                        type="text" name="cep" id="cep"  placeholder='CEP' style={{width:"30%"}}
                        value={formData.cep} 
                        onChange={e => changeFormData(e)}
                        
                        />
                </div>
                <div className='input-line'>
                    <input 
                        type="text" name="rua" id="rua" placeholder='Rua' style={{width:"100%"}}
                        value={formData.rua} 
                        onChange={e => changeFormData(e)}
                        />
                </div>
                <div className='input-line'>
                    <input 
                        type="text" name="numero" id="numero"  placeholder='Número' style={{width:"30%"}}
                        value={formData.numero} 
                        onChange={e => changeFormData(e)}
                        />
                    <input 
                        type="text" name="complemento" id="complemento"  placeholder='Complemento'  style={{width:"70%"}}
                        value={formData.complemento} 
                        onChange={e => changeFormData(e)}
                        />
                </div>
                <div className='input-line'>
                    <input 
                        type="text" name="bairro" id="bairro"  placeholder='Bairro'  style={{width:"30%"}}
                        value={formData.bairro} 
                        onChange={e => changeFormData(e)}
                        />
                    <input 
                        type="text" name="cidade" id="cidade"  placeholder='Cidade'  style={{width:"60%"}}
                        value={formData.cidade} 
                        onChange={e => changeFormData(e)}
                        />
                    <input 
                        type="text" name="uf" id="uf"  placeholder='UF'  style={{width:"10%"}}
                        value={formData.uf} 
                        onChange={e => changeFormData(e)}
                        />
                </div>

            </form>
        </div>
    )

}