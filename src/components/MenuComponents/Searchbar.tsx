//@ts-nocheck

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



//Searchbar to search through menu items
export const Searchbar: React.FunctionComponent = () => {

  return (

    <div className=" relative mx-auto text-gray-600 flex items-center">
      {/* Search icon will be swapped out with "font-awesome" icon */}
      <button type="submit" className="absolute left-3  mr-4 text-grey font-light">
        <FontAwesomeIcon icon="search" />
      </button>
      {/* Searchbar object */}
      <input id="searchbar" className=" bg-light-grey font-sofia h-8 px-9 rounded-lg text-sm text-grey focus:outline-none" style={{ width: '97vw' }} type="search" name="search" placeholder="Search..."></input>
    </div>

  )

}