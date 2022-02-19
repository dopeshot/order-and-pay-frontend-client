import { useActions, useAppState } from '../../overmind';
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { priceToLocal } from '../../services/utilities';
import { FooterButton } from '../../components/UIComponents/FooterButton';
import { faCcApplePay, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { PaymentMethod } from '../../components/UIComponents/PaymentMethod';
import { Header } from '../../components/UIComponents/Header';
import { useState } from 'react';

export const Checkout: React.FunctionComponent = () => {

    const history = useHistory()
    const basket = useAppState().basket.basket
    const { sendOrder } = useActions().basket
    const [alert, setAlert] = useState("")

    const sendOrders = async () => {
        if (await sendOrder()) {
            // Send order worked!
            setAlert("Order successful!")
            history.push('/orderConformation')
        } else {
            // Send order failed!
            setAlert("Order failed!")
            console.log(basket)
        }
    }


    return (
        <>
            <div id="page" className='container px-5'>
                <Header parentId="basket" parentLink="/basket" />
                <div id="container" className="container p-5">
                    <h1 className="font-bold text-4xl pb-2">Zahlmethoden</h1>
                    <p>{alert}</p>
                    <div className='pt-9'>
                        <div className="flex items-center pl-3 pr-3 pt-3">
                            <div className="flex w-full pl-3 text-xl">
                                <FontAwesomeIcon icon={faCcPaypal} className='text-red' />

                                <p className='pl-3'>Paypal</p>
                            </div>
                            <input type="radio" name="checked" value='Paypal' />
                        </div>
                        <div className="flex items-center pl-3 pr-3 pt-3">
                            <div className="flex w-full pl-3 text-xl">
                                <FontAwesomeIcon icon={faCcApplePay} className='text-red' />
                                <p className='pl-3'>ApplePay</p>
                            </div>
                            <input type="radio" name="checked" value='ApplePay' />
                        </div>
                        <PaymentMethod icon="credit-card" name="Kreditkarte" id="credit" />
                        <PaymentMethod icon="money-bill-wave" name="Barzahlung" id="cash" />
                    </div>
                    <p className='pt-16 text-sm'>Per Klick auf 'Jetzt bezahlen!' werden Sie auf die jeweilige Seite des Anbieters weitergeleitet!</p>
                    <p className='text-sm'>Im Falle der Barzahlung kommt in Kürze einer unserer Mitarbeiter zu Ihnen.</p>
                    <div className='pt-12'>
                        <p className="font-bold text-2xl text-right">{priceToLocal(basket.price)}</p>
                        <p className='text-grey text-sm text-right'> inkl. Mehrwertsteuer</p>
                    </div>
                </div>
            </div>
            <FooterButton id="confirm" text="Jetzt bezahlen!" method={sendOrders} />
        </>
    )
}
