import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'

type PropTypes = {
    //scrolling Function gets passed through
    scrollToRef: (id: number) => void
}

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent<PropTypes> = ({ scrollToRef }: PropTypes) => {

    const { menu } = useAppState().menu


    return (
        // All Categories
        <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto scrollbar-hide  bg-white top-0'>
            {menu.categories.map((category, index) =>
                <button onClick={() => scrollToRef(index)} key={category._id + "_button" + index} id={"categoryButton_" + index} className="text-red font-bold text-center m-1 h-16 w-20 shadow-md rounded-md overflow-hidden text-xs b-2" >
                    <div className="text-2xl ">
                        <FontAwesomeIcon icon="hamburger" />
                    </div>
                    {category.name}
                </button>)}
        </div>
    )
}