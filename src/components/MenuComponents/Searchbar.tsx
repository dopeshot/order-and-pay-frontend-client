import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppState } from '../../overmind';
import { Allergy, Dish, Label } from '../../overmind/menu/state';
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

  const handleChange = (value: string) => {
    setValue(value)
  }

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
    <button className="text-red flex flex-col font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 justify-items-center" >
      <FontAwesomeIcon icon={faHamburger} className='self-center' />
      <div className='self-center'>{allergy}</div>
    </button>
  ))

  const labelsMapped = getLabels().map(label => (
    <button className="text-green-600 flex flex-col font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 justify-items-center" >
      <FontAwesomeIcon icon={faHamburger} className='self-center' />
      <div className='self-center'>{label}</div>
    </button>
  ))

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
    <div className='pt-3 container w-full pr-5'>
      <div className={`container h-3/5  rounded-lg z-30 overflow-y-scroll bg-white`}>
        {searchbarOpen ?
          <div className="mt-4 mx-3 rounded-xl z-20">
            <div className="flex flex-wrap justify-between content">{allergiesMapped}</div>
            <div className="flex flex-wrap justify-between content">{labelsMapped}</div>
            <div>{foundDishesMapped}</div>
          </div> : null}
      </div>
    </div>

  </>)
}

// <div id="menuItem" className="flex justify-center overflow-y-auto h-full w-full left-0 fixed bottom-0 bgtrans no-scrollbar" >
{/* return (
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

                <div>{foundDishesMapped}</div>
              </div>
            </div>
          </div>
        } */}