import * as React from 'react'
import { useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { DishCard } from '../../components/MenuComponents/DishCard';
import { Categories } from '../../components/MenuComponents/Categories';




export const Menu: React.FunctionComponent = () => {
    const state = useAppState().menu
    const actions = useActions().menu


    const dishes = state.menu.dishes.map(dish => (
    <div className="">
        <a className="block p-4"><DishCard dish={dish} state={state} actions={actions}/></a>
    </div>
    
    ))

    const categories = state.menu.categories.map(category =>(
        <div>
            {category.name}
            {dishIndexMap(category)}
        </div>

    ))

    function dishIndexMap(category: any){
        //@ts-ignore
        const dishes = category.dishIndex.map(index =>(
        <div className="block p-2">
            <DishCard dish={state.menu.dishes[index]} state={state} actions={actions}/>
        </div>
        ))
        return dishes
    }


    return (
        <div className="h-screen flex grid grid-rows-10 grid-cols-1 border-solid table-auto">
            <div className="grid grid-rows-6">
                <div className="row-span-2 grid grid-cols-2 flex-auto overflow-hidden table-row">
                    <div className="pt-14 text-4xl pl-2 font-semibold" >Menü</div>
                    <button className="pb-8 pr-3 text-4xl pl-2 text-gray-600 text-right">=</button>
                </div>
                <div className="pt-4 row-span-1 flex justify-center"><Searchbar/></div>
                <div className="grid grid-cols-2">
                    <div className="pt-4 text-2xl pl-2 font-semibold">Kategorien</div>
                    <div className="pt-7 text-sm text-right pr-5 text-green-400 font-bold">Alle Anzeigen</div>
                </div>
                         
                <div className=" row-span-3 flex-auto overflow-hidden table-row"> <Categories/> </div>
            </div>
            <div className="p-4 row-span-4 flex-auto overflow-y-auto table-row">{categories}</div>
            <div className="grid grid-cols-2 flex-auto flex-grow overflow-hidden table-row place-content-evenly">
                <div className="flex flex-auto place-self-center"><button className="menuButton h-auto" id="leftButton">Bestellung anzeigen</button></div>
                <div className="flex flex-auto place-self-center"><button className="menuButton h-auto" id="rightButton">Für {actions.getPrice()} bestellen</button></div>
            </div>
        </div>

    )
}