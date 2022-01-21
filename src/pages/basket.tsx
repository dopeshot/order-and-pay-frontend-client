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
                <div className="flex justify-between">
                    <button type='button' className="rounded h-4 w-4 bg-red text-white font-bold text-xs" onClick={() => { subCount(index) }}>
                        <FontAwesomeIcon icon="minus" />
                    </button>
                    <p>{item.count}</p>
                    <button type='button' className="rounded h-4 w-4 bg-red text-white font-bold text-xs" onClick={() => { addCount(index) }}>
                        <FontAwesomeIcon icon="plus" />
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
                <p className="font-thin text-grey mb-8">{basket.items.length} Items</p>
                <div>{itemList}</div>
            </div>

        </div>
    )
}
