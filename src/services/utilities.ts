import { Menu } from "@headlessui/react"
import ReactDOM from "react-dom"

const options = {
    root: null,
    threshold: 0
}

export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}

export const scrollTo = (id: string) => {
    document.getElementById(id)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

}

export const change = () => {
    var isItIntersecting = window.onload = function () {
        var isIntersecting = false
        const visi = document.getElementById("visibility")!
        console.log('the element in onload utilities ' + visi)

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    console.log('not intersecting')
                    isIntersecting = false
                }
                else {
                    console.log('intersecting')
                    isIntersecting = true
                }
            });
        }, options)

        observer.observe(visi)
        return isIntersecting
    }
    return isItIntersecting
}