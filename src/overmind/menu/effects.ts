import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch Current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/5db6a88a-917c-4d11-9c17-f32edc0ef36a')
        return await response.json()
    },
    //Fetch Dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}