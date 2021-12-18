import { getCurrentPrice } from '../../services/utilities'
import { priceToLocal } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DishButton: React.FunctionComponent = () => {

    return (
        <footer className="w-full h-14  flex items-center justify-around bg-white flex-grow fixed bottom-0">
            <div className="flex flex-grow justify-evenly items-center">
                <button className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs">
                    <FontAwesomeIcon icon="minus" />
                </button>
                <p>1</p>
                <button className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs">
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>
            <button id="orderButton" className="bg-red flex-grow text-white font-bold rounded-full py-2 px-7">
                <p>Für {priceToLocal(getCurrentPrice(600, 120))} hinzufügen</p>
            </button>
        </footer>
    )
}
