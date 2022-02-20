import { Link } from 'react-router-dom';
import { priceToLocal } from '../../services/utilities';
import { useAppState } from '../../overmind';

export const OrderButton: React.FunctionComponent = () => {
    const { itemsCount } = useAppState().basket.basket
    const basket = useAppState().basket.basket

    return (
        <footer className="w-full h-14 bg-red shadow-category fixed bottom-0 ">
            <button id="basketButton" data-cy="basketButton" className="container h-full flex justify-around items-center text-white font-bold">
                <p data-cy="itemCount" className="rounded-full w-7 h-7 bg-white text-red" style={{ lineHeight: '1.6rem' }}>{itemsCount}</p>
                <Link id="basket" to="/basket" >Warenkorb anzeigen</Link>
                <p>{priceToLocal(basket.price)}</p>
            </button>
        </footer>
    )
}
