

//Single Menu Item
//TODO: Complete Dish Object
export type Dish = {
    name: string,
    price: string
}

//Category
//TODO: Change Types?
export type Category = {
    name: string
    
}
//Full menu
//TODO: Complete Menu Object
export type Menu = {
    title: string,
    colorscheme: number,
    dishes: Dish[],
    categories: Category[]
}

export type State = {
    isLoadingDishes: boolean,
    isLoadingMenu: boolean,
    menu: Menu,
    name: string
}

export const state: State = {
    isLoadingDishes: false,
    isLoadingMenu: false,
    menu: { title: "",
            colorscheme:1,
            dishes:[],
            categories:[] },
    name: "Testname"
}