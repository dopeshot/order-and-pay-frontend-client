import { Link } from 'react-router-dom';
import { priceToLocal } from '../../services/utilities';
import { useAppState } from '../../overmind';
import { getBasketPrice } from '../../services/utilities';

export const OrderButton: React.FunctionComponent = () => {

    const { itemsCount } = useAppState().basket.basket
    const basket = useAppState().basket.basket
    const menu = useAppState().menu.MenuResponseObj


    return (
        <footer className="w-full h-14 bg-red shadow-category fixed bottom-0 ">
            <button id="basketButton" className="container h-full flex justify-around items-center text-white font-bold">
                <p className="rounded-full w-7 h-7 bg-white text-red" style={{ lineHeight: '1.6rem' }}>{itemsCount}</p>
                <Link id="basket" to="/basket" >Warenkorb anzeigen</Link>
                <p>{priceToLocal(getBasketPrice(basket, menu))}</p>
            </button>
        </footer>
    )
}
