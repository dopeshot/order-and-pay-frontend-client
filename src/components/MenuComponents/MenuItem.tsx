import React from "react"
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropTypes = {
    dish: Dish
    menuItemOpen: boolean
}
export const MenuItem: React.FunctionComponent<PropTypes> = ({ dish, menuItemOpen }: PropTypes) => {

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
    const allergens = dish.allergens.map(allergen => (
        <div className="m-3"><FontAwesomeIcon icon="hamburger" />
            {allergen}
        </div>

    ))

    return (
        <div className={`flex flex-col shadow-md overflow-scroll rounded-md bg-red transition-opacity duration-500 content-center w-full ${menuItemOpen ? `` : `opacity-0 pointer-events-none`} `} >
            <div className="self-start flex flex-col w-full justify-between">
                <div className="self-start justify-between w-full">
                    <div className="float-left text-white font-bold">{dish.name}</div>
                    <div className="float-right text-white font-bold">{priceToLocal(dish.price)}</div>
                </div>
                <div className="self-start text-gray-400">{dish.description}</div>
                <div id="allergens">
                    <div>
                        Allergene
                    </div>
                    <div className="flex items-center">
                        {allergens}
                    </div>
                </div>
            </div>
            {choices}{choices}{choices}{choices}{choices}
        </div>
    )
}