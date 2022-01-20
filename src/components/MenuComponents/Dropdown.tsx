import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { priceToLocal } from '../../services/utilities'
import { Choice, Option } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormikProps } from 'formik';
import { useActions } from '../../overmind';


type PropTypes = {
    choice: Choice
    dropDownOpen: Map<any, any>
    setdropDownOpen: Dispatch<SetStateAction<Map<any, any>>>,
    formik: FormikProps<any>
}

export const Dropdown: React.FunctionComponent<PropTypes> = ({ choice, dropDownOpen, setdropDownOpen, formik }: PropTypes) => {

    const { priceHandler } = useActions().menu

    const handleClick = (option: Option, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setdropDownOpen(new Map(dropDownOpen.set(choice.id, !dropDownOpen.get(choice.id))))
        e.stopPropagation()
        formik.values.choices[currentFormikChoiceIndex].valueId = option.id
        priceHandler(option.price)
    }

    const handleClick2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setdropDownOpen(new Map(dropDownOpen.set(choice.id, !dropDownOpen.get(choice.id))))
        console.log("dropdown open: " + dropDownOpen.get(choice.id))
        console.log(choice.id)
        e.stopPropagation()
    }

    const currentFormikChoice = formik.values.choices.find((current: { id: any; }) => current.id === choice.id)
    const currentFormikChoiceIndex = formik.values.choices.findIndex((current: { id: any; }) => current.id === choice.id)

    return (
        <div className="text-left pr-4 pl-4" style={{ zIndex: 5 }} >
            <div>
                <button type="button" className="flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none " id="menu-button" onClick={(e) => handleClick2(e)}>
                    <div className="flex justify-between w-full pr-4">

                        <p> {choice.options.find(option => option.id === currentFormikChoice.valueId)!.name}</p>
                        <p > {priceToLocal(choice.options.find(option => option.id === currentFormikChoice.valueId)!.price)}</p>
                    </div>

                    <FontAwesomeIcon icon="chevron-down" className="text-chevron mt-1" />
                </button>
            </div>

            {dropDownOpen.get(choice.id) && <div className="origin-top-right mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto h-32 scrollbar-hide focus:outline-none"                                                      >
                <div className="py-1">
                    {choice.options.map(option => (
                        // Eine richtige ID?
                        <div key={option.name} id={`${choice.id}`} className="flex justify-between text-gray-700 px-4 py-2 text-sm hover:bg-gray-100" onClick={(e) => { handleClick(option, e) }}>
                            <p role="menuitem" id={option.name}>{option.name} </p>
                            <p role="menuitem" id={option.name}> {priceToLocal(option.price)}</p>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}
