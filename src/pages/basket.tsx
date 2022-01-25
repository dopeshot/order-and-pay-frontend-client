import { useActions, useAppState } from '../overmind';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DishCard } from '../components/MenuComponents/DishCard';
import { Dish } from '../overmind/menu/state';
import { isComputedPropertyName } from 'typescript';
import { getDish, getPrice, idToName, priceToLocal } from '../services/utilities';

export const Basket: React.FunctionComponent = () => {

    const { addCount, subCount, removeFromBasket } = useActions().basket
    const { itemsCount } = useAppState().basket.basket
    const menu = useAppState().menu.MenuResponseObj
    const basket = useAppState().basket.basket


    const itemList = basket.items.map((item, index) => (
        <div>
            <div className="flex justify-between">
                <p className="mb-1">{getDish(item, menu).title}</p>
                <button onClick={() => { removeFromBasket(index) }}><FontAwesomeIcon icon="trash" /></button>
            </div>
            <p className="text-xs text-grey mb-6">{item.pickedChoices.map((choice, index) => (
                <>{idToName(getDish(item, menu), choice, menu)}</>
            ))}</p>
            <div className="flex justify-between">
                <p>{priceToLocal(getPrice(item, menu))}</p>
                <div className="flex justify-between items-center">
                    <button type='button' className="rounded h-5 w-6 bg-button-grey text-light-black  font-bold text-xs text-center" onClick={() => { subCount(index) }}>
                        <FontAwesomeIcon className="text-center" icon="minus" />
                    </button>
                    <p className='p-2'>{item.count}</p>
                    <button type='button' className=" rounded h-5 w-6 bg-red text-white font-bold text-xs text-center" onClick={() => { addCount(index) }}>
                        <FontAwesomeIcon className="text-center" icon="plus" />
                    </button>
                </div>
            </div>

        </div >
    ))

    return (
        <div id="page" className=''>
            <div className="flow-root">
                <button className="float-left p-4 pl-4 text-2xl text-left">
                    <Link id="mainMenu" to="/menu" ><FontAwesomeIcon icon="chevron-left" /></Link>
                </button>
                <button className="float-right p-4 text-2xl pr-6 text-right">
                    <FontAwesomeIcon icon="bars" />
                </button>
            </div>
            <div id="container" className="container p-5">
                <h1 className="font-bold text-4xl pb-2">Warenkorb</h1>
                <p className="font-thin text-grey mb-8">{itemsCount} Items</p>
                <div>{itemList}</div>
            </div>
            <footer className="w-full h-14 bg-red shadow-category fixed bottom-0 ">
                <button className="container h-full flex justify-around items-center text-white font-bold">
                    <Link id="kasse" to="/kasse" >Zur Kasse</Link>

                </button>
            </footer>

        </div>
    )
}
