import * as React from 'react'
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { Categories } from '../../components/MenuComponents/Categories';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"



export const Menu: React.FunctionComponent = () => {






    return (
        <div id="page" className="container h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div className="grid grid-rows-6 p-2">
                <div className="row-span-2 grid grid-cols-2 flex-auto overflow-hidden table-row">
                    <h1 className="font-sofia font-bold pt-14 text-4xl pl-2 " >Menü</h1>
                    <button className="pb-8 pr-3 text-2xl text-right">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </div>
                <div id="searchbar" className="pt-4 row-span-1 flex justify-center"><Searchbar /></div>
                <div className="grid grid-cols-2">
                    <h2 className="font-sofia font-bold pt-4 text-2xl pl-2 ">Kategorien</h2>
                    <Link id="showAll" to="/categories" className="text-red font-sofia font-bold pt-7 text-sm text-right pr-5 ">Alle Anzeigen</Link>
                </div>

                <div id="categories" className=" row-span-3 flex-auto overflow-hidden table-row pt-4"> <Categories /> </div>
            </div>
            <div id="menuComponent" className="flex-auto overflow-y-auto table-row"><MenuComponent/></div>
                <OrderButton />
        </div>

    )
}