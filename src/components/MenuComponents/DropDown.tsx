import { Link } from "react-router-dom"
import {Dish} from "./Dish"
import { useActions, useAppState } from '../../overmind'


export const DropDown: React.FunctionComponent = () => {
    const state = useAppState().menu
    return (
        <div className="shadow-md mt-6 absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg h-70"style={{width:'95vw',height:'70vh',position: 'fixed'}}>
           <a className="block p-4"><Dish name={state.menu.dishes[0].name} description={state.menu.dishes[0].name} price={state.menu.dishes[0].price} id={5}/></a>
           <a className="block p-4"><Dish name={state.menu.dishes[0].name} description={state.menu.dishes[0].name} price={state.menu.dishes[0].price} id={5}/></a>
           <a className="block p-4"><Dish name={state.menu.dishes[0].name} description={state.menu.dishes[0].name} price={state.menu.dishes[0].price} id={5}/></a>
        </div>
    )
}