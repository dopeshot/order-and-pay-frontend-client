import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'
import { faHamburger, faAppleAlt, faBacon, faBreadSlice, faCheese, faFish, faPizzaSlice, faHotdog, faDrumstickBite } from "@fortawesome/free-solid-svg-icons"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type PropTypes = {
    //scrolling Function gets passed through
    scrollToRef: (id: number) => void
}

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent<PropTypes> = ({ scrollToRef }: PropTypes) => {

    const { MenuResponseObj } = useAppState().menu
    const icons = [faHamburger, faAppleAlt, faBacon, faBreadSlice, faCheese, faFish, faPizzaSlice, faHotdog, faDrumstickBite];

    return (
        // All Categories
        <div className='flex gap-1 bg-white top-0'>
            {MenuResponseObj.categories.map((category, index) =>
                <button onClick={() => scrollToRef(index)} key={category._id + "_button" + index} id={"categoryButton_" + index} className="text-red font-bold text-center m-1 h-16 w-20 shadow-md rounded-md overflow-hidden text-xs b-2" >
                    <div className="text-2xl ">
                        {console.log(category.icon)}
                        <FontAwesomeIcon icon={category.icon as IconProp} />
                    </div>
                    {category.title}
                </button>)}
        </div>
    )
}
