import { Link } from 'react-router-dom';
import { useAppState } from '../../overmind';

export const OrderButton: React.FunctionComponent = () => {


    const basket = useAppState().basket.basket
    // Replace this with state later
    const itemsCount = 2
    const totalPrice = '5,60€'

    return (
        <footer className="w-full h-14 bg-red shadow-category fixed bottom-0 ">
            <button id="orderButton" className="container h-full flex justify-around items-center text-white font-bold">
                <p className="rounded-full w-7 h-7 bg-white text-red" style={{ lineHeight: '1.6rem' }}>{basket.items.length}</p>
                <Link id="basket" to="/basket" >Warenkorb anzeigen</Link>
                <p>{basket.price}</p>
            </button>
        </footer>
    )
}
