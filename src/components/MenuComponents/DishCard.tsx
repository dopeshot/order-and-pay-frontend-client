
import React, {Component} from 'react'
import { Context } from '../../overmind'
import { Dish } from '../../overmind/menu/state'


// Defines the properties of the dishcard 
type DishProps = {
    dish : Dish
    
}

// Dish items with limited information that are shown in the menu view
export const DishCard : React.FunctionComponent<DishProps> = ({dish}) =>  {

    function priceToLocal(price : number)   {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price/100)
    }

    return (
          <div className="grid grid-cols-5 gap-2 pl-4">
            <div className="col-span-3">
                {/* Name of the dish */}
                <div className="text-lg font-semibold">
                    {dish.name}
                </div>
                {/* Dishcription TODO: Platzhalter austauschen */}
                <div className="text-xs text-gray-600">
                    {dish.description}
                </div>
                {/* Price of the dish */}
                <div className="grid grid-cols-2 gap-1 text-lg font-semibold text-green-400">
                    {priceToLocal(dish.price)}
                </div>
            </div>
                {/* Image of the dish */}
                <img className="col-span-1 h-full w-full object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
                {/* More info button */}
            <div className="pr-1 flex justify-center items-center">
                <button className="rounded-lg h-7 w-7 bg-green-400 text-white font-bold flex justify-center">+</button>
            </div>
        </div>
    )
    
    
    
}