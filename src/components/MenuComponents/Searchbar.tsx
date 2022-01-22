import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react'
import { Search } from './Search';
import { useAppState } from '../../overmind';
import { Allergy, Dish, Label } from '../../overmind/menu/state';
import { DishCard } from './DishCard';

export const Searchbar: React.FunctionComponent = () => {


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



  const getAllergies = () => {
    let allergies: string[] = []

    menu.categories.forEach(category => {
      category.dishes.forEach(dish => {
        dish.allergies.forEach(allergy => {
          if (!allergies.includes(allergy)) {
            allergies.push(allergy)
          }

        })
      })
    })
    console.log(allergies)
    return allergies
  }

  const getLabels = () => {
    let labels: string[] = []
    menu.categories.forEach(category => {
      category.dishes.forEach(dish => {
        dish.labels.forEach(label => {
          if (!labels.includes(label)) {
            labels.push(label)
          }

        })
      })
    })
    console.log(labels)

    return labels
  }

  const foundDishesMapped = foundDishes.map(dish => (
    <div className='p-5'>
      <DishCard dish={dish}></DishCard>
    </div>

  ))

  const allergiesMapped = getAllergies().map(allergy => (

    <div>{allergy}</div>

  ))

  const labelsMapped = getLabels().map(label => (
    <div>{label}</div>
  ))




  return (
    <div className="w-full text-gray-600 self-start flex bg-light-grey rounded-lg h-8 pl-3">
      <button type="submit" className="left-3 mr-4 text-grey font-light">
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <input onFocus={(e) => setsearchbarOpen(true)} id="searchbar" className="w-full bg-transparent text-sm text-grey focus:outline-none " placeholder="Search..."></input>
      {searchbarOpen &&
        <div id="menuItem" className="flex justify-center overflow-y-auto  h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" >
          <div className="container pt-3">
            <div className="mt-24 px-3"><Search setValue={setValue}></Search></div>
            <div className="bg-white mt-4 mx-3 h-3/5 rounded-xl overflow-hidden">
              <div className="flex flex-wrap justify-between content">{allergiesMapped}</div>
              <div className="flex flex-wrap justify-between content">{labelsMapped}</div>
              <div>{foundDishesMapped}</div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
