//import { scrollTo } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollspy from 'react-scrollspy';
import { useAppState } from '../../overmind';

type PropTypes = {
    scrollFC: (id: number) => void
}

// Category buttons that scroll to specific points in the menu
export const ScrollCats: React.FunctionComponent<PropTypes> = (props: PropTypes) => {

    const state = useAppState().menu

    const categories = state.menu.categories.map((category, index) => (
        <button key={category._id + "_scrollButton" + index} id={"categoryScroll_" + index} className="text-red font-sofia font-bold text-center m-1 h-8 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 activeElement" onClick={() => props.scrollFC(index)}  >
            <div className="text-2xl ">
            </div>
            {category.name}
        </button>
    ))

    //Setting up the sections scrollspy watches
    const sections: string[] = []
    state.menu.categories.forEach((category, index) => {
        sections.push("section-" + (index + 1))
    });

    const scrollToButton = () => {
        const activeElements = document.querySelector(".pseudoActiveElement")!
        const header = document.querySelector('#scrollCats')!
        const scrollSpy = document.querySelector('.scrollspy')!

        header.scrollTo({
            left: activeElements.getBoundingClientRect().left - scrollSpy.getBoundingClientRect().left -4,
            behavior: 'smooth',

        })
    }

    return (
        <header className="grid grid-cols-10 h-14">
            <p  className="col-span-1 flex items-center justify-center text-xl text-grey font-light" >
                <FontAwesomeIcon icon="search"/>
            </p>
        <div id="scrollCats" className='col-span-9 grid grid-flow-col auto-cols-max md:auto-cols-min flex items-center flex-row gap-0 overflow-auto'>
            
            <Scrollspy
                className="scrollspy grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto"
                items={sections}
                currentClassName="pseudoActiveElement"
                onUpdate={() => { scrollToButton() }}
                offset={-100}
            >
                {categories}
            </Scrollspy>
        </div>
        </header>
        )

}