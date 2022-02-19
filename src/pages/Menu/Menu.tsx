import React, { createRef, useRef, useState } from 'react';
import { useAppState } from '../../overmind';
import { Head } from '../../components/MenuComponents/Head';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { MenuItem } from '../../components/DishComponents/MenuItem';
import { OrderButton } from '../../components/UIComponents/OrderButton';
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
    const menuComponentRef = useRef(null)

    const [containerRef, shouldDisplayCategoryNavbar] = useScrollToNav({
        root: null,
        rootMargin: "-50px"
    })

    let [menuRef, menuInViewport] = useCheckMenuItem({
        root: null,
        rootMargin: "-100px"
    }, menuItemOpen)

    const menuScrollRef = useRef(null)
    const pageRef = useRef(null)
    const scrollCatRef = useRef(null)
    const scrollSpyRef = useRef(null)
    const catButtonRefs = useRef<Array<HTMLButtonElement | null>>([])

    const scrollToButton = async (index: number) => {

        const activeElements = catButtonRefs.current[index]
        const header = scrollCatRef.current
        const scrollSpy = scrollSpyRef.current

        if (activeElements && header && scrollSpy)
            //@ts-ignore
            header.scrollTo({
                //@ts-ignore
                left: activeElements.getBoundingClientRect().left - scrollSpy.getBoundingClientRect().left - 4,
                behavior: 'smooth',
            })
    }

    async function scrollInMenuItem() {
        const result = await new Promise(resolve => {
            setTimeout(() => {
                //@ts-ignore
                resolve(menuScrollRef.current);
            }, 20);
        });
        //@ts-ignore
        result?.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        });
        console.log(result)

    }

    const { priceHandler } = useActions().menu

    const openMenuItem = (dish: Dish, category: Category & { dishes: Dish[]; }) => {

        setCurrentItem(dish)
        setCurrentCategory(category)
        setMenuItemOpen(true)
        scrollInMenuItem();
        priceHandler(dish.price)
    }

    const scrollToRef = (index: number) => {
        const categoryTop = sectionRefs.current[index].current!.getBoundingClientRect().top
        //@ts-ignore
        const menuComponentTop = menuComponentRef.current.getBoundingClientRect().top
        const offset = 250
        //@ts-ignore
        pageRef.current!.scrollTo({
            top: categoryTop - menuComponentTop + offset,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <ScrollCats catButtonRefs={catButtonRefs} scrollSpyRef={scrollSpyRef} scrollCatRef={scrollCatRef} sectionRefs={sectionRefs} scrollToButton={scrollToButton} shouldDisplayCategoryNavbar={shouldDisplayCategoryNavbar} scrollToRef={scrollToRef} />
            <div id="page" ref={pageRef} className={`container w-full border-solid h-screen  ${menuItemOpen ? `pointer-events-none overflow-hidden` : `scrollbar-hide overflow-scroll`} `}>
                <div className="w-full">
                    {/*@ts-ignore*/}
                    <div ref={containerRef} ><Head scrollToRef={scrollToRef} openMenuItem={openMenuItem} /> </div>
                    <div id="menuComponent" ref={menuComponentRef} className="pb-96" >
                        <MenuComponent sectionRefs={sectionRefs} openMenuItem={openMenuItem} menuItemOpen={menuItemOpen} />
                    </div>
                </div>
            </div>
            {/*@ts-ignore*/}
            {menuItemOpen && <MenuItem scrollRef={menuScrollRef} menuRef={menuRef} menuInViewport={menuInViewport} dish={currentItem} category={currentCategory} menuItemOpen={menuItemOpen} setMenuItemOpen={setMenuItemOpen} />}

            {(!menuItemOpen && basket.items.length > 0) && <OrderButton />}
        </>
    )
}
