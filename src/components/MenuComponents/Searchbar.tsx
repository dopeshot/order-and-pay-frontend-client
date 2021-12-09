import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React from 'react'

export const Searchbar: React.FunctionComponent = () => {

  return (
    <div className="w-full text-gray-600 flex bg-light-grey rounded-lg h-8 pl-3">
      <button type="submit" className="left-3 mr-4 text-grey font-light">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {/* Searchbar object */}
      <input id="searchbar" className="w-full bg-transparent text-sm text-grey focus:outline-none " placeholder="Search..."></input>
    </div>
  )

}