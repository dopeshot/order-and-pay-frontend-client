import React, { useState } from 'react';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Head } from '../../components/MenuComponents/Head';
import { useElementOnScreen } from '../../hooks/useScroll'


export const Menu: React.FunctionComponent = () => {
    //const scrollY = useWindowPosition();

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    })

    return (
        <div id="page" className="container h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div>
                <div ref={containerRef}><Head /></div>
                <div id="scrollCats" className="sticky top-0 bg-white"> 
                {isVisible ? null : <ScrollCats />}
                </div>
                <div id="menuComponent" className="flex-auto overflow-y-auto table-row"><MenuComponent /></div>
            </div>
            <footer className="flex-grow fixed bottom-0"><OrderButton /></footer>

        </div>
    )}