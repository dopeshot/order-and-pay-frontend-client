import React, { MutableRefObject, useEffect, useState } from "react"
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities'
import { Dish } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "../../components/MenuComponents/Dropdown";
import { DishButton } from '../../components/MenuComponents/DishButton';
import { FormError } from "../../components/MenuComponents/FormError";
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as yup from 'yup'
import { values } from "cypress/types/lodash";



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


    const initialValues = {
        dishid: dish._id,
        singleChoices: dish.choices.find(choice => choice.type === "single")!.options[0],  // Änderung mit .find(id===xxx)
        multiChoices: '',
        note: '',
        count: 1
    }

    const countSchema = yup.object().shape({
        count: yup.number().min(1, "Dish count must be greater than 1"),
        note: yup.string().max(240, "Note cannot be greater than 240")
    })

    const submitForm = (values: any) => {
        console.log(values)
    }


    const [dropDownOpen, setdropDownOpen] = useState(false)
    const [isTextArea, setisTextArea] = useState(false)


    // const choices = dish.choices.map((choice, index) => (
    //     <div className="">
    //         {/* Backend einen extra Text? */}
    //         <p className="self-start font-bold pb-3 pt-2">{choice.name}</p>
    //         {choice.type === "multi" && <div className="flex flex-col">
    //             <div className="flex flex-col justify-between">{choice.options.map((option) => (
    //                 <div className="flex items-center pl-3 pr-3">
    //                     <input type="checkbox" className="form-checkbox"></input>
    //                     <div className="flex justify-between w-full pl-3">
    //                         <div>{option.name}</div>
    //                         <div>{priceToLocal(option.price)}</div>
    //                     </div>
    //                 </div>
    //             ))}</div>
    //         </div>}
    //         {choice.type === "single" && <Dropdown choice={choice} dropDownOpen={dropDownOpen} setdropDownOpen={setdropDownOpen} formik={formik}></Dropdown>}
    //     </div>)
    //)

    const allergens = dish.allergens.map((allergen) => (
        <div className="m-3 flex flex-col items-center">
            <div className="h-7 w-7 bg-red text-center rounded-md">
                <FontAwesomeIcon icon="hamburger" className="text-white h-full w-full" />
            </div>
            {allergen}
        </div>
    ))

    const handler = () => {
        setisTextArea(!isTextArea)
    }



    return (
        <div id="menuItem" className="overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" >
            <Formik initialValues={initialValues} validationSchema={countSchema} onSubmit={submitForm}>
                {(formik) => (
                    <Form>

                        <div className="bg-menu-bg bg-opacity-50 inset-0 w-full h-full fixed" style={{ zIndex: -1 }} onClick={() => setMenuItemOpen(false)} />

                        <div className="container flex flex-col margin75P">
                            <div className="w-full" style={{ height: "40rem" }} onClick={() => setMenuItemOpen(false)} />

                            {/*@ts-ignore*/}
                            <div ref={menuRef} className="bg-white shadow-md rounded-3xl" style={{ zIndex: -0 }} onClick={() => setdropDownOpen(false)}>
                                {dish.img !== "" && dish.img ?
                                    <div className="flex flex-col h-full w-full justify-items-center relative rounded-3xl pb-7">
                                        <div className="flex flex-col absolute self-center"><FontAwesomeIcon icon="minus" className="text-white fa-2x self-center" /></div>
                                        <img className="w-full h-full rounded-t-3xl object-fill" src={dish.img}></img>
                                    </div> : <div className="flex flex-col"><FontAwesomeIcon icon="minus" className="text-gray-600 fa-2x self-center" /></div>}
                                <div className="pl-3 pr-3 pt-3">
                                    <div className="self-start flex flex-col w-full justify-between pb-3">
                                        <div className="self-start justify-between w-full">
                                            <div className="float-left font-bold text-xl">{dish.name}</div>
                                            <div className="float-right text-red font-bold text-xl">{priceToLocal(dish.price)}</div>
                                        </div>
                                        <div className="self-start text-gray-400">{dish.description}</div>
                                    </div>
                                    <p className="pt-2 font-bold">Allergien</p>
                                    <div className="flex overflow-x-auto pb-2">
                                        {allergens}
                                    </div>



                                    {dish.choices.map((choice) => (
                                        <div className="">
                                            {/* Backend einen extra Text? */}
                                            <p className="self-start font-bold pb-3 pt-2">{choice.name}</p>
                                            {choice.type === "multi" && <div className="flex flex-col">
                                                <div className="flex flex-col justify-between">{choice.options.map((option) => (
                                                    <div className="flex items-center pl-3 pr-3">
                                                        <input type="checkbox" className="form-checkbox"></input>
                                                        <div className="flex justify-between w-full pl-3">
                                                            <div>{option.name}</div>
                                                            <div>{priceToLocal(option.price)}</div>
                                                        </div>
                                                    </div>
                                                ))}</div>
                                            </div>}
                                            {choice.type === "single" && <Dropdown choice={choice} dropDownOpen={dropDownOpen} setdropDownOpen={setdropDownOpen} formik={formik}></Dropdown>}
                                        </div>)
                                    )}
                                    <p className="font-bold pb-4 pt-3">Notiz an die Küche</p>


                                    {isTextArea ?
                                        <Field component='textarea' name='note' type='text' className={`h-24  form-control w-full px-3 py-1.5 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none ${formik.errors.note && formik.touched.note ? 'bg-error-bg border border-error-text focus:border-error-text' : ''}`} id="exampleFormControlTextarea1" rows={3} placeholder="Hier werden Wünsche wahr..." />
                                        :
                                        <div id="notes" className="border rounded shadow mb-16 h-24 flex justify-between items-stretch">
                                            <p className="pt-2 pl-2 text-gray-400">Platz für Wünsche...</p>
                                            <div className="h-full pt-2 pr-2 flex flex-col justify-between">
                                                <button onClick={() => handler()}><FontAwesomeIcon icon="edit" className="text-red self-end" /></button>
                                            </div>
                                        </div>}

                                    <div className="mb-24">
                                        <FormError dataCy="note-input-error" field='note' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DishButton formik={formik} />
                    </Form>

                )}

            </Formik>
        </div >
    )
}
