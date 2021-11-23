import { Menu } from "@headlessui/react"
import ReactDOM from "react-dom"
import { Category } from "../overmind/menu/state"
import { useAppState } from "../overmind"
import { Categories } from "../components/MenuComponents/Categories"
import { MenuComponent } from "../components/MenuComponents/MenuComponent"

export const priceToLocal = (price: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price / 100)
}

export const scrollTo = (id: string) => {
    document.getElementById(id)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })}