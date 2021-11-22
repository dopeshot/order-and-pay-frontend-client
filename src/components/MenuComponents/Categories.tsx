import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'
import { scrollTo } from '../../services/utilities'

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent = () => {
    const state = useAppState().menu

    // One Category
    const categories = state.menu.categories.map(category => (
        <button key={category._id + "_button"} className="text-red font-sofia font-semibold text-center m-1 h-16 w-20 shadow-md  rounded-md overflow-hidden text-xs b-2 focus:bg-red focus:text-white "  onClick={() => scrollTo(category._id)} >
            <div className="text-2xl ">
                <FontAwesomeIcon icon="hamburger" />
            </div>
            {category.name}
        </button>
    ))

    return (
        // All Categories
        <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto'>
            {categories}
        </div>
    )
}