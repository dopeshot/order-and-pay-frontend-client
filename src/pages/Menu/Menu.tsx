import React, { createRef, useEffect, useRef, useState } from 'react';

import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Head } from '../../components/MenuComponents/Head';
import {  useScrollToNav } from '../../hooks/useScroll'
import  MenuComponent  from '../../components/MenuComponents/MenuComponent';
import Scrollspy from 'react-scrollspy';
import { scroller } from 'react-scroll';





export const Menu: React.FunctionComponent = () => {
   

    const [containerRef, isVisible] = useScrollToNav({
        root: null,
        rootMargin: "0px"
    })

    const MenuRef = useRef()

    const scroll = (index : number) => {
        //@ts-ignore
        MenuRef.current.handleClick(index)
    }

    

   
    return (

        <div  id="page" className="container flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            
            
      

        <div className="sticky top-0 bg-white">{isVisible ? null : <ScrollCats scrollFC={scroll} />}</div>
            <div  >
                {/*@ts-ignore */ }
                <div ref={containerRef} ><Head scrollFC={scroll} /></div>
                <div id="menuComponent" className="flex-auto overflow-y-auto table-row" ><MenuComponent ref={MenuRef}/></div>
                <div className="row-span-2 grid grid-cols-2 flex-auto overflow-hidden table-row">
                    <h1 className="font-sofia font-bold pt-14 text-4xl pl-2 " >Menü</h1>
                    <button className="pb-8 pr-5 text-2xl text-right">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </div>
            

               

            </div>
            
            
            <footer onClick={() => {}}  className="flex-grow fixed bottom-0 w-full"><OrderButton /></footer>

        </div>
    )}

