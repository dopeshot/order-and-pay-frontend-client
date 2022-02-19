import { FooterButton } from "../../components/UIComponents/FooterButton";
import { useActions, useAppState } from "../../overmind"
import { priceToLocal } from '../../services/utilities';
import { useHistory } from "react-router-dom"


export const Payment: React.FunctionComponent = () => {
    const basket = useAppState().basket.basket
    const { clearBasket } = useActions().basket
    const history = useHistory()

    const clearOrder = () => {
        clearBasket()
        history.push('/menu')
    }



    return (
        <>
            <div id="page" className='container px-5'>
                <div className="flex mt-96 flex-grow">
                    <div className="">
                        <p className="text-3xl text light-black">Ihre Bestellung war erfolgreich </p>
                        <p className="text-xl text light-black mt-4 font-bold">{priceToLocal(basket.price)} </p>
                    </div>
                </div>
            </div>
            <FooterButton text='Mehr bestellen' method={clearOrder} />
        </>
    )
}
