import React, { useState } from "react"
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "../../components/MenuComponents/Dropdown";


type PropTypes = {
    dish: Dish
    menuItemOpen: boolean
    setMenuItemOpen: (bool: boolean) => void


}
export const MenuItem: React.FunctionComponent<PropTypes> = ({ dish, menuItemOpen, setMenuItemOpen }: PropTypes) => {


    const [dropDownOpen, setdropDownOpen] = useState(false)

    const choices = dish.choices.map((choice, index) => (
        <div className="pt-2">
            {/* Backend einen extra Text? */}
            <p> Wähle die {choice.name}</p>
            {choice.type === "multi" && <div className="flex flex-col pt-2">
                <p className="self-start font-bold"> {choice.name}</p>
                <div className="flex flex-col justify-between">{choice.options.map((option) => (
                    <div className="flex  items-center pl-3 pr-3">
                        <input type="checkbox" className="form-checkbox text-red"></input>
                        <div className="flex justify-between w-full pl-3">
                            <div>{option.name}</div>
                            <div>{priceToLocal(option.price)}</div>
                        </div>
                    </div>
                ))}</div>
            </div>}
            {choice.type === "single" && <Dropdown choice={choice} dropDownOpen={dropDownOpen} setdropDownOpen={setdropDownOpen}></Dropdown>}
        </div>))



    const allergens = dish.allergens.map((allergen) => (

        <div className="m-3 flex flex-col items-center">
            <div className="h-7 w-7 bg-red text-center rounded-md">
                <FontAwesomeIcon icon="hamburger" className="text-white h-full w-full" />
            </div>
            {allergen}
        </div>
    ))

    //  {dropDownOpen && <div data-cy="table-bulk-dropdown-background" className="fixed inset-0 h-full w-full z-10" aria-hidden="true" onClick={() => setdropDownOpen(!dropDownOpen)}></div>}

    return (
        <div id="menuItem" className="overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" >
            <div className="bg-menu-bg bg-opacity-50 inset-0 w-full h-full fixed" style={{ zIndex: -1 }} onClick={() => setMenuItemOpen(false)} />
            <div className="container flex flex-col margin75P">
                <div className="w-full" style={{ height: "40rem" }} onClick={() => setMenuItemOpen(false)} />

                <div className="bg-white shadow-md rounded-md pb-64 pl-3 pr-3 pt-3" style={{ zIndex: -0 }} onClick={() => setdropDownOpen(false)} >




                    <div className="flex flex-col"><FontAwesomeIcon icon="minus" className="text-gray-600 fa-2x self-center" /></div>
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
                    {choices}
                    <p className="pt-2 font-bold pb-2">Notiz an die Küche</p>
                    <div id="notes" className="border rounded shadow mb-16 h-24 flex justify-between items-stretch">
                        <p className="pt-2 pl-2 text-gray-400">Platz für Wünsche...</p>
                        <div className="h-full pt-2 pr-2 flex flex-col justify-between">
                            <FontAwesomeIcon icon="edit" className="text-red self-end" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
