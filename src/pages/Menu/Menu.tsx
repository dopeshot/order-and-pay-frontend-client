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
                <button className="menuButton bg-red bg-cover text-white h-16 grid grid-cols-5 flex items-center shadow-2xl" style={{boxShadow: "0px 10px 25px 10px rgb(245,85,85)"}}>
                    <div className="flex justify-center">
                    <p className="cols-span-1 text-red bg-white rounded-full pb-1 font-semibold w-7 h-7 flex items-center justify-center text-center">2</p>
                    </div>
                    <p className="col-start-2 col-span-3 font-semibold">Warenkorb anzeigen</p>
                    <div className="flex justify-center">
                    <p className="text-right font-semibold cols-span-1">5,60 €</p>
                    </div>
                </button>
        </div>

    )
}