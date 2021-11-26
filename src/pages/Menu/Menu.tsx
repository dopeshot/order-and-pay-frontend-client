import React, { createRef, useRef, useState } from 'react';

import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Head } from '../../components/MenuComponents/Head';
import { useElementOnScreen } from '../../hooks/useScroll'
import  MenuComponent  from '../../components/MenuComponents/MenuComponent';

export const Menu: React.FunctionComponent = () => {
    //const scrollY = useWindowPosition();

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px"
    })
    const MenuRef = useRef()

    const scroll = (index : number) => {
        //@ts-ignore
        MenuRef.current.handleClick(index)
    }

    return (
        <div id="page" className="container flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            {/*@ts-ignore */}
                <div className="sticky top-0 bg-white">{isVisible ? null : <ScrollCats scrollFC={scroll} />}</div>
            <div>
                {/*@ts-ignore */ }
                <div ref={containerRef} ><Head scrollFC={scroll} /></div>
                <div id="menuComponent" className="flex-auto overflow-y-auto table-row"><MenuComponent ref={MenuRef}/></div>
            </div>
            
            
            <footer className="flex-grow fixed bottom-0 w-full"><OrderButton /></footer>

        </div>
    )}

function useCallBack(arg0: (index: number) => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
