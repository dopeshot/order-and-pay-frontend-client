import { Link } from "react-router-dom"
import {DishCard} from "./DishCard"
import { useActions, useAppState } from '../../overmind'


export const DropDown: React.FunctionComponent = () => {
    const state = useAppState().menu
    const actions = useActions().menu
    return (
        <div className="shadow-md mt-6 absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg "style={{width:'95vw',height:'70vh',position: 'fixed'}}>
           <a className="block p-4"><DishCard dish={state.menu.dishes[0]} state = {state} actions = {actions} /></a>
           <a className="block p-4"><DishCard dish={state.menu.dishes[0]} state = {state} actions = {actions}/></a>
           <a className="block p-4"><DishCard dish={state.menu.dishes[0]} state = {state} actions = {actions}/></a>
           <div className="" style={{position: 'absolute',top: '98%',left: '50%',transform: 'translate(-50%, -50%)'}}>
           <button onClick={actions.closeDropDown} className="bg-white shadow-md rounded-full w-12 h-12 ">/\
           </button>
           </div>
        </div>
    )
}