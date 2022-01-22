import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Categories } from '../../components/MenuComponents/Categories';
import { Searchbar } from '../../components/MenuComponents/Searchbar';

// Category buttons that scroll to specific points in the menu

type PropTypes = {
    //scrolling Function 
    scrollToRef: (id: number) => void
}

export const Head: React.FunctionComponent<PropTypes> = ({ scrollToRef }: PropTypes) => {

    const [value, setValue] = useState("")

    return (
        <div className="pb-2 m-3 flex flex-col z-0" id="head">
            <button className="pt-4 text-2xl pr-6 text-right self-end">
                <FontAwesomeIcon icon="bars" className="overflow-hidden" />
            </button>
            <h1 className="font-bold text-4xl pt-3 pb-2">Menü</h1>

            <Searchbar setValue={setValue} value={value} />

            <h2 className="font-bold text-2xl">Kategorien</h2>
            <Link id="showAll" to="/categories" className="text-red font-bold text-sm text-right self-end pr-5">Alle Anzeigen</Link>
            <div id="categories" className="overflow-auto pt-4 flex scrollbar-hide">
                <Categories scrollToRef={scrollToRef} />
            </div>
        </div>
    )
}
