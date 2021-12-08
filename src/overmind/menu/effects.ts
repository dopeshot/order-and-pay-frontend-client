import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch('https://mocki.io/v1/f513eb1a-f419-44c5-a27d-02fb82ab8247 ')
        return await response.json()
    },
    //Fetch individual dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: number): Promise<Dish> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.json()
    }
}