import React from "react"
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropTypes = {
    dish: Dish
    menuItemOpen: boolean
    setMenuItemOpen: (bool: boolean) => void
}
export const MenuItem: React.FunctionComponent<PropTypes> = ({ dish, menuItemOpen, setMenuItemOpen }: PropTypes) => {

    const choices = dish.choices.map((choice, index) => (
        <div className="flex flex-col pt-2">
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

        <div className="m-3 flex flex-col items-center">
            <div className="h-7 w-7 bg-red text-center rounded-md">
                <FontAwesomeIcon icon="hamburger" className="text-white h-full w-full" />
            </div>
            {allergen}
        </div>
    ))

    return (
        <div className="overflow-y-auto w-full left-0 fixed bottom-0 flex flex-col h-full justify-end" onClick={() => setMenuItemOpen(false)} >
            <div className={`bg-white flex flex-col shadow-md rounded-md h-1/2 w-full overflow-y-auto justify-end pb-16`} >
                <div className="px-4 pt-3 overflow-y-auto">
                    <div className="self-start flex flex-col w-full pt-2">
                        <div className="self-start justify-between w-full">
                            <div className="float-left font-bold text-xl">{dish.name}</div>
                            <div className="float-right text-red font-bold text-xl">{priceToLocal(dish.price)}</div>
                        </div>
                        <div className="self-start text-gray-400">{dish.description}</div>
                    </div>
                    <p className="pt-2 font-bold">Allergien</p>
                    <div className="flex overflow-x-auto">
                        {allergens}
                    </div>
                    <div className="pt-2">
                        {choices}
                    </div>
                    <p className="pt-2 font-bold pb-2">Notiz an die Küche</p>
                    <div className="border rounded shadow h-24 flex justify-between items-stretch">
                        <p className="pt-2 pl-2 text-gray-400">Platz für Wünsche...</p>
                        <div className="h-full pt-2 pr-2 flex flex-col justify-between">
                            <FontAwesomeIcon icon="hamburger" className="text-red self-end" />
                            <p className="text-xs">edited: 69:69</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
