import { request } from "../../services/axios";
import { Dish, Menu } from "./state";

export const getMenu = () => request.get<Menu>('/menu/current')

export const getDish = (id: string) => request.get<Dish>(`/dishes/${id}`)