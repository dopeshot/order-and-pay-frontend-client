import * as React from 'react'
import { useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'



export const Menu: React.FunctionComponent = () => {
    const state = useAppState().menu
    const actions = useActions().menu

    
    const dishes = state.menu.dishes.map(dish => (
    <div className= 'carousel-item'>
        <div>
            {dish.name}
        </div>
        <div>
            {dish.price}
        </div>
    </div>
    ))

    const categories = state.menu.categories.map(category => (
       <div>
           
            <div className="shadow-md rounded-md overflow-hidden text-xl b-2">
                 {category.name}
            </div>
        </div>
      ))
    
    return (
        <div>
        <button onClick={() => actions.nameChanger( "Wert")}>changename</button>
        <h3 className="text-lg font-bold">{state.name}Menu</h3>
        <div className="">
            <div>
                <h4 className="text-xl font-semibold b-2">Category</h4>
                <div className= 'grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row'>{categories}</div> 
            </div>
        </div>
 
            
        <div>{dishes}</div>
       
        </div>
        
    )
}