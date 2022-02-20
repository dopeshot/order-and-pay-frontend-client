import { useActions, useAppState } from '../../overmind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDish, getPrice, idToName, priceToLocal } from '../../services/utilities';
import { FooterButton } from '../../components/UIComponents/FooterButton';
import { Header } from '../../components/UIComponents/Header';

export const Basket: React.FunctionComponent = () => {

    const { addCount, subCount } = useActions().basket
    const { itemsCount } = useAppState().basket.basket
    const menu = useAppState().menu.MenuResponseObj
    const basket = useAppState().basket.basket



    const itemList = basket.items.map((item, index) => (
        <div className='mb-5 flex row justify-between' key={index} >
            <div className="">
                <p data-cy={"title-" + index}>{getDish(item, menu).title}</p>
                <div className="text-xs text-grey">{item.pickedChoices.map((choice, index) => (
                    <p key={choice.id}  >{idToName(getDish(item, menu), choice, menu)} </p>
                ))}

                    {item.note.length > 0 && <p> Notiz an die Küche: {item.note} </p>}
                </div>
                <div className="flex justify-between">
                    <p className=' text-lg font-bold'>{priceToLocal(getPrice(item, menu))}</p>
                </div>
            </div >
            <div className="flex justify-between items-center">
                <button type='button' data-cy={"minus-" + index} className="rounded h-5 w-6 bg-button-grey text-light-black font-bold text-xs text-center" onClick={() => { subCount(index) }}>
                    <FontAwesomeIcon className="text-center" icon="minus" />
                </button>
                <p className='p-2' data-cy={"count-" + index}>{item.count}</p>
                <button type='button' data-cy={"plus-" + index} className="rounded h-5 w-6 bg-red text-white font-bold text-xs text-center" onClick={() => { addCount(index) }}>
                    <FontAwesomeIcon className="text-center" icon="plus" />
                </button>
            </div>
        </div>


    ))

    return (
        <>
            <div id="page" data-cy="page" className='container px-5 divide-y divide-dividergrey'>
                <div>
                    <Header parentId='mainMenu' parentLink="/menu" />
                    <div id="container" className="container p-5">
                        <h1 data-cy="title" className="font-bold text-4xl pb-2">Warenkorb</h1>
                        <p data-cy="itemCount" className="font-thin text-grey mb-8">{itemsCount} Items</p>
                        <div>{itemList}</div>
                    </div>
                </div>
                <div className="container p-5 text-xl mb-52">
                    <div className="text-xl flex justify-between">
                        <p className=''>Zwischensumme</p>
                        <p className="font-bold text-2xl">{priceToLocal(basket.price)}</p>
                    </div>
                    <p className='text-grey text-sm'> inkl. Mehrwertsteuer</p>
                </div>
            </div>
            <FooterButton id="payscreen" text='Zur Kasse' link="/payscreen" />
        </>
    )
}
