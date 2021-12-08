import { request } from "../../services/axios";
import { Dish, MenuType } from "./state";

export const getMenu = () => request.get<MenuType>('/menu/current')
export const getDish = (id: string) => request.get<Dish>(`/dishes/${id}`)
