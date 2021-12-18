import React from "react"
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"

type PropTypes = {
    dish: Dish
    menuItemOpen: boolean
    setMenuItemOpen: (bool: boolean) => void
}
export const MenuItem: React.FunctionComponent<PropTypes> = ({ dish, menuItemOpen, setMenuItemOpen }: PropTypes) => {

    const choices = dish.choices.map((choice, index) => (
        <div className="flex flex-col">
            <div className="self-start font-bold">{choice.name}</div>
            <div className="flex justify-between">{choice.options.map((option) => (
                <button>
                    <div>{option.name}</div>
                    <div>{priceToLocal(option.price)}</div>
                </button>
            ))}</div>
        </div>

    ))

    return (
        <div id="menuItem" className=" overflow-y-auto w-full h-full left-0 fixed bottom-0" onClick={() => setMenuItemOpen(false)} >
            <div className={`container mt-64 flex flex-col shadow-md rounded-md bg-red transition-opacity duration-500 content-center w-full ${menuItemOpen ? `` : `opacity-0 pointer-events-none`} `} >
                <div className="self-start flex flex-col w-full justify-between">
                    <div className="self-start justify-between w-full">
                        <div className="float-left font-bold">{dish.name}</div>
                        <div className="float-right text-red font-bold">{priceToLocal(dish.price)}</div>
                    </div>
                    <div className="self-start text-gray-400">{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}{dish.description}</div>
                </div>
                {choices}
            </div>
        </div>
    )
}