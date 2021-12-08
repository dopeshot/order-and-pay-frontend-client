import { Config } from "../../config.global";
import { Dish } from "./state";
import { Menu } from "./state"

export const backend = {

    //Fetch current Menu
    //TODO: placeholder ersetzen
    getCurrentMenu: async (): Promise<Menu> => {
        const response = await fetch(`${Config.api.baseApiUrl}/menu/current`)
        return await response.json()
    },
    //Fetch individual dish by ID
    //TODO: placeholder ersetzen
    getDishById: async (id: string): Promise<Dish> => {
        const response = await fetch(`${Config.api.baseApiUrl}/dish/${id}`)
        return await response.json()
    }
}