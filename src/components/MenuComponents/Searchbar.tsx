import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react'
import { Search } from './Search';
import { useAppState } from '../../overmind';
import { Category, Dish } from '../../overmind/menu/state';
import { DishCard } from './DishCard';
import { getCategoryFromId } from '../../services/utilities';

type PropTypes = {
  openMenuItem: (dish: Dish, category: Category & { dishes: Dish[]; }) => void
}

export const Searchbar: React.FunctionComponent<PropTypes> = ({ openMenuItem }: PropTypes) => {
  const [value, setValue] = useState("")
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


  const foundDishesMapped = foundDishes.map((dish, index) => (
    <div className='p-5' data-cy={"result-" + index} onClick={() => {
      openMenuItem(dish, getCategoryFromId(dish.categoryId, menu)!)
      setsearchbarOpen(false)
    }}>
      <DishCard dish={dish} category={menu.categories.find(category => category._id === dish.categoryId)!}></DishCard>
    </div>
  ))

  return (
    <div className="w-full text-gray-600 self-start flex bg-light-grey rounded-lg h-8 pl-3">
      <button type="submit" className="left-3 mr-4 text-grey font-light">
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <input onFocus={(e) => setsearchbarOpen(true)} id="searchbar" data-cy="searchbar" className="w-full bg-transparent text-sm text-grey focus:outline-none " placeholder="Search..."></input>
      {searchbarOpen &&
        <div className="flex justify-center overflow-y-auto  h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" onClick={() => setsearchbarOpen(false)} >
          <div id="searchContainer" data-cy="searchContainer" className="container pt-3">
            <div className="mt-28 px-3"><Search setValue={setValue}></Search></div>
            <div id="searchDropDown" data-cy="searchDropDown" className="bg-white mt-4 mx-3 h-3/5 rounded-xl overflow-y-scroll no-scrollbar">
              {foundDishesMapped}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
