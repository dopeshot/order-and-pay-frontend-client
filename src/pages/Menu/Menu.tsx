import React, { useState } from 'react';
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { change } from '../../services/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useWindowPosition } from '../../hooks/useScroll';
import { Head } from '../../components/MenuComponents/Head';


export const Menu: React.FunctionComponent = () => {
    const scrollY = useWindowPosition();
    
    return (
        <div id="page" className="container h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div>
                <Head />
                {scrollY > 300 ? <ScrollCats /> : null}
                <div id="menuComponent" className="flex-auto overflow-y-auto table-row"><MenuComponent /></div>
            </div>
            <footer className="flex-grow fixed bottom-0"><OrderButton /></footer>

        </div>

    )
}