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

    const categories = state.menu.categories.map(category => (
        <div>

            <div className="shadow-md rounded-md overflow-hidden text-xl b-2">
                {category.name}
            </div>
        </div>
    ))


    return (
        <div className="h-screen flex grid grid-rows-6 grid-cols-1 border-solid table-auto">
            <div className="grid grid-rows-3">
                <div className="row-span-1 flex-auto overflow-hidden table-row">Menu</div>
                <div className="flex justify-center"><Searchbar/></div>
                <div className="flex-auto overflow-hidden table-row">Categories</div>
            </div>
            <div className="row-span-4 flex-auto overflow-y-auto table-row">{dishes} {dishes} {dishes} {dishes} {dishes}</div>
            <div className="grid grid-cols-2 flex-auto flex-grow overflow-hidden table-row place-content-evenly">
                <div className="flex flex-auto place-self-center"><button className="menuButton h-auto" id="leftButton">Bestellung anzeigen</button></div>
                <div className="flex flex-auto place-self-center"><button className="menuButton h-auto" id="rightButton">Für XXX bestellen</button></div>
            </div>
        </div>

    )
}