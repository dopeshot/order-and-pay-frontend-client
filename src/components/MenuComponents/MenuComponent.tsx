import React, {Component} from 'react'
import { useActions, useAppState } from '../../overmind'
import { DishCard } from '../../components/MenuComponents/DishCard';

export const MenuComponent: React.FunctionComponent = () => {

    const state = useAppState().menu
    

    const categories = state.menu.categories.map(category => (
        <div className="grid grid-rows-2 pt-2">
            <div className="row-span-1 grid grid-rows-2 gap-2 p-3 text-white h-4/5 bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{backgroundImage:"url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)"}}>
                <div className="text-lg font-semibold">
                    {category.name}
                </div>
                <div className="text-sm text-gray-200">
                    {category.name}n gibts nur wenn man auch was richtiges isst!
                </div>
            </div>
            
            {dishIndexMap(category)}
        </div>

    ))

    function dishIndexMap(category: any) {
        
        const dishes = category.dishIndex.map((index : number) => (
            <div className="block pb-2">
                <DishCard name={state.menu.dishes[index].name} price={state.menu.dishes[index].price} />
            </div>
        ))
        return dishes
    }

    return(
        <div>{categories}</div>
        

    )

}