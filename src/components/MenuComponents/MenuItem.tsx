import React from "react"
import { Dish } from "../../overmind/menu/state"

type PropTypes = {
    dish: Dish
    menuItemOpen: boolean
}
export const MenuItem: React.FunctionComponent<PropTypes> = ({ dish, menuItemOpen }: PropTypes) => {


    return (
        <div className={`shadow-md rounded-md bg-red transition-opacity duration-500 content-center ${menuItemOpen ? `` : `opacity-0 pointer-events-none`} `} >
            <p> {dish.name}</p>
            <div className="self-start flex flex-col w-full">
                <div className="self-start justify-between w-full">
                    <div className="float-left font-bold">Hamburger</div>
                    <div className="float-right text-red font-bold">5.60€</div>
                </div>
                <div className="self-start text-gray-400">mit Bun, Tomaten und Käse</div>
            </div>
            <div className="self-start font-bold">Allergien</div>
            <div className="self-start font-bold">Wähle deine Größe</div>
            <div className="self-start font-bold">Wähle deine Extras</div>
            <div className="self-start font-bold">Wähle deine Soße</div>
            <div className="self-start font-bold">Notiz an die Küche</div>
        </div>
    )
}