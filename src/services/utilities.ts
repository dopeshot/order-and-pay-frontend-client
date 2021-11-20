import { Menu } from "@headlessui/react"

export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}

export const scrollTo = (id: string) => {
    document.getElementById(id)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

}

export const isInViewport = (id: string) => {
    const element = document.getElementById(id)
    console.log(element, id)
    //@ts-ignore
    const rect = element.getBoundingClientRect();
    console.log((
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)))
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
