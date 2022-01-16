import React, { createRef, useRef, useState } from 'react';
import disablescroll from 'disable-scroll'
import { Head } from '../../components/MenuComponents/Head';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { MenuItem } from '../../components/MenuComponents/MenuItem';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { DishButton } from '../../components/MenuComponents/DishButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { useScrollToNav } from '../../hooks/useScroll';
import { useAppState } from '../../overmind';
import { Dish, MenuType } from '../../overmind/menu/state';
import { useCheckMenuItem } from '../../services/menuItemIntersect';
import { TIMEOUT } from 'dns';

export const Menu: React.FunctionComponent<{ menu: MenuType }> = ({ menu }) => {

    const [currentItem, setCurrentItem] = useState(menu.dishes[0])
    const [menuItemOpen, setMenuItemOpen] = useState(false)
    const [isOffen, setIsOffen] = useState(false)
    const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>(menu.categories.map(() => createRef()))

    const [containerRef, shouldDisplayCategoryNavbar] = useScrollToNav({
        root: null,
        rootMargin: "-50px"
    })

    let [menuRef, menuInViewport] = useCheckMenuItem({
        root: null,
        rootMargin: "-200px"
    }, isOffen)

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
        const result = await resolveAfter2Seconds();
        //@ts-ignore
        result.scrollTo({
            top: 2000,
            left: 0,
            behavior: 'smooth'
        });

    }

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(document.querySelector("#menuItem"));
            }, 20);
        });
    }

    const openMenuItem = (dish: Dish) => {
        console.log("openMenuItem")
        setCurrentItem(dish)
        setMenuItemOpen(true)
        asyncCall();
        setTimeout(() => {
            setIsOffen(true)
        }, 10)
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
            <div id="page" data-spy="scroll" data-target="#myScrollspy" className={`container w-full border-solid h-screen   ${menuItemOpen ? `pointer-events-none overflow-hidden` : `scrollbar-hide overflow-scroll `} `}>
                <div className="w-full">
                    {/*@ts-ignore*/}
                    <div ref={containerRef} ><Head scrollToRef={scrollToRef} /> </div>
                    <div id="menuComponent" className="pb-96" >
                        <MenuComponent sectionRefs={sectionRefs} openMenuItem={openMenuItem} menuItemOpen={menuItemOpen} />
                    </div>
                </div>
            </div>
            {console.log("menuInviewport: " + menuInViewport)}
            {menuItemOpen && <MenuItem menuRef={menuRef} menuInViewport={menuInViewport} dish={currentItem} menuItemOpen={menuItemOpen} setMenuItemOpen={setMenuItemOpen} setIsOffen={setIsOffen} />}

            {!menuItemOpen && <OrderButton />}
        </>
    )
}
