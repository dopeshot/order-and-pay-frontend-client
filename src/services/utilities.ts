



export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}



export const scrollTo = (element : HTMLDivElement) => {
    
/*
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        
    })
    */
}
    