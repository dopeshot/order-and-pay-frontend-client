export const priceToLocal = (price : number) =>  {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price/100)
}



