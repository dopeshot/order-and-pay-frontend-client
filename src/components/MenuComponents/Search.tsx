import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { Dispatch, SetStateAction, useState } from 'react'

type PropTypes = {
    setValue: Dispatch<SetStateAction<string>>
}

export const Search: React.FunctionComponent<PropTypes> = ({ setValue }: PropTypes) => {
    const handleChange = (value: string) => {
        setValue(value)
    }

    return (
        <div className="w-full text-gray-600 self-start flex bg-light-grey rounded-lg h-8 pl-3">
            <button type="submit" className="left-3 mr-4 text-grey font-light">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            {/* Searchbar object */}
            <input autoFocus id="searchbar2" data-cy="searchbar2" className="w-full bg-transparent text-sm text-grey focus:outline-none " placeholder="Search..." onChange={event => { handleChange(event.target.value) }}></input>
        </div>
    )
}