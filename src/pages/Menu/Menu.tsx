import * as React from 'react'
import { useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { Dish } from '../../components/MenuComponents/Dish';
import { Categories } from '../../components/MenuComponents/Categories';




export const Menu: React.FunctionComponent = () => {
    const state = useAppState().menu
    const actions = useActions().menu


    const dishes = state.menu.dishes.map(dish => (
    <div className="">
        <a className="block p-4"><Dish name={dish.name} description={dish.name} price={dish.price} id={5}/></a>
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
            <Dish name={state.menu.dishes[index].name} description={state.menu.dishes[index].name} price={state.menu.dishes[index].price} id={5}/>
        </div>
        ))
        return dishes
    }


    return (
        <div className="h-screen flex grid grid-rows-10 grid-cols-1 border-solid table-auto">
            <div className="grid grid-rows-6">
                <div className="row-span-2 flex-auto overflow-hidden table-row"></div>
                <div className="row-span-1 flex justify-center"><Searchbar/></div>
                <div className="grid grid-cols-2">
                    <div className="pt-4 text-2xl pl-2 font-semibold">Kategorien</div>
                    <div className="pt-7 text-sm text-right pr-5 text-green-400 font-bold">Alle Anzeigen</div>
                </div>
                         
                <div className=" row-span-3 flex-auto overflow-hidden table-row"> <Categories/> </div>
            </div>
            <div className="p-4 row-span-4 flex-auto overflow-y-auto table-row">{categories}</div>
            <div className="grid grid-cols-2 flex-auto flex-grow overflow-hidden table-row place-content-evenly">
                <div className="flex flex-auto place-self-center"><button className="menuButton h-auto" id="leftButton">Bestellung anzeigen</button></div>
                <div className="flex flex-auto place-self-center"><button className="menuButton h-auto" id="rightButton">Für XXX bestellen</button></div>
            </div>
        </div>

    )
}