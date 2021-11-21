import { Menu } from "@headlessui/react"

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
    var isIntersecting = false
    window.onload = function () {
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
    }
    if (isIntersecting) {
        return true
    }
    else {
        return false
    }
}