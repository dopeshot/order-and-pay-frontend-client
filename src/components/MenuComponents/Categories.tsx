import {  useAppState } from '../../overmind'
import { scrollTo } from '../../services/utilities'

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent = () => {
    const state = useAppState().menu
    
    // One Category
    const categories = state.menu.categories.map(category => (
        <button  key = {category._id} className="text-gray-600 text-center m-1 pt-14 h-20 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 "  onClick= { () => scrollTo(category._id)} >
            {category.name} 
        </button>
    ))

    return (
        // All Categories
        <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 scrolling-touch overflow-auto'>
            {categories}
        </div>
    )
}