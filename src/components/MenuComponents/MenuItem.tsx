import React from "react"
import { Dish } from "../../overmind/menu/state"

type PropTypes = {
    dish: Dish
    menuItemOpen: boolean
}
export const MenuItem: React.FunctionComponent<PropTypes> = ({ dish, menuItemOpen }: PropTypes) => {


    return (
        <div className={`flex fixed bg-white transition-opacity duration-200 content-center w-full ${menuItemOpen ? `` : `opacity-0 pointer-events-none`} `} >
            <p> {dish.name}</p>
        </div>
    )
}