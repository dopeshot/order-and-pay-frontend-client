import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Scrollspy } from "@makotot/ghostui";
import { useAppState } from '../../overmind';
import { equalArray } from '../../services/utilities';

type PropTypes = {
    sectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    shouldDisplayCategoryNavbar: boolean | React.MutableRefObject<any>,
    scrollToRef: (index: number) => void,
    scrollToButton: (index: number) => void
}

// Category buttons that scroll to specific points in the menu
export const ScrollCats: React.FunctionComponent<PropTypes> = ({ sectionRefs, shouldDisplayCategoryNavbar, scrollToRef, scrollToButton }: PropTypes) => {
    const { MenuResponseObj: categoryAndDishes } = useAppState().menu

    let prevStatuses: boolean[] = []
    console.log(sectionRefs)

    return (
        <div className={`flex fixed bg-white transition-opacity duration-200 content-center w-full ${shouldDisplayCategoryNavbar ? `` : `opacity-0 pointer-events-none`} `}>
            <button className="text-xl text-grey font-light pl-4 pr-4" onClick={() => console.log("Searchicon clicked")} >
                <FontAwesomeIcon icon="search" />
            </button>
            <div id="scrollCats" className='flex gap-0 scrollbar-hide $ overflow-x-auto'>
                {sectionRefs.current.length > 0 && <Scrollspy offset={-60} sectionRefs={sectionRefs.current} rootSelector='#page'>
                    {({ currentElementIndexInViewport, elementsStatusInViewport }) => {

                        if (!equalArray(elementsStatusInViewport, prevStatuses)) {
                            prevStatuses = elementsStatusInViewport
                            //console.log(sectionRefs)
                            scrollToButton(currentElementIndexInViewport)
                        }
                        return <ul className="scrollspy flex gap-1 pl-2 pt-2 pb-1">{
                            categoryAndDishes.categories.map((category, index) => (
                                <button onClick={() => scrollToRef(index)} key={category._id + "_scrollButton" + index} id={"categoryScroll_" + index} className={`font-bold text-center m-1 min-h-min h-8 shadow-md rounded-md text-xs b-2 w-20 min-w-min transition-colors duration-300 ${currentElementIndexInViewport === index ? `bg-red text-white pseudoActiveElement` : `text-red`}`} >
                                    {category.title}
                                </button>
                            ))}
                        </ul>
                    }}
                </Scrollspy>}
            </div>
        </div>
    )
}
