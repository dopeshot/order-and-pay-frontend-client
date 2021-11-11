
import React, {Component} from 'react'
import { Context } from '../../overmind'
import { Dish } from '../../overmind/menu/state'
import { priceToLocal } from '../../services/utilities'


// Defines the properties of the dishcard 
type DishProps = {
    dish : Dish
}

// Dish items with limited information that are shown in the menu view
export const DishCard : React.FunctionComponent<DishProps> = ({dish}) =>  {

    return (
          <div className="grid grid-cols-5 gap-2 pl-4" id="dishCard">
            <div className="col-span-3">
                {/* Name of the dish */}
                <p className="text-lg font-semibold">
                    {dish.name}
                </p>
                {/* Dishcription TODO: Platzhalter austauschen */}
                <p className="text-xs text-gray-600">
                    {dish.description}
                </p>
                {/* Price of the dish */}
                <p className="grid grid-cols-2 gap-1 text-lg font-semibold text-green-400">
                    {priceToLocal(dish.price)}
                </p>
            </div>
                {/* Image of the dish */}
                <img alt={dish.name} className="col-span-1 h-full w-full object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
                {/* More info button */}
            <div className="pr-1 flex justify-center items-center">
                <button className="rounded-lg h-7 w-7 bg-green-400 text-white font-bold flex justify-center">+</button>
            </div>
        </div>
    )
    
    
    
}