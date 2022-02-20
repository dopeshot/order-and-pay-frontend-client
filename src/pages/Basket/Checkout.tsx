import { useActions, useAppState } from '../../overmind';
import { useHistory } from "react-router-dom";
import { priceToLocal } from '../../services/utilities';
import { FooterButton } from '../../components/UIComponents/FooterButton';
import { faCcApplePay, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { PaymentMethod } from '../../components/UIComponents/PaymentMethod';
import { Header } from '../../components/UIComponents/Header';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export const Checkout: React.FunctionComponent = () => {
    const history = useHistory()
    const basket = useAppState().basket.basket
    const { sendOrder } = useActions().basket
    const [sendOrderfailed, setOrderStatus] = useState(false)

    const sendOrders = async () => {
        if (await sendOrder() && basket.price > 0) {
            history.push('/orderConformation')
        } else {
            setOrderStatus(true)
        }
    }

    return (
        <>
            <div id="page" className='container px-5'>
                <Header parentId="basket" parentLink="/basket" />
                <div id="container" className="container p-5">
                    <h1 className="font-bold text-4xl pb-2">Zahlmethoden</h1>
                    {sendOrderfailed ? <p className='text-xl text-red'> <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" /> Hoppla! Etwas ist schief gelaufen, versuche es später noch einmal.</p> : ''}
                    <div className='pt-9'>
                        <PaymentMethod icon={faCcApplePay} name="ApplePay" id="applepay" />
                        <PaymentMethod icon={faCcPaypal} name="PayPal" id="paypal" />
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
