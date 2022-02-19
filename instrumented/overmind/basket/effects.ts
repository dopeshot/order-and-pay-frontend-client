import { request } from "../../services/axios";


export const getPrice = (): Promise<any> => {
    return request.get<Number>('/menu') // /menus/:id/refs
}
