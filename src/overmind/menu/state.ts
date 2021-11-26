

//Single Menu Item

import { Ref, useRef } from "react"

//TODO: Complete Dish Object
export type Dish = {
    labels: string[],
    allergens: string[],
    name: string,
    description: string,
    category: string,
    price: number,
    _id: number
    
}

//Category
//TODO: Change Types?
export type Category = {
    _id: string,
    name: string,
    description: string,
    dishesIndex: number[],
    index: number
    
}
//Full menu
//TODO: Complete Menu Object
export type Menu = {
    name: string,
    colorscheme: number,
    dishes: Dish[],
    categories: Category[]
}

export type State = {
    isLoadingDishes: boolean,
    isLoadingMenu: boolean,
    menu: Menu,
    refs : any[]
    
}



    


export const state: State = {
    isLoadingDishes: false,
    isLoadingMenu: false,
    menu: { name: "",
            colorscheme:1,
            dishes:[],
            categories:[] },
    refs : []
   
    
    
}