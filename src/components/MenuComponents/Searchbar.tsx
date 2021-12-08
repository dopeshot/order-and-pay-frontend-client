

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



//Searchbar to search through menu items
export const Searchbar: React.FunctionComponent = () => {

  return (

    <div className="w-full text-gray-600 flex justify- bg-light-grey rounded-lg  h-8 pl-3 ">
      <button type="submit" className=" left-3  mr-4 text-grey font-light">
        <FontAwesomeIcon icon="search" />
      </button>
      {/* Searchbar object */}
      <input id="searchbar" className="w-full bg-light-grey  font-sofia text-sm text-grey focus:outline-none " placeholder="Search..."></input>
    </div>

  )

}