import * as React from 'react'
import { useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'



export const Menu: React.FunctionComponent = () => {
    const state = useAppState().menu
    const actions = useActions().menu
    
    const dishes = state.menu.dishes.map(dish => (
    <div>
        <div>
            {dish.name}
        </div>
        <div>
            {dish.price}
        </div>
    </div>
    ))
    
    return (
        <div>
        <button onClick={() => actions.nameChanger( "Wert")}>changename</button>
        <h3 className="text-lg font-bold">{state.name}Menu</h3>
        <div>{dishes}</div>
        </div>
        
    )
}