import * as React from 'react'
import { MenuComponent } from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/Head';
import { change } from '../../services/utilities';
import { Head } from '../../components/MenuComponents/ScrollCats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { Searchbar } from '../../components/MenuComponents/Searchbar';
import { Categories } from '../../components/MenuComponents/Categories';

export const Menu: React.FunctionComponent = () => {

    return (
        <div id="page" className="container h-screen flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            <div>
                { change() ? <ScrollCats /> : <Head />}
                <div id="menuComponent" className="flex-auto overflow-y-auto table-row"><MenuComponent /></div>
            </div>
            <footer className="flex-grow fixed bottom-0"><OrderButton /> </footer>
        </div>

    )
}