import React, { createRef, useRef } from 'react';
import { Head } from '../../components/MenuComponents/Head';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { useScrollToNav } from '../../hooks/useScroll';
import { MenuType } from '../../overmind/menu/state';

export const Menu: React.FunctionComponent<{ menu: MenuType }> = ({ menu }) => {

    const [containerRef, shouldDisplayCategoryNavbar] = useScrollToNav({
        root: null,
        rootMargin: "-50px"
    })

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
            <div id="page" className="container w-full flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
                <ScrollCats sectionRefs={sectionRefs} scrollToButton={scrollToButton} shouldDisplayCategoryNavbar={shouldDisplayCategoryNavbar} scrollToRef={scrollToRef} />
                <div className="w-full">
                    {/*@ts-ignore*/}
                    <div ref={containerRef} >
                        <Head scrollToRef={scrollToRef} />
                    </div>
                    <div id="menuComponent" className="flex-auto pb-96" >
                        <MenuComponent sectionRefs={sectionRefs} />
                    </div>
                </div>
            </div>
            <OrderButton />
        </>
    )
}

