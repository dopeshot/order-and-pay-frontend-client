import React, {Component} from 'react'
import { useActions, useAppState } from '../../overmind'


export const Categories: React.FunctionComponent = () => {

   const state = useAppState().menu

   const categories = state.menu.categories.map(category => (
    <div>

        <div className="shadow-md rounded-md overflow-hidden text-xl b-2">
            {category.name}
        </div>
    </div>
))


    return (

      <div >
          <div className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row'>{categories} 
          </div>

      </div>

      
    )
    
    
    
}