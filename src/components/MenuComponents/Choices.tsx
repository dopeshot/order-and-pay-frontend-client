import { priceToLocal } from '../../services/utilities'
import { FormikProps } from 'formik';
import { Category, ChoiceType, Dish, Option } from '../../overmind/menu/state';
import { Dropdown } from './Dropdown';
import { useActions, useAppState } from '../../overmind';
import { Formik } from "formik"
import { SetStateAction } from 'react';


type PropTypes = {
    category: Category,
    dropDownOpen: Map<any, any>,
    setdropDownOpen: React.Dispatch<SetStateAction<Map<any, any>>>,
    currentPrice: number,
    setCurrentPrice: React.Dispatch<React.SetStateAction<number>>
    dish: Dish,
    formik: FormikProps<any>
}

export const Choices: React.FunctionComponent<PropTypes> = ({ dish, category, dropDownOpen, setdropDownOpen, currentPrice, setCurrentPrice, formik }: PropTypes) => {
    const { priceHandler } = useActions().menu
    let sum = useAppState().menu.sum

    const test = (e: any, price: number) => {
        formik.setFieldValue(e.target.name, !e.target.checked)
        if (e.target.checked) {
            priceHandler(price)
        }
        else {
            priceHandler(-price)
        }
    }

    return (
        <>
            {
                category.choices.map((choice) => (
                    <div className="">
                        {/* Backend einen extra Text? */}
                        <p className="self-start font-bold pb-3 pt-2">{choice.title}</p>
                        {choice.type === ChoiceType.CHECKBOX && <div className="flex flex-col">
                            <div className="flex flex-col justify-between">{choice.options.map((option) => (
                                <div className="flex items-center pl-3 pr-3">
                                    <input type="checkbox" name="checked" value={"" + option.id}
                                        onChange={(e) => {
                                            test(e, option.price)
                                        }} />
                                    <div className="flex justify-between w-full pl-3">
                                        <div>{option.name}</div>
                                        <div>{priceToLocal(option.price)}</div>
                                    </div>
                                </div>
                            ))}</div>
                        </div>}
                        {choice.type === ChoiceType.RADIO && <Dropdown choice={choice} dropDownOpen={dropDownOpen} setdropDownOpen={setdropDownOpen} currentPrice={sum} formik={formik}></Dropdown>}
                    </div>)
                )
            }
        </>
    )
}

