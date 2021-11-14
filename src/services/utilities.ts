import { delay } from "cypress/types/bluebird"
import { wait } from "overmind"

export const priceToLocal = (price : number) =>  {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price/100)
}

export const scrollTo  = (id : string) => {
    document.getElementById(id)!.scrollIntoView({
        behavior : 'smooth',
        block: 'start'
    })
   
}



