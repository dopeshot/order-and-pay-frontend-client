import React, { MutableRefObject, useEffect } from "react"
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropTypes = {
    dish: Dish,
    menuItemOpen: boolean,
    setMenuItemOpen: (bool: boolean) => void,
    menuRef: boolean | MutableRefObject<any>,
    menuInViewport: boolean | MutableRefObject<any>,
    setIsOffen: (bool: boolean) => void
}

export const MenuItem: React.FunctionComponent<PropTypes> = ({ menuRef, menuInViewport, dish, menuItemOpen, setMenuItemOpen, setIsOffen }: PropTypes) => {

    useEffect(() => {
        if (!menuInViewport) {
            setMenuItemOpen(false)
            setIsOffen(false)
            console.log(menuItemOpen)
        }
    }, [menuInViewport])

    const choices = dish.choices.map((choice, index) => (
        <div key={index} className="flex flex-col pt-2">
            <div className="self-start font-bold">{choice.name}</div>
            <div className="flex justify-between">{choice.options.map((option, index) => (
                <button key={index}>
                    <div>{option.name}</div>
                    <div>{priceToLocal(option.price)}</div>
                </button>
            ))}</div>
        </div>

    ))
    const allergens = dish.allergens.map((allergen, index) => (

        <div key={index} className="m-3 flex flex-col items-center">
            <div className="h-7 w-7 bg-red text-center rounded-md">
                <FontAwesomeIcon icon="hamburger" className="text-white h-full w-full" />
            </div>
            {allergen}
        </div>
    ))

    return (

        <div id="menuItem" className="overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" onClick={() => setMenuItemOpen(false)} >

            <div className={`container flex flex-col margin75P`} >
                {/*@ts-ignore*/}
                <div ref={menuRef} className={`margin75P bg-white shadow-md rounded-md  `}>
                    <div className="self-start flex flex-col w-full justify-between">
                        <div className="self-start justify-between w-full">
                            <div className="float-left font-bold">{dish.name}</div>
                            <div className="float-right text-red font-bold">{priceToLocal(dish.price)}</div>
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
                    <div id="notes" className="border rounded shadow mb-16 h-24 flex justify-between items-stretch">
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
