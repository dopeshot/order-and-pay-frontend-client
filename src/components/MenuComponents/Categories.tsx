import React, {Component} from 'react'
import { useActions, useAppState } from '../../overmind'


export const Categories: React.FunctionComponent = () => {

   const state = useAppState().menu

   const categories = state.menu.categories.map(category => (
    

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