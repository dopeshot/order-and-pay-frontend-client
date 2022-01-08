import React, { useState } from 'react';
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type PropTypes = {
    dish: Dish

}
export const Dropdown: React.FunctionComponent<PropTypes> = ({ dish }: PropTypes) => {

    const choices = dish.choices.filter(choice => choice.type == 'single')
    const [dropDownOpen, setdropDownOpen] = useState(false)

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" className="flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none " id="menu-button" onClick={() => setdropDownOpen(true)}>
                    Options
                    <FontAwesomeIcon icon="chevron-down" className="text-chevron mt-1" />
                </button>
            </div>

            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">

                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Klein</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Mittel</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Groß</a>

                </div>
            </div>

        </div>
    )
}
