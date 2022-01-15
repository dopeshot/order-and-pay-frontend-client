import React, { useState } from 'react';
import { priceToLocal } from '../../services/utilities'
import { Choice, Option } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { drop } from 'cypress/types/lodash';
import { Event, event } from 'cypress/types/jquery';


type PropTypes = {
    choice: Choice
    dropDownOpen: boolean
    setdropDownOpen: (bool: boolean) => void


}
export const Dropdown: React.FunctionComponent<PropTypes> = ({ choice, dropDownOpen, setdropDownOpen }: PropTypes) => {


    const [singleChoice, setSingleChoice] = useState(choice.options[0])


    const handleClick = (option: Option, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setdropDownOpen(!dropDownOpen)
        setSingleChoice(option)
        e.stopPropagation()
    }

    const handleClick2 = (option: Option, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setdropDownOpen(!dropDownOpen)
        setSingleChoice(option)
        e.stopPropagation()
    }

    //  {dropDownOpen && <div data-cy="table-bulk-dropdown-background" className=" bg-red fixed inset-0 h-full w-full " style={{ zIndex: -1 }} aria-hidden="true" onClick={() => setdropDownOpen(!dropDownOpen)}></div>}
    return (

        <div className="text-left pr-4 pl-4" style={{ zIndex: 5 }} >
            <div>
                <button type="button" className="flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none " id="menu-button" onClick={(e) => handleClick2(singleChoice, e)}>
                    <div className="flex justify-between w-full pr-4">
                        <p> {singleChoice.name}</p>
                        <p > {priceToLocal(singleChoice.price)}</p>
                    </div>

                    <FontAwesomeIcon icon="chevron-down" className="text-chevron mt-1" />
                </button>
            </div>


            {dropDownOpen && <div className=" origin-top-right mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto h-32 scrollbar-hide focus:outline-none"                                                      >
                <div className="py-1 " >
                    {choice.options.map(option => (
                        <div className=' flex justify-between text-gray-700  px-4 py-2 text-sm  hover:bg-gray-100' onClick={(e) => handleClick(option, e)}>
                            <p role="menuitem" id={option.name}>{option.name} </p>
                            <p role="menuitem" id={option.name}> {priceToLocal(option.price)}</p>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}
