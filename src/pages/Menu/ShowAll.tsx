import { useAppState } from '../../overmind';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const ShowAll: React.FunctionComponent = () => {
    const state = useAppState().menu

    const categories = state.MenuResponseObj.categories.map((category, index) => (
        <HashLink key={category._id + "_showAll"} id={"hashLink_" + index} to={`/menu#${'section-' + (index)}`}
            className="flex items-center justify-between p-3 rounded-lg text-white bg-cover bg-gray-400 bg-blend-multiply bg-left shadow-whiteBox"
            style={{ backgroundImage: "url(" + category.image + ")" }}>
            <div className="flex items-center min-w-0">
                <div className="pr-2 text-2xl">
                    <FontAwesomeIcon icon={category.icon as IconProp} />
                </div>
                <div className="min-w-0">
                    <p className="text-lg font-semibold">
                        {category.title}
                    </p>
                    <p className="text-sm font-thin whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {category.description}
                    </p>
                </div>
            </div>
            <div className="pr-2 text-2xl">
                <FontAwesomeIcon icon="chevron-right" />
            </div>
        </HashLink>
    ))

    return (
        <div id="page" className="container h-screen flex flex-col border-solid">
            <div className="">
                <div className="flow-root">
                    <button className="float-left p-4 pl-4 text-2xl text-left">
                        <Link id="mainMenu" to="/menu" ><FontAwesomeIcon icon="chevron-left" /></Link>
                    </button>
                    <button className="float-right p-4 text-2xl pr-6 text-right">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </div>
                <div className="pb-5">
                    <h1 className="text-4xl pl-4 font-bold">Kategorien</h1>
                </div>
            </div>
            <div id="categoryHashlinks" className="flex flex-col scrollbar-hide space-y-6 p-6 pt-2 pl-4">
                {categories}
            </div>
        </div>
    )
}
