import React, { MutableRefObject, useEffect, useState } from "react"
import { priceToLocal } from '../../services/utilities'
import { Dish, ChoiceType, Category } from "../../overmind/menu/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DishButton } from '../../components/MenuComponents/DishButton';
import { Choices } from "../../components/MenuComponents/Choices";
import { FormError } from "../../components/MenuComponents/FormError";
import { Field, Form, Formik } from "formik"
import * as yup from 'yup'
import { useActions } from "../../overmind";
import { Item, PickedCheckbox } from "../../overmind/basket/state";


type PropTypes = {
    dish: Dish,
    category: Category,
    menuItemOpen: boolean,
    setMenuItemOpen: (bool: boolean) => void,
    menuRef: boolean | MutableRefObject<any>,
    menuInViewport: boolean | MutableRefObject<any>
}

export const MenuItem: React.FunctionComponent<PropTypes> = ({ menuRef, menuInViewport, dish, category, setMenuItemOpen }: PropTypes) => {
    // const { checkboxHandler } = useActions().menu

    const { putInBasket } = useActions().basket

    const close = () => {
        priceReset()
        setMenuItemOpen(false)
    }
    useEffect(() => {
        if (!menuInViewport) {
            close()

        }
    })

    let initChoices: (FormikRadio | PickedCheckbox)[] = []

    category.choices.forEach((choice) => {
        if (choice.type === ChoiceType.RADIO)
            initChoices.push(
                {
                    id: choice.id,
                    type: ChoiceType.RADIO,
                    valueId: choice.default!,
                    currentPrice: choice.options.find(option => option.id === choice.default!)?.price!
                }
            )
        else {
            initChoices.push({
                id: choice.id,
                type: ChoiceType.CHECKBOX,
                valueId: []
            })
        }

    })

    const initialValues = {
        dishid: dish._id,
        choices: initChoices,
        note: '',
        count: 1,
        tableid: 0
    }

    const orderSchema = yup.object().shape({
        count: yup.number().min(1, "Dish count must be greater than 1"),
        note: yup.string().max(240, "Note cannot be greater than 240")
    })

    const submitForm = (values: any) => {

        const item: Item = {
            dishId: values.dishid,
            count: values.count,
            pickedChoices: values.choices,
            note: values.note,
            tableId: values.tableId

        }

        putInBasket(item)
        close()
    }

    const [dropDown, setDropDown] = useState(new Map());
    const [isTextArea, setisTextArea] = useState(false)
    const [currentPrice, setCurrentPrice] = useState<number>(0)

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
    const closAllDropDown = () => {
        category.choices.forEach(choice => {
            if (choice.type === ChoiceType.RADIO)
                setDropDown(new Map(dropDown.set(choice.id, false)))
        });
    }

    const { priceReset } = useActions().menu

    return (
        <div id="menuItem" className="overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" >
            <Formik initialValues={initialValues} validationSchema={orderSchema} onSubmit={submitForm}>
                {(formik) => (
                    <Form>
                        <div className="bg-menu-bg bg-opacity-50 inset-0 w-full h-full fixed" style={{ zIndex: -1 }} onClick={() => setMenuItemOpen(false)} />
                        <div className="container flex flex-col margin75P">
                            <div className="w-full" style={{ height: "40rem" }} onClick={() => {
                                close()
                            }} />
                            {/*@ts-ignore*/}
                            <div ref={menuRef} className="bg-white shadow-md rounded-3xl" style={{ zIndex: -0 }} onClick={() => closAllDropDown()}>
                                {dish.image !== "" && dish.image ?
                                    <div className="flex flex-col h-full w-full justify-items-center relative rounded-3xl pb-7">
                                        <div className="flex flex-col absolute self-center"><FontAwesomeIcon icon="minus" className="text-white fa-2x self-center" /></div>
                                        <img className="w-full h-full rounded-t-3xl object-fill" src={dish.image} alt="Current Dish"></img>
                                    </div> : <div className="flex flex-col"><FontAwesomeIcon icon="minus" className="text-gray-600 fa-2x self-center" /></div>}
                                <div className="pl-3 pr-3 pt-3">
                                    <div className="self-start flex flex-col w-full justify-between pb-3">
                                        <div className="self-start justify-between w-full">
                                            <div className="float-left font-bold text-xl">{dish.title}</div>
                                            <div className="float-right text-red font-bold text-xl">{priceToLocal(dish.price)}</div>
                                        </div>
                                        <div className="self-start text-gray-400">{dish.description}</div>
                                    </div>
                                    <p className="pt-2 font-bold">Allergien</p>
                                    <div className="flex overflow-x-auto pb-2">
                                        {allergens}
                                    </div>

                                    <Choices dish={dish} category={category} dropDownOpen={dropDown} setdropDownOpen={setDropDown} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} formik={formik}></Choices>
                                    <p className="font-bold pb-4 pt-3">Notiz an die Küche</p>

                                    <div className="h-full w-full pt-2 pr-2 flex flex-col">
                                        <button type='button' onClick={() => handler()} className="text-red self-end absolute pr-2 pt-1"><FontAwesomeIcon icon="edit" className="text-red" /></button>
                                        <Field component='textarea' name='note' type='text' className={`h-24 form-control w-full px-3 py-1.5 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none ${formik.errors.note && formik.touched.note ? 'bg-error-bg border border-error-text focus:border-error-text' : ''}`} id="exampleFormControlTextarea1" rows={3} placeholder="Hier werden Wünsche wahr..." />
                                    </div>

                                    <div className="mb-24">
                                        <FormError dataCy="note-input-error" field='note' />
                                    </div>
                                </div >
                            </div >
                        </div >
                        <DishButton formik={formik} />
                    </Form >
                )}
            </Formik >
        </div >
    )
}
export type FormikRadio = {
    id: number,
    type: ChoiceType.RADIO,
    valueId: number,
    currentPrice: number
}
