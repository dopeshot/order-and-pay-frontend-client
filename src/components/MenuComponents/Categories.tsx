import React, {Component} from 'react'
import { useActions, useAppState } from '../../overmind'

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent = () => {

    // Imports the menu state
   const state = useAppState().menu

    // Mapping the menus categories onto buttons
   const categories = state.menu.categories.map(category => (
    
        // Single category button
        <div className="text-gray-600 text-center m-1 pt-14 h-20 w-20 shadow-md rounded-md overflow-hidden text-xs b-2">
            {category.name}
        </div>
    
))

    
    return (

      <div >
          <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1'>{categories} 
          </div>

      </div>

      
    )
    
    
    
}