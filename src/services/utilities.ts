import { Menu } from "@headlessui/react"
import ReactDOM from "react-dom"
import { Category } from "../overmind/menu/state"
import { useAppState } from "../overmind"
import { Categories } from "../components/MenuComponents/Categories"
import { MenuComponent } from "../components/MenuComponents/MenuComponent"

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

const categories = Categories
const sections = MenuComponent.arguments.dishes

function observerCallback(entries:any, observer:IntersectionObserver) {
    entries.forEach((entry:any) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const catItem = categories[entry.target.id];
        // add 'active' class on the navItem
        catItem.classList.add('bg-black');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(categories).forEach((item:any) => {
          if (item != catItem) {
            item.classList.remove('bg-black');
          }
        });
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, options);
  
  sections.forEach((sec:any) => observer.observe(sec));