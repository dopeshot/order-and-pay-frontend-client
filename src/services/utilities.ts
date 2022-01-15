import { useEffect } from "react"

export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}

export const scrollTo = (element: HTMLDivElement) => {

    /*
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            
        })
        */
}

export const equalArray = <T>(array1: Array<T>, array2: Array<T>) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

export const getCurrentPrice = (price: number, current: number) => {
    return current = current + price
}
