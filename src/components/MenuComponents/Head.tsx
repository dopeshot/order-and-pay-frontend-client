import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Categories } from '../../components/MenuComponents/Categories';
import { Searchbar } from '../../components/MenuComponents/Searchbar';

// Category buttons that scroll to specific points in the menu

type PropTypes = {
    //scrolling Function 
    scrollToRef: (id: number) => void
}

export const Head: React.FunctionComponent<PropTypes> = ({ scrollToRef }: PropTypes) => {
    return (
        <div className="grid grid-rows-6 pl-2 pb-2 " id="head">
            <div className="row-span-2 grid grid-cols-2 flex-auto overflow-hidden table-row">
                <h1 className="font-bold pt-14 text-4xl pl-2 " >Menü</h1>
                <button className="p-8 pt-0 text-2xl pr-6 text-right">
                    <FontAwesomeIcon icon="bars" />
                </button>
            </div>
            <div id="searchbar" className="pt-4 mx-1 row-span-1 flex justify-center"><Searchbar /></div>
            <div className="grid grid-cols-2">
                <h2 className="font-bold pt-4 text-2xl pl-2 ">Kategorien</h2>
                <Link id="showAll" to="/categories" className="text-red font-bold pt-7 text-sm text-right pr-5 ">Alle Anzeigen</Link>
            </div>
            <div id="categories" className=" row-span-3 flex-auto overflow-hidden table-row pt-4"> <Categories scrollToRef={scrollToRef} /> </div>
        </div>

    )
}


