
import { useAppState } from '../../overmind'
<<<<<<< HEAD
import { CategoryButton } from '../UIComponents/CategoryButton'
=======
import { IconProp } from '@fortawesome/fontawesome-svg-core'
>>>>>>> 2139049928ba747176fe341b5bd2b56666213380

type PropTypes = {
    //scrolling Function gets passed through
    scrollToRef: (id: number) => void
}

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent<PropTypes> = ({ scrollToRef }: PropTypes) => {

    const { MenuResponseObj } = useAppState().menu
<<<<<<< HEAD
=======

>>>>>>> 2139049928ba747176fe341b5bd2b56666213380

    return (
        // All Categories
        <div className='flex gap-1 bg-white top-0'>
            {MenuResponseObj.categories.map((category, index) =>
                <CategoryButton scrollToRef={scrollToRef} index={index} category={category} />)}
        </div>
    )
}
