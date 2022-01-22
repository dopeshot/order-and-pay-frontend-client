import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppState } from '../../overmind';
import { Dish } from '../../overmind/menu/state';
import { DishCard } from './DishCard';

type PropTypes = {
  setValue: Dispatch<SetStateAction<string>>,
  value: string
}

export const Searchbar: React.FunctionComponent<PropTypes> = ({ setValue, value }: PropTypes) => {

  const [searchbarOpen, setsearchbarOpen] = useState(false);

  const menu = useAppState().menu.MenuResponseObj

  const search = (value: string) => {
    let foundDishes: Dish[] = []

    if (value.length > 2) {
      menu.categories.forEach(category => {
        category.dishes.forEach(dish => {
          if (dish.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            foundDishes.push(dish)
          }
        })
      })
    }
    return foundDishes
  }

  let foundDishes: Dish[] = search(value)

  const foundDishesMapped = foundDishes.map(dish => (
    <DishCard dish={dish}></DishCard>
  ))

  const handleChange = (value: string) => {
    setValue(value)
  }

  return (<>
    <div className={`w-full text-gray-600 self-start rounded-lg  ${searchbarOpen ? `flex justify-center overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar` : ``} `}>
    </div >
    <div className='pt-5 container'>
      <div className="text-gray-600 self-start flex bg-light-grey rounded-lg h-8 pl-3 sticky container z-30">
        <button type="submit" className="left-3 mr-4 text-grey font-light">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* Searchbar object */}
        <input onFocus={(e) => setsearchbarOpen(true)} id="searchbar" className="rounded-lg w-full self-stretch bg-light-grey text-sm text-grey focus:outline-none" placeholder="Search..." onChange={event => { handleChange(event.target.value) }}></input>
      </div>
    </div>
    <div className='pt-3 container'>
      <div className={`container sticky rounded-lg z-30 ${value.length > 2 ? `bg-white` : null}`}>
        {searchbarOpen ?
          <div className="mt-4 mx-3 h-3/5 rounded-xl overflow-hidden z-20">
            {foundDishesMapped}
          </div> : null} </div>
    </div>

  </>)
}

// <div id="menuItem" className="flex justify-center overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" >
