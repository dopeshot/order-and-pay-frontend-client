import React from 'react'
import { Dish } from '../../overmind/menu/state'
import { priceToLocal } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Defines the properties of the dishcard 
type DishProps = {
    dish: Dish
}

// Dish items with limited information that are shown in the menu view
export const DishCard: React.FunctionComponent<DishProps> = ({ dish }) => {

    return (
        <div className="flex gap-2 justify-center items-center" id="dishCard">
            <div className="self-start flex-2/4">
                {/* Name of the dish */}
                <p className="text-lg font-bold">
                    {dish.name}
                </p>
                {/* Dishcription TODO: Platzhalter austauschen */}
                <p className="self-start text-xs text-grey">
                    {dish.description}
                </p>
                {/* Price of the dish */}
                <p className="self-start gap-1 text-base font-bold text-red">
                    {priceToLocal(dish.price)}
                </p>
            </div>
            {/* Image of the dish */}
            <img alt={dish.name} className="self-center h-16 object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
            {/* More info button */}
            <button className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs">
                <FontAwesomeIcon icon="plus" />
            </button>

        </div>
    )

}