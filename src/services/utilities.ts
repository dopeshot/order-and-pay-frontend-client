import { useEffect } from "react"
import { DishButton } from "../components/MenuComponents/DishButton"
import { Basket, Item, PickedCheckbox, PickedRadio } from "../overmind/basket/state"
import { Category, CategoryAndDishRefs, Choice, ChoiceType, Dish, DIshPopulated, Menu, MenuEditorResponse, MenuResponse } from "../overmind/menu/state"

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

        return choiceObj?.options.find(option => option.id === choice.valueId)?.name + ","
    }
    else {
        let optionsPicked: string = ""
        choiceObj?.options.forEach((option) => {
            //@ts-ignore
            choice.valueId.forEach(id => {
                if (id == option.id) {
                    optionsPicked += (" " + option.name + ", ")
                }
            });
        })
        console.log(optionsPicked)
        return optionsPicked
    }
}

export const getDish = (item: Item, menu: MenuEditorResponse) => {
    let dish: Dish = {
        _id: "", title: "", description: "", labels: [], allergies: [], category: "", price: 0, image: "", isAvailable: false
    }
    menu.categories.forEach(category => {
        const possibleDish = category.dishes.find(dish => dish._id === item.dishId)
        if (possibleDish)
            dish = possibleDish
    });
    return dish
}
export const getCategoryFromId = (categoryId: string, menu: MenuEditorResponse) => {
    return menu.categories.find(category => category._id === categoryId)
}

export const getPrice = (item: Item, menu: MenuEditorResponse) => {
    let dish = getDish(item, menu)
    let category = getCategoryFromId(dish.category, menu)
    let extra: number = 0
    item.pickedChoices.forEach((pChoice) => {
        console.log(pChoice)
        if (pChoice.type === ChoiceType.RADIO) {
            const choice = category?.choices.find(choice => choice.id === pChoice.id)
            const option = choice!.options.find(option => option.id === pChoice.valueId)
            extra += option!.price
        }
        else {
            const choice = category?.choices.find(choice => choice.id === pChoice.id)
            choice!.options.forEach(option => {
                //@ts-ignore
                pChoice.valueId.forEach(value => {
                    if (option.id === value)
                        extra += option!.price
                });
            });
        }

    })


    return item.count * (dish.price + extra)
}

export const getBasketPrice = (basket: Basket, menu: MenuEditorResponse) => {
    let sum: number = 0
    basket.items.forEach(item => {
        sum += getPrice(item, menu)
    })
    return sum

}

export const sortChoices = (item: Item) => {
    item.pickedChoices.sort((a, b) => (a.id - b.id))
    item.pickedChoices.forEach(choice => {
        if (choice.type === ChoiceType.CHECKBOX) {
            choice.valueId.sort((a, b) => (a - b))

        } return item
    })
}


