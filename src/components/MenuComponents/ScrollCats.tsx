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
    const { menu } = useAppState().menu

    let prevStatuses: boolean[] = []

    return (
        <header className={`flex flex-nowrap content-evenly h-14 fixed top-0 w-full bg-white transition-opacity duration-200 ${shouldDisplayCategoryNavbar ? `` : `opacity-0`} `}>
            <button className="text-xl text-grey font-light" onClick={() => console.log("Searchicon clicked")} >
                <FontAwesomeIcon icon="search" />
            </button>
            <div id="scrollCats" className='gap-0 overflow-x-auto scrollbar-hide '>
                {sectionRefs.current.length > 0 && <Scrollspy offset={-60} sectionRefs={sectionRefs.current}>
                    {({ currentElementIndexInViewport, elementsStatusInViewport }) => {
                        if (!equalArray(elementsStatusInViewport, prevStatuses)) {
                            prevStatuses = elementsStatusInViewport
                            scrollToButton(currentElementIndexInViewport)
                        }

                        return <ul className="scrollspy grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1  pl-2 pt-2 pb-1">{
                            menu.categories.map((category, index) => (
                                <button onClick={() => scrollToRef(index)} key={category._id + "_scrollButton" + index} id={"categoryScroll_" + index} className={`font-sofia font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 transition-colors duration-300 ${currentElementIndexInViewport === index ? `bg-red text-white pseudoActiveElement` : `text-red`}`} >
                                    {category.name}
                                </button>
                            ))}
                        </ul>
                    }}
                </Scrollspy>}
            </div>
        </header>
    )
}
