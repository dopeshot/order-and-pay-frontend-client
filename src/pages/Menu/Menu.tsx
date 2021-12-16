import React, { createRef, useRef } from 'react';
import { Head } from '../../components/MenuComponents/Head';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { MenuItem } from '../../components/MenuComponents/MenuItem';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { useScrollToNav } from '../../hooks/useScroll';
import { useAppState } from '../../overmind';
import { Dish, MenuType } from '../../overmind/menu/state';

export const Menu: React.FunctionComponent<{ menu: MenuType }> = ({ menu }) => {


    const [containerRef, shouldDisplayCategoryNavbar] = useScrollToNav({
        root: null,
        rootMargin: "-50px"
    })
    let currentItem: Dish = menu.dishes[0]
    let menuItemOpen: boolean
    const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>(menu.categories.map(() => createRef()))

    const scrollToButton = async (index: number) => {
        // MC: Maybe use refs here? instead of selection via dom
        const activeElements = document.getElementById(`categoryScroll_${index}`)
        const header = document.getElementById('scrollCats')
        const scrollSpy = document.querySelector('.scrollspy')

        if (activeElements && header && scrollSpy)
            header.scrollTo({
                left: activeElements.getBoundingClientRect().left - scrollSpy.getBoundingClientRect().left - 4,
                behavior: 'smooth',
            })

    }

    const openMenuItem = (dish: Dish) => {
        currentItem = dish
        menuItemOpen = true
    }

    const scrollToRef = (index: number) => {
        const categoryTop = sectionRefs.current[index].current!.getBoundingClientRect().top
        const menuComponentTop = document.querySelector("#menuComponent")!.getBoundingClientRect().top // MC: use reference here? 
        const offset = 250

        window.scrollTo({
            top: categoryTop - menuComponentTop + offset,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <ScrollCats sectionRefs={sectionRefs} scrollToButton={scrollToButton} shouldDisplayCategoryNavbar={shouldDisplayCategoryNavbar} scrollToRef={scrollToRef} />
            <div id="page" className="container w-full border-solid h-screen">

                <div className="w-full">
                    {/*@ts-ignore*/}
                    <div ref={containerRef} ><Head scrollToRef={scrollToRef} /> </div>
                    <div id="menuComponent" className="pb-96" >
                        <MenuComponent sectionRefs={sectionRefs} />
                    </div>
                    <MenuItem dish={currentItem} />
                </div>
            </div>
            <OrderButton />
        </>
    )
}
