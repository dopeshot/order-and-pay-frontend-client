import { request } from "../../services/axios";
import { Dish, MenuEditorResponse } from "./state";

export const getMenu = (): Promise<any> => {
    return request.get<MenuEditorResponse>('/menu') // /menus/:id/refs
}

export const getDish = (id: string) => request.get<Dish>(`/dishes/${id}`)
