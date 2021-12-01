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
        <div className="grid grid-cols-5 gap-2 pl-4" id="dishCard">
            <div className="col-span-3">
                {/* Name of the dish */}
                <p className="text-lg font-sofia font-bold">
                    {dish.name}
                </p>
                {/* Dishcription TODO: Platzhalter austauschen */}
                <p className="text-xs font-sofia text-grey">
                    {dish.description}
                </p>
                {/* Price of the dish */}
                <p className="grid grid-cols-2 gap-1 text-base font-sofia font-bold text-red">
                    {priceToLocal(dish.price)}
                </p>
            </div>
            {/* Image of the dish */}
            <img alt={dish.name} className="col-span-1 h-full w-full object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
            {/* More info button */}
            <div className="pr-1 flex justify-center items-center">
                <button className="rounded-lg h-7 w-7 bg-red text-white font-bold flex justify-center items-center text-xs">
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>

        </div>
    )

}