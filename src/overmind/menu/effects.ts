import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/3a323763-f673-4d6d-bbde-5ab10187e8d1 ')
        return await response.json()
    },
    //Fetch individual dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}