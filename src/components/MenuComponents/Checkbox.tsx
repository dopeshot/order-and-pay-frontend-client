import { FormikProps } from "formik"
import { Dispatch, SetStateAction } from "react"
import { useActions } from "../../overmind"
import { priceHandler } from "../../overmind/menu/actions"
import { Choice, Option } from "../../overmind/menu/state"
import { priceToLocal } from "../../services/utilities"


type PropTypes = {
    choice: Choice
    formik: FormikProps<any>
}


export const Checkbox: React.FunctionComponent<PropTypes> = ({ choice, formik }: PropTypes) => {

    const { priceHandler } = useActions().menu

    const currentFormikChoice = formik.values.choices.find((current: { id: any; }) => current.id === choice.id)
    const currentFormikChoiceIndex = formik.values.choices.findIndex((current: { id: any; }) => current.id === choice.id)

    const test = (e: any, option: Option) => {
        if (e.target.checked) {
            formik.values.choices[currentFormikChoiceIndex].valueId.push(option.id)
        }
        else {
            formik.values.choices[currentFormikChoiceIndex].valueId.splice(formik.values.choices[currentFormikChoiceIndex].valueId.findIndex((valueid: number) => valueid === option.id), 1)
        }
        { e.target.checked ? priceHandler(option.price) : priceHandler(-option.price) }
    }

    return <div className="flex flex-col">
        <div className="flex flex-col justify-between">{choice.options.map((option) => (
            <div className="flex items-center pl-3 pr-3">
                <input type="checkbox" name="checked" value={`${option.id}`}
                    onChange={(e) => { test(e, option) }} />
                <div className="flex justify-between w-full pl-3">
                    <div>{option.name}</div>
                    <div>{priceToLocal(option.price)}</div>
                </div>
            </div>
        ))}</div>
    </div>
}
