import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch Current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/ed6a7284-257f-49d0-b32e-e61657679583 ')
        return await response.json()
    },
    //Fetch Dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}