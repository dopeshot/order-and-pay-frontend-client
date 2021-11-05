import { isContext } from "vm"
import { Context } from ".."
import { Dish } from "./state"



//load Menu from Backend via effect
export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = true
    state.menu.menu = await effects.menu.backend.getCurrentMenu()
    state.menu.isLoadingMenu = false
    //console.log(state.menu.isLoadingMenu)
}

export const closeDropDown = ({state}: Context) =>{
    state.menu.dropdownOpen = false
}
export const openDropDown = ({state}: Context) =>{
    state.menu.dropdownOpen = true
}

export const addDishToOrder = ({state} : Context, id : number) =>{
    state.menu.order.push(id)
}
export const removeDishFromOrder = ({state} : Context, id : number) =>{
    
    for(let i = 0; i<state.menu.order.length;i++){
        if(id == state.menu.order[i]){
            state.menu.order.splice(i,1)
            i=state.menu.order.length
        }
    };
}
export const getDishCountById = ({state} : Context, id: number) =>{
    let count : number
    count = 0
    state.menu.order.forEach(dishID => {
        if(id == dishID){
            count++
        }
    });
    return count
}

export const getPrice = ({state} : Context) =>{
    let price : number
    price = 0.00
    return price
}

