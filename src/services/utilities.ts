import { Basket, Item, PickedCheckbox, PickedRadio } from "../overmind/basket/state"
import { Category, Choice, ChoiceType, Dish, MenuEditorResponse } from "../overmind/menu/state"


//converts price to local price format
export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}


export const equalArray = <T>(array1: Array<T>, array2: Array<T>) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

//finds ands builds picked options into a convenient string for display in the basket
export const idToName = (dish: Dish, choice: (PickedRadio | PickedCheckbox), menu: MenuEditorResponse) => {
    const category: Category | undefined = menu.categories.find(category => category._id === dish.categoryId)
    const choiceObj: Choice | undefined = category!.choices.find(choiceObj => choiceObj.id === choice.id)

    if (choice.type === ChoiceType.RADIO) {
        return choiceObj?.options.find(option => option.id === choice.valueId)?.title + ","
    }
    else {
        let optionsPicked: string = ""
        choiceObj?.options.forEach((option) => {
            choice.valueId.forEach(id => {
                if (id === option.id) {
                    optionsPicked += (" " + option.title + ", ")
                }
            });
        })
        return optionsPicked
    }
}

//gets dish from item
export const getDish = (item: Item, menu: MenuEditorResponse) => {
    let dish: Dish = {
        _id: "", title: "", description: "", labelIds: [], allergenIds: [], categoryId: "", price: 0, image: "", isAvailable: false
    }
    menu.categories.forEach(category => {
        const possibleDish = category.dishes.find(dish => dish._id === item.dishId)
        if (possibleDish)
            dish = possibleDish
    });
    return dish
}

//finds category from dish category id
export const getCategoryFromId = (categoryId: string, menu: MenuEditorResponse) => {
    return menu.categories.find(category => category._id === categoryId)
}

//calculates the correct price for an item
export const getPrice = (item: Item, menu: MenuEditorResponse) => {
    let dish = getDish(item, menu)
    let category = getCategoryFromId(dish.categoryId, menu)
    let extra: number = 0
    item.pickedChoices.forEach((pChoice) => {
        if (pChoice.type === ChoiceType.RADIO) {
            const choice = category?.choices.find(choice => choice.id === pChoice.id)
            const option = choice!.options.find(option => option.id === pChoice.valueId)
            extra += option!.price
        }
        else {
            const choice = category?.choices.find(choice => choice.id === pChoice.id)
            choice!.options.forEach(option => {
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


