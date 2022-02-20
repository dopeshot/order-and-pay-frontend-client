import { useAppState } from '../../overmind'
import { CategoryButton } from '../UIComponents/CategoryButton'

type PropTypes = {
    //scrolling Function gets passed through
    scrollToRef: (id: number) => void
}

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent<PropTypes> = ({ scrollToRef }: PropTypes) => {
    const { MenuResponseObj } = useAppState().menu

    return (
        // All Categories
        <div className='flex gap-1 bg-white top-0'>
            {MenuResponseObj.categories.map((category, index) =>
                <CategoryButton scrollToRef={scrollToRef} key={category._id} index={index} category={category} />)}
        </div>
    )
}
