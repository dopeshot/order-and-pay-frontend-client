import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Scrollspy } from "@makotot/ghostui";
import { useAppState } from '../../overmind';

type PropTypes = {
    sectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    shouldDisplayCategoryNavbar: boolean | React.MutableRefObject<any>,
    scrollToRef: (index: number) => void
}

// Category buttons that scroll to specific points in the menu
export const ScrollCats: React.FunctionComponent<PropTypes> = ({sectionRefs, shouldDisplayCategoryNavbar, scrollToRef}: PropTypes) => {
    const { menu } = useAppState().menu

    return (
        <div className={`fixed top-0 w-full bg-white transition-opacity duration-200 ${shouldDisplayCategoryNavbar ? `` : `opacity-0`} `}>
            <header className="grid grid-cols-10 h-14">
                <button className="col-span-1 flex items-center justify-center text-xl text-grey font-light" onClick={() => console.log("Searchicon clicked")} >
                    <FontAwesomeIcon icon="search" />
                </button>
                <div id="scrollCats" className='scrollspy col-span-9 grid grid-flow-col auto-cols-max md:auto-cols-min flex items-center flex-row gap-0 overflow-x-auto scrollbar-hide '>
                    {sectionRefs.current.length > 0 && <Scrollspy offset={-60} sectionRefs={sectionRefs.current}>
                        {({ currentElementIndexInViewport }) =>
                            <>{
                                menu.categories.map((category, index) => (
                                    <button onClick={() => scrollToRef(index)} key={category._id + "_scrollButton" + index} id={"categoryScroll_" + index} className={`font-sofia font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 transition-colors duration-300 ${currentElementIndexInViewport === index ? `bg-red text-white pseudoActiveElement` : `text-red`}`} >
                                        {category.name}
                                    </button>
                                ))}
                            </>
                        }
                    </Scrollspy>}
                </div>
            </header>
        </div>
    )
}
