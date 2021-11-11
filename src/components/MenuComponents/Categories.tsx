import React, { Component } from 'react'
import { useActions, useAppState } from '../../overmind'

 type CategoryProps = {
        scrollRefs : any         //React.ref
    }

// Category buttons that scroll to specific points in the menu
export const Categories: React.FunctionComponent<CategoryProps> = ({scrollRefs}) => {


    
    const state = useAppState().menu

 const scrollTo  = (id : string) => {


     console.log('AUSGEFÜHRT');
     
     //@ts-ignore
     document.getElementById('2').scrollIntoView({
         behavior : 'smooth'
     })
 }

     


     

    // One Category
    const categories = state.menu.categories.map(category => (
        <button id ='2' key = {category._id} className="text-gray-600 text-center m-1 pt-14 h-20 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 "  onClick= { () => scrollTo(category._id)} >
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