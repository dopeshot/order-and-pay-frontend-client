import React from 'react';
import { DishCard } from '../../components/MenuComponents/DishCard';
import { useAppState } from '../../overmind';
import { Dish } from '../../overmind/menu/state';

type PropTypes = {
    sectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    openMenuItem: (dish: Dish) => void,
}

export const MenuComponent: React.FunctionComponent<PropTypes> = ({ sectionRefs, openMenuItem }: PropTypes) => {
    const { menu } = useAppState().menu

    return (<>
        {menu.categories.length > 0 && menu.categories.map((category, index) => (
            <div key={category._id + index} id={`section-${index}`} className={`pt-2`} ref={sectionRefs.current[index]}>
                {/* Category banner */}
                <div className="p-3 text-white h-4/5 bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{ backgroundImage: "url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)" }}>
                    <p className="text-lg font-semibold " >
                        {category.name}
                    </p>
                    {/* Description of category */}
                    <p className="text-xs text-description-grey "  >
                        {category.description}
                    </p>
                </div >
                {/* Dishes of current category */}
                <div className="px-5 divide-y divide-dividergrey ">
                    {category.dishesIndex.map((index: number) => (
                        //key will get changed to ID once backend has dish ids// openmenu(menu.dishes[index])
                        <div key={index + "_dishcard"} id={index + "_dishCard_Id"} className="block pb-2 pt-2 dish" onClick={() => openMenuItem(menu.dishes[index])} >
                            <DishCard dish={menu.dishes[index]} />
                        </div>))}
                </div>
            </div>
        ))}
    </>)
}
