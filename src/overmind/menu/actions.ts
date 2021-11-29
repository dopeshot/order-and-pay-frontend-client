import { Context } from ".."

// Load Menu from Backend via effect
export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = true
    state.menu.menu = await effects.menu.backend.getCurrentMenu()
    
    let dishesIndexArray : number[]
    
    // Pushes the indexes each dish has in the menu.dishes array
    // into a separate array called dishesIndexArray that each category has.
    // This array consisting of indexes is then used to properly display 
    // all dishes in the category they belong to.
    state.menu.menu.categories.forEach((category, index) => {
        dishesIndexArray = []
        state.menu.menu.dishes.forEach((dish,index) => {
            if(dish.category === category._id){
                dishesIndexArray.push(index)
            }
        });
        category.dishesIndex = dishesIndexArray
        category.index = index
        
    });

    state.menu.isLoadingMenu = false  
}







