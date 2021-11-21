import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'
import { scrollTo } from '../../services/utilities'

// Category buttons that scroll to specific points in the menu
export const Head: React.FunctionComponent = () => {
    const state = useAppState().menu

    // One Category
    const categories = state.menu.categories.map((category,index) => (
        <button key={category._id + "_button"} id={"categoryButton_" + index} className="text-red font-sofia font-bold text-center m-1 h-16 w-20 shadow-md  rounded-md overflow-hidden text-xs b-2 focus:bg-red focus:text-white" onClick={() => scrollTo(category._id)} >
            <div className="text-2xl ">
                <FontAwesomeIcon icon="hamburger" />
            </div>
            {category.name}
        </button>
    ))

    return (
        // All Categories
        <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto fixed top-0'>
            {categories}
        </div>
    )
}