import * as React from 'react'
import { useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { Dish } from '../../components/MenuComponents/Dish';




export const Menu: React.FunctionComponent = () => {
    const state = useAppState().menu
    const actions = useActions().menu
    
    const dishes = state.menu.dishes.map(dish => (
    <div className="">
        <a className="block p-4"><Dish name={dish.name} description={dish.name} price={dish.price} id={5}/></a>
    </div>
    ))
    

    return ( 
        <div className="h-screen flex grid grid-rows-6 grid-cols-1 border-solid table-auto">
            <div>
                <div className="row-span-1 flex-auto overflow-hidden table-row">Menu</div>
                <div className="flex justify-center"><Searchbar/></div>
                <div className="flex-auto overflow-hidden table-row">Categories</div>
            </div>
            <div className="row-span-4 flex-auto overflow-y-auto table-row">{dishes} {dishes} {dishes} {dishes} {dishes}</div>
            <div className="grid grid-cols-2 flex-auto flex-grow overflow-hidden table-row">
                <button className="bg-gray-300 h-auto flex-auto">Bestellung anzeigen</button>
                <button className="bg-gray-300 flex-auto">Für XXX bestellen</button>
                </div>

   
        </div>
        
    )
}