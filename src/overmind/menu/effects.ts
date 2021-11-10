import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/f1b840c8-f1e0-4a29-a887-97bbf0c8e085 ')
        return await response.json()
    },
    //Fetch individual dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}