import React from 'react';
import { DishCard } from '../../components/MenuComponents/DishCard';
import { useAppState } from '../../overmind';
import { Category, Dish } from '../../overmind/menu/state';

type PropTypes = {
    sectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    openMenuItem: (dish: Dish, category: Category & { dishes: Dish[]; }) => void,
    menuItemOpen: boolean
}

export const MenuComponent: React.FunctionComponent<PropTypes> = ({ sectionRefs, openMenuItem, menuItemOpen }: PropTypes) => {
    const { MenuResponseObj: categoryAndDishes } = useAppState().menu

    return (<>
        {categoryAndDishes.categories.length > 0 && categoryAndDishes.categories.map((category, index) => (
            <div key={category._id + index} id={`section-${index}`} className={`pt-2`} ref={sectionRefs.current[index]}>
                {/* Category banner */}
                <div className="p-3 text-white h-4/5 bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{ backgroundImage: "url(" + category.image + ")" }}>
                    <p className="text-lg font-semibold">
                        {category.title}
                    </p>
                    {/* Description of category */}
                    <p className="text-xs text-description-grey">
                        {category.description}
                    </p>
                </div>
                {/* Dishes of current category */}
                <div className="px-5 divide-y divide-dividergrey">
                    {category.dishes.map((dish) => (
                        //key will get changed to ID once backend has dish ids// openmenu(menu.dishes[index])
                        <div key={dish._id} id={index + "_dishCard_Id"} className="block pb-2 pt-2 dish" onClick={() => openMenuItem(dish, category)} >
                            <DishCard category={category} dish={dish} />
                        </div>))}
                </div>
            </div>
        ))}
    </>)
}
