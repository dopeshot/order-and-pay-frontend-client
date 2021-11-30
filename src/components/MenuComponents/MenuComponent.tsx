import React from 'react';
import { DishCard } from '../../components/MenuComponents/DishCard';
import { useAppState } from '../../overmind';

const MenuComponentFC: React.FC<any> = ((props,ref) => {
    const state = useAppState().menu

    const refs = state.menu.categories.reduce<any>((acc, value) => {
        acc[value.index] = React.createRef();

        return acc;
    }, []);

    React.useImperativeHandle(ref, () => ({
        handleClick(id: number) {

            const catY = refs[id].current.getBoundingClientRect().top
            const mCY = document.querySelector("#menuComponent")!.getBoundingClientRect().top
            
            window.scrollTo({
                top: catY-mCY+300,
                behavior: 'smooth',
            })
        }

    }));

    // Main menu component showing all dishes by category
    const MenuComponent = state.menu.categories.map((category, index) => (
        <div key={category._id + index} id={"section-" + (index + 1)} className="grid grid-rows-2 pt-2 " ref={refs[index]}>
            {/* Category banner */}
            <div className="row-span-1 grid grid-rows-2 gap-2 p-3 text-white h-4/5 bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{ backgroundImage: "url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)" }}>
                <p className="text-lg font-semibold" >
                    {category.name}
                </p>
                {/* Description of category */}
                <p className="text-sm font-sofia text-description-grey "  >
                    {category.description}
                </p>
            </div >

            {/* Dishes of current category */}
            {dishIndexMap(category)}

        </div>

    ))
    // Maps all dishes of a category under said category
    function dishIndexMap(category: any) {

        const dishes = category.dishesIndex.map((index: number) => (
            <div key={state.menu.dishes[index]._id} id={category._id} className="block pb-2 dish">
                <DishCard dish={state.menu.dishes[index]} />
            </div>
        ))
        return dishes
    }



    return (
        <div ref={ref}>{MenuComponent}</div>
    )

})

//@ts-ignore
const MenuComponent = React.forwardRef(MenuComponentFC)

export default MenuComponent;