import * as React from 'react'
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { Categories } from '../../components/MenuComponents/Categories';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { useAppState } from '../../overmind';
import { Link } from 'react-router-dom';
import { DishCard } from '../../components/MenuComponents/DishCard';

export const ShowAll : React.FunctionComponent = () =>{

    const state = useAppState().menu

    const categories = state.menu.categories.map(category => (
        <div className="grid grid-rows-2">
            <div className=" row-span-1 block p-3 text-white bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{backgroundImage:"url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)"}}>
                <div className="text-lg font-semibold">
                    {category.name}
                </div>
                <div className="text-sm text-gray-200">
                    {category.name}n gibts nur wenn man auch was richtiges isst!
                </div>
            </div>
            </div>
        

    ))

    return (
        <div className="h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div className="grid grid-rows-3">
                <div className="row-span-2 grid grid-cols-2 flex-auto table-row">
                    <div className="pt-14 text-4xl pl-2 font-semibold" >Kategorien</div>
                    <button className="pb-8 pr-3 text-4xl pl-2 text-gray-600 text-right">=</button>
                </div>
            </div>
            <div className="flex-auto overflow-y-auto table-row">{categories}{categories}{categories}</div>
            <div className="row-span-1 grid grid-cols-2 table-row place-content-evenly flex flex-auto place-self-center ">
                <button className="menuButton h-auto rounded-lg text-green-400 text-center text-sm border border-solid border-green-400 py-4 px-8 my-4 mx-2 cursor-pointer">Bestellung anzeigen</button>
                <button className="menuButton h-auto bg-green-400 text-white rounded-lg text-center text-sm py-4 px-8 my-4 mx-2 cursor-pointer">Für zu viel geld bestellen</button>
            </div>
        </div>

    )
}