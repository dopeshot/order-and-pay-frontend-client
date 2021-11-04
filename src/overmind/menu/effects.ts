import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch Current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/84d06b29-3641-494c-8d99-f60503dc8e2b')
        return await response.json()
    },
    //Fetch Dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }


}