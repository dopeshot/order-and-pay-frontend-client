import React, { useRef } from 'react';
import { Head } from '../../components/MenuComponents/Head';
import MenuComponent from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { useScrollToNav } from '../../hooks/useScroll';

export const Menu: React.FunctionComponent = () => {

    const [containerRef, shouldDisplayCategoryNavbar] = useScrollToNav({
        root: null,
        rootMargin: "0px"
    })

    const MenuRef = useRef<typeof MenuComponent>(null)

    const scroll = (index: number) => {
        //@ts-ignore
        MenuRef!.current!.handleClick(index)


    }

    return (
        <>
            <div id="page" className="container w-full flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
                <div className={`fixed top-0 w-full bg-white transition-opacity duration-200 ${shouldDisplayCategoryNavbar ? ``: `opacity-0`} `}><ScrollCats scrollFC={scroll} /></div>
                <div className="w-full">
                    {/*@ts-ignore*/}
                    <div ref={containerRef} ><Head scrollFC={scroll} /></div>
                    <div id="menuComponent" className="flex-auto pb-96" ><MenuComponent ref={MenuRef} /></div>
                </div>
            </div>

            <footer onClick={() => { }} className="flex-grow fixed bottom-0 w-full menuButton bg-red bg-cover h-16 shadow-category "> <OrderButton /></footer>
        </>
    )
}

