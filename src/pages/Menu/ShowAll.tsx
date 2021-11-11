import * as React from 'react'
import { useAppState } from '../../overmind';

export const ShowAll : React.FunctionComponent = () =>{

    const state = useAppState().menu

    const categories = state.menu.categories.map(category => (
            
            <div className=" row-span-1 block p-3 rounded-lg text-white bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{backgroundImage:"url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)"}}>
                <div className="text-lg font-semibold">
                    {category.name}
                </div>
                <div className="text-sm text-gray-200">
                    {category.description}
                </div>
            </div>
           
            
        

    ))

    return (
        <div id="page" className="h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            
            <div className="grid grid-rows-6 p-2">
                <div className="row-span-5 grid grid-cols-2 flex-auto  table-row">
                    <h1 className="pt-14 text-4xl pl-2 font-semibold" >Kategorien</h1>
                    <button className="pb-8 pr-3 text-4xl pl-2 text-gray-600 text-right">=</button>
                </div>
            </div>
            
            <div className="flex-auto overflow-y-auto table-row space-y-6 p-6">
                {categories}{categories}{categories}
            </div>
            
        </div>

    )
}