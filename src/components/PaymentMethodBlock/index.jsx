import { Bank, CreditCard, MapPinLine, Money } from "@phosphor-icons/react";

export function PaymentBlock() {

    const isActive = "active"

    return(
        <div className='payment-method-block block'>
            <div>
                <div className='title-desc-icon-div'>
                    <MapPinLine size={22} color='#8047F8' />
                    <div>
                        <p className='block-title'>Pagamento</p>
                        <p className='block-description'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </div>
                <div className='payment-methods'>
                    <div className='payment-option'>
                        <CreditCard size={16} color='#8047F8'/>
                        <p>Cartão de Crédito</p>
                    </div>
                    <div className='payment-option'>
                        <Bank size={16} color='#8047F8'/>
                        <p>Cartão de Débito</p>
                    </div>
                    <div className={`payment-option active`}>
                        <Money size={16} color='#8047F8' />
                        <p>Dinheiro</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


