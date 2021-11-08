
import React, {Component} from 'react'
import { Context } from '../../overmind'
import { Dish } from '../../overmind/menu/state'

type DishProps = {
    name: string,
    price: number
}

export const DishCard : React.FunctionComponent<DishProps> = ({name, price}) =>  {

    return (
      <div className="pl-4" >
          
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3">
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-xs text-gray-600">{name} schmeckt meistens ganz lecker</div>
                <div className="grid grid-cols-2 gap-1">
                    <div className="text-lg font-semibold text-green-400">{price}€</div>
                </div>
            </div>
            <div className="col-span-1">
                <img className="h-full w-full object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
            </div>
            <div className="pr-1 flex justify-center items-center">
                <button className="rounded-lg h-7 w-7 bg-green-400 text-white font-bold flex justify-center">
                    +
                </button>
            </div>
            </div>
       
      </div>
      
    )
    
    
    
}