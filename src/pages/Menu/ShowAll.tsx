import * as React from 'react'
import { useAppState } from '../../overmind';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ShowAll: React.FunctionComponent = () => {

    const state = useAppState().menu

    const categories = state.menu.categories.map((category, index) => (

        <HashLink key={category._id + "_showAll"} id={"hashLink_" + index} to={`/menu#${'section-' +(index +1 )}`} className=" grid grid-cols-6 row-span-1 block p-3 rounded-lg text-white bg-cover bg-gray-400 bg-blend-multiply bg-left shadow-whiteBox" style={{ backgroundImage: "url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)" }}>

            <div className="col-span-1 flex items-center justify-center pr-2 text-2xl">
                <FontAwesomeIcon icon="hamburger" />
            </div>
            <div className="col-span-4">
                <p className="text-lg font-semibold">
                    {category.name}
                </p>
                <p className="text-sm font-thin whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {category.description}
                </p>
            </div>
            <div className="col-span-1 flex items-center justify-center pr-2 text-2xl">
                <FontAwesomeIcon icon="chevron-right" />
            </div>
        </HashLink>
    ))

    return (
        <div id="page" className="h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div className= "position:sticky">
                <div className="flow-root">
                <button className="float-left p-4 pl-4 text-2xl  text-left">
                    <Link id="mainMenu" to="/menu" ><FontAwesomeIcon icon="chevron-left" /></Link>
                </button>
                <button className="float-right p-4 text-2xl pr-6 text-right">
                    <FontAwesomeIcon icon="bars" />
                </button>
            </div>
            <div className="pb-5 row-start-2 row-span-1">
                <h1 className="text-4xl pl-4 font-bold " >Kategorien</h1>
            </div>
            </div>
            


            <div id="categoryHashlinks" className="row-span-8 row-start-3 flex-auto overflow-y-auto scrollbar-hide table-row space-y-6 p-6 pt-2 pl-4 ">
                {categories}
            </div>
        </div>

    )
}