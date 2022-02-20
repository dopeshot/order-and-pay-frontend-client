import { request } from "../../services/axios";
import { SendBasket } from "./state";

export const getPrice = (): Promise<any> => {
    return request.get<Number>('/menu') // /menus/:id/refs
}
//sends order to backend
export const sendOrder = (basket: SendBasket) => console.log("effect:", JSON.stringify(basket))
//export const sendOrder = (basket: SendBasket) => request.post<any>('/order', basket)
