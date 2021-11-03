import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch Current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/42db91e2-831f-42d3-a8b8-5da6316ff4cd ')
        return await response.json()
    },
    //Fetch Dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}