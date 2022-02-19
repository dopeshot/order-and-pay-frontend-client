
import { FormikProps } from 'formik';
import { Category, ChoiceType, Dish } from '../../overmind/menu/state';
import { Dropdown } from '../UIComponents/Dropdown';

import { SetStateAction } from 'react';
import { Checkbox } from '../UIComponents/Checkbox';


type PropTypes = {
    category: Category,
    dropDownOpen: Map<any, any>,
    setdropDownOpen: React.Dispatch<SetStateAction<Map<any, any>>>,
    currentPrice: number,
    setCurrentPrice: React.Dispatch<React.SetStateAction<number>>
    dish: Dish,
    formik: FormikProps<any>
}

export const Choices: React.FunctionComponent<PropTypes> = ({ dish, category, dropDownOpen, setdropDownOpen, formik }: PropTypes) => {

    return (
        <>{
            category.choices.map((choice) => (
                <div className="" key={choice.id}>
                    <p className="self-start font-bold pb-3 pt-2">{choice.title}</p>
                    {choice.type === ChoiceType.CHECKBOX && <Checkbox choice={choice} formik={formik}></Checkbox>
                    }
                    {choice.type === ChoiceType.RADIO && <Dropdown choice={choice} dropDownOpen={dropDownOpen} setdropDownOpen={setdropDownOpen} formik={formik} dish={dish}></Dropdown>}
                </div>))
        }</>
    )
}
