import * as React from 'react'
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { Categories } from '../../components/MenuComponents/Categories';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { Link } from "react-router-dom"
import { useRef } from 'react';
import { useAppState } from '../../overmind';



export const Menu: React.FunctionComponent = () => {


    const state = useAppState().menu



    return (
        <div id="page" className="h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div className="grid grid-rows-6 p-2">
                <div className="row-span-2 grid grid-cols-2 flex-auto overflow-hidden table-row">
                    <h1 className="pt-14 text-4xl pl-2 font-semibold" >Menü</h1>
                    <button className="pb-8 pr-3 text-4xl pl-2 text-gray-600 text-right">=</button>
                </div>
                <div className="pt-4 row-span-1 flex justify-center"><Searchbar /></div>
                <div className="grid grid-cols-2">
                    <h2 className="pt-4 text-2xl pl-2 font-semibold">Kategorien</h2>
                    <Link id="showAll" to="/categories" className="pt-7 text-sm text-right pr-5 text-red font-bold">Alle Anzeigen</Link>
                </div>

                <div className=" row-span-3 flex-auto overflow-hidden table-row"> <Categories /> </div>
            </div>
            <div className="flex-auto overflow-y-auto table-row"><MenuComponent/></div>
                <div className="menuButton h-auto bg-red text-white rounded-lg text-center text-sm py-4 px-8 my-4 mx-2 cursor-pointer grid grid-cols-3">
                    <p className="fas fa-circle cols-span-1 text-left"></p>
                    <button className="cols-span-1 text-left">Warenkorb anzeigen</button>
                    <p className="text-right">5,60 €</p>
                </div>
        </div>

    )
}