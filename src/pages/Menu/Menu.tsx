import React, { createRef, useRef, useState } from 'react';
import { useAppState } from '../../overmind';
import { Head } from '../../components/MenuComponents/Head';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { MenuItem } from '../../components/MenuComponents/MenuItem';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { useScrollToNav } from '../../hooks/useScroll';
import { useActions } from '../../overmind';
import { Category, Dish, MenuEditorResponse } from '../../overmind/menu/state';
import { useCheckMenuItem } from '../../services/menuItemIntersect';

export const Menu: React.FunctionComponent<{ menu: MenuEditorResponse }> = ({ menu }) => {

    const basket = useAppState().basket.basket

    const [currentItem, setCurrentItem] = useState(menu.categories[0].dishes[0])
    const [currentCategory, setCurrentCategory] = useState(menu.categories[0])
    const [menuItemOpen, setMenuItemOpen] = useState(false)
    const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>(menu.categories.map(() => createRef()))

    const [containerRef, shouldDisplayCategoryNavbar] = useScrollToNav({
        root: null,
        rootMargin: "-50px"
    })

    let [menuRef, menuInViewport] = useCheckMenuItem({
        root: null,
        rootMargin: "-100px"
    }, menuItemOpen)

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

    async function asyncCall() {
        const result = await resolveAfter20ms();
        //@ts-ignore
        result.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        });
    }

    function resolveAfter20ms() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(document.querySelector("#menuItem"));
            }, 20);
        });
    }

    const { priceHandler } = useActions().menu

    const openMenuItem = (dish: Dish, category: Category & { dishes: Dish[]; }) => {
        console.log("openMenuItem")
        setCurrentItem(dish)
        setCurrentCategory(category)
        setMenuItemOpen(true)
        asyncCall();
        priceHandler(dish.price)
    }

    const scrollToRef = (index: number) => {
        const categoryTop = sectionRefs.current[index].current!.getBoundingClientRect().top
        const menuComponentTop = document.querySelector("#menuComponent")!.getBoundingClientRect().top // MC: use reference here? 
        const offset = 250

        document.querySelector("#page")!.scrollTo({
            top: categoryTop - menuComponentTop + offset,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <ScrollCats sectionRefs={sectionRefs} scrollToButton={scrollToButton} shouldDisplayCategoryNavbar={shouldDisplayCategoryNavbar} scrollToRef={scrollToRef} />
            <div id="page" className={`container w-full border-solid h-screen  ${menuItemOpen ? `pointer-events-none overflow-hidden` : `scrollbar-hide overflow-scroll`} `}>
                <div className="w-full">
                    {/*@ts-ignore*/}
                    <div ref={containerRef} ><Head scrollToRef={scrollToRef} openMenuItem={openMenuItem} /> </div>
                    <div id="menuComponent" className="pb-96" >
                        <MenuComponent sectionRefs={sectionRefs} openMenuItem={openMenuItem} menuItemOpen={menuItemOpen} />
                    </div>
                </div>
            </div>
            {menuItemOpen && <MenuItem menuRef={menuRef} menuInViewport={menuInViewport} dish={currentItem} category={currentCategory} menuItemOpen={menuItemOpen} setMenuItemOpen={setMenuItemOpen} />}

            {(!menuItemOpen && basket.items.length > 0) && <OrderButton />}
        </>
    )
}
