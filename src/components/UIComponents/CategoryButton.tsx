import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


type PropTypes = {
    //scrolling Function gets passed through
    scrollToRef: (id: number) => void,
    index: number,
    category: any
}

// Category buttons that scroll to specific points in the menu
export const CategoryButton: React.FunctionComponent<PropTypes> = ({ scrollToRef, index, category }: PropTypes) => {


    return (

        <button onClick={() => scrollToRef(index)} key={category._id + "_button" + index} id={"categoryButton_" + index} data-cy={"categoryButton_" + index} className="text-red font-bold text-center m-1 h-16 w-20 shadow-md rounded-md overflow-hidden text-xs b-2" >
            <div className="text-2xl ">

                <FontAwesomeIcon icon={category.icon as IconProp} />
            </div>
            {category.title}
        </button>

    )
}
