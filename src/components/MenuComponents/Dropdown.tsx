import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { priceHandler } from '../../overmind/menu/actions'
import { priceToLocal } from '../../services/utilities'
import { Choice, Option } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { drop } from 'cypress/types/lodash';
import { Event, event } from 'cypress/types/jquery';
import { FormikProps } from 'formik';




type PropTypes = {
    choice: Choice
    dropDownOpen: Map<any, any>
    setdropDownOpen: Dispatch<SetStateAction<Map<any, any>>>
    currentPrice: number,
    //checkBoxHandler: (payload: { id: string; currentPrice: number; }) => void
    // singleChoice: Option
    // setSingleChoice: (option: Option) => void , singleChoice, setSingleChoice
    formik: FormikProps<any>


}
export const Dropdown: React.FunctionComponent<PropTypes> = ({ choice, dropDownOpen, setdropDownOpen, currentPrice, formik }: PropTypes) => {

    const handleClick = (option: Option, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setdropDownOpen(new Map(dropDownOpen.set(choice.id, !dropDownOpen.get(choice.id))))
        e.stopPropagation()
        formik.setFieldValue('choices.singleChoices', option)
    }

    const handleClick2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setdropDownOpen(new Map(dropDownOpen.set(choice.id, !dropDownOpen.get(choice.id))))
        console.log("dropdown open: " + dropDownOpen.get(choice.id))
        console.log(choice.id)
        e.stopPropagation()
    }

    return (
        <div className="text-left pr-4 pl-4" style={{ zIndex: 5 }} >
            <div>
                <button type="button" className="flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none " id="menu-button" onClick={(e) => handleClick2(e)}>
                    <div className="flex justify-between w-full pr-4">
                        <p> {formik.values.choices.singleChoices.name}</p>
                        <p > {priceToLocal(formik.values.choices.singleChoices.price)}</p>
                    </div>

                    <FontAwesomeIcon icon="chevron-down" className="text-chevron mt-1" />
                </button>
            </div>

            {dropDownOpen.get(choice.id) && <div className=" origin-top-right mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto h-32 scrollbar-hide focus:outline-none"                                                      >
                <div className="py-1 " >
                    {choice.options.map(option => (
                        // Eine richtige ID?
                        <div key={option.name} id={`${choice.id}`} className=' flex justify-between text-gray-700  px-4 py-2 text-sm  hover:bg-gray-100' onClick={(e) => {
                            handleClick(option, e)
                        }}>
                            <p role="menuitem" id={option.name}>{option.name} </p>
                            <p role="menuitem" id={option.name}> {priceToLocal(option.price)}</p>

                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}
