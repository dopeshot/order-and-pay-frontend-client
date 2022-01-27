import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppState } from '../../overmind';
import { Allergen, Category, Dish, Label } from '../../overmind/menu/state';
import { DishCard } from './DishCard';

type PropTypes = {
  setValue: Dispatch<SetStateAction<string>>,
  value: string,
  openMenuItem: (dish: Dish, category: Category & { dishes: Dish[] }) => void
}

export const Searchbar: React.FunctionComponent<PropTypes> = ({ setValue, value, openMenuItem }: PropTypes) => {

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

  const handleChange = (value: string) => {
    setValue(value)
  }

  const getallergens = () => {
    let allergens: string[] = []

    menu.categories.forEach(category => {
      category.dishes.forEach(dish => {


        dish.allergens.forEach(Allergen => {
          if (!allergens.includes(Allergen) && Allergen != "") {
            allergens.push(Allergen)
          }

        })
      })
    })

    return allergens
  }

  const getLabels = () => {
    let labels: string[] = []
    menu.categories.forEach(category => {
      category.dishes.forEach(dish => {
        dish.labels.forEach(label => {
          if (!labels.includes(label) && label != "") {
            labels.push(label)
          }

        })
      })
    })


    return labels
  }

  const foundDishesMapped = foundDishes.map(dish => (
    <div className='p-5' onClick={() => {
      openMenuItem(dish, menu.categories.find(category => category._id === dish.category)!)
      setsearchbarOpen(false)
    }}>
      <DishCard dish={dish} category={menu.categories.find(category => category._id === dish.category)!}></DishCard>
    </div>
  ))

  const allergensMapped = getallergens().map(Allergen => (
    <button className="text-red flex flex-col font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 justify-items-center" >
      <FontAwesomeIcon icon={faHamburger} className='self-center' />
      <div className='self-center'>{Allergen}</div>
    </button>
  ))

  const labelsMapped = getLabels().map(label => (
    <button className="text-green-600 flex flex-col font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 justify-items-center" >
      <FontAwesomeIcon icon={faHamburger} className='self-center' />
      <div className='self-center'>{label}</div>
    </button>
  ))

  return (
    <>
      <div className={`w-full text-gray-600 self-start rounded-lg scrollbar-hide  ${searchbarOpen ? `flex justify-center overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar` : ``} `} onClick={() => setsearchbarOpen(false)}>
      </div >
      <div className='scrollbar-hide'>
        <div className='pt-5'>
          <div className={`text-gray-600 self-start flex bg-light-grey rounded-lg h-8 pl-3 ${searchbarOpen ? `sticky` : ``}  z-30`}>
            <button type="submit" className="left-3 mr-4 text-grey font-light">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {/* Searchbar object */}
            <input onFocus={(e) => setsearchbarOpen(true)} id="searchbar" className="rounded-lg w-full self-stretch bg-light-grey text-sm text-grey focus:outline-none" placeholder="Search..." onChange={event => { handleChange(event.target.value) }}></input>
          </div>
        </div>
        <div className='pt-3 scrollbar-hide '>
          <div className={` h-3/5 container scrollbar-hide ${searchbarOpen ? `fixed` : ``}  rounded-lg z-30 overflow-y-scroll bg-white`}>
            {searchbarOpen ?
              <div className="flex flex-col mt-4 mx-3 rounded-xl z-20">
                <div className="flex h-11 scrollbar-hide justify-between overflow-x-scroll content">
                  <div className='flex'>{allergensMapped}</div></div>
                <div className="flex h-11 scrollbar-hide container justify-between overflow-x-scroll content">
                  <div className='flex'>{labelsMapped}</div></div>
                <div className=''>{foundDishesMapped}</div>
              </div> : null}
          </div>
        </div>
      </div>
    </>)
}
