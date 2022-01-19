import { priceToLocal } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikProps } from 'formik';
import { useAppState } from '../../overmind';
import { Category, ChoiceType, Dish, Option } from '../../overmind/menu/state';
import { Dropdown } from './Dropdown';
import { Formik } from "formik"
import { SetStateAction } from 'react';


type PropTypes = {
    category: Category,
    dropDownOpen: Map<any, any>,
    setdropDownOpen: React.Dispatch<SetStateAction<Map<any, any>>>,
    currentPrice: number,
    dish: Dish,
    formik: FormikProps<any>
}

export const Choices: React.FunctionComponent<PropTypes> = ({ dish, category, dropDownOpen, setdropDownOpen, currentPrice, formik }: PropTypes) => {

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
                                    <input type="checkbox" className="form-checkbox"></input>
                                    <div className="flex justify-between w-full pl-3">
                                        <div>{option.name}</div>
                                        <div>{priceToLocal(option.price)}</div>
                                    </div>
                                </div>
                            ))}</div>
                        </div>}
                        {choice.type === ChoiceType.RADIO && <Dropdown choice={choice} dropDownOpen={dropDownOpen} setdropDownOpen={setdropDownOpen} currentPrice={currentPrice} formik={formik}></Dropdown>}
                    </div>)
                )
            }
        </>
    )
}
