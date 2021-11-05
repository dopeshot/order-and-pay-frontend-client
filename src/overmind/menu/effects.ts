import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch Current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/ac5373b1-59b0-48bb-af79-695df6dd063d')
        return await response.json()
    },
    //Fetch Dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}