import { useEffect } from "react"
import { PickedCheckbox, PickedRadio } from "../overmind/basket/state"
import { Category, CategoryAndDishRefs, Choice, ChoiceType, Dish, MenuEditorResponse, MenuResponse } from "../overmind/menu/state"

export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}

export const scrollTo = (element: HTMLDivElement) => {

    /*
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            
        })
        */
}

export const equalArray = <T>(array1: Array<T>, array2: Array<T>) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

export const getCurrentPrice = (price: number, current: number) => {
    return current = current + price
}

export const idToName = (dish: Dish, choice: (PickedRadio | PickedCheckbox), menu: MenuEditorResponse) => {

    const category: Category | undefined = menu.categories.find(category => category._id === dish.category)
    const choiceObj: Choice | undefined = category!.choices.find(choiceObj => choiceObj.id === choice.id)

    console.log(choice)

    if (choice.type === ChoiceType.RADIO) {
        return choiceObj?.options.find(option => option.id === choice.valueId)?.name
    }
    else {
        let optionsPicked: string = ""
        choiceObj?.options.forEach((option) => {
            //@ts-ignore
            choice.valueId.forEach(id => {
                if (id == option.id) {
                    optionsPicked += option.name + " "
                }
            });
        })
        console.log(optionsPicked)
        return optionsPicked
    }



}
