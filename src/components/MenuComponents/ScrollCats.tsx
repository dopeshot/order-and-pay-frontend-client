import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'
import { scrollTo } from '../../services/utilities'
import Scrollspy from 'react-scrollspy'
import { useScrollToNav } from '../../hooks/useScroll'

// Category buttons that scroll to specific points in the menu
export const ScrollCats: React.FunctionComponent = () => {
    const state = useAppState().menu

    // One Category
    const categories = state.menu.categories.map((category,index) => (
        <button key={category._id + "_button"} id={"categoryScroll_" + index} className="text-red font-sofia font-bold text-center m-1 h-10 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 focus:bg-red focus:text-white" onClick={() => scrollTo(category._id)} >
            <div className="text-2xl ">
            </div>
            {category.name}
        </button>
    ))

    return (
        // All Categories
        <div className="sticky top-0 bg-white">
        <header className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto'>
            <button>S</button>
            {categories}
        </header>
        </div>
    )
}