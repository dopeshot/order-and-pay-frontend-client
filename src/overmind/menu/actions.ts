import { isContext } from "vm"
import { Context } from ".."
import { Dish } from "./state"




// Load Menu from Backend via effect
export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = true
    state.menu.menu = await effects.menu.backend.getCurrentMenu()
    state.menu.isLoadingMenu = false
    console.log(state.menu.menu.categories)
    let dishesIndexArray : number[]
    
    state.menu.menu.categories.forEach(category => {
        dishesIndexArray = []
        state.menu.menu.dishes.forEach((dish,index) => {
            if(dish.category == category._id){
                dishesIndexArray.push(index)
            }
        });
        category.dishesIndex = dishesIndexArray
        
    });
    console.log(state.menu.menu.categories)
    
}

export const fillDishIndexArray = ({state} : Context) => {

    
}




