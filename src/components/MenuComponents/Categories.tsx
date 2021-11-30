import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'

type PropTypes = {
    //scrolling Function gets passes through
    scrollFC: (id: number) => void
}

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent<PropTypes> = (props: PropTypes) => {

    const state = useAppState().menu

    const categories = state.menu.categories.map((category, index) =>
        <button key={category._id + "_button" + index} id={"categoryButton_" + index} className="text-red font-sofia font-bold text-center m-1 h-16 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 activeElement" onClick={() => props.scrollFC(index)} >
            <div className="text-2xl ">
                <FontAwesomeIcon icon="hamburger" />
            </div>
            {category.name}
        </button>
    )

    return (
        // All Categories
        <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto  bg-white top-0'>
            {categories}
        </div>
    )
}