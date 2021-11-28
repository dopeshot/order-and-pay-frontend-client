import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppState } from '../../overmind'
import { scroller } from "react-scroll";

//import { scrollTo } from '../../services/utilities'
import Scrollspy from 'react-scrollspy'
import { useEffect } from 'react';


type PropTypes = {
    scrollFC : (id: number) => void
}



// Category buttons that scroll to specific points in the menu
export const ScrollCats: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
    const state = useAppState().menu

    // One Category
    const categories = state.menu.categories.map((category,index) => (
        
           
        <button key={category._id + "_scrollButton" +index} id={"categoryScroll_" + index} className="text-red font-sofia font-bold text-center m-1 h-10 w-20 shadow-md rounded-md overflow-hidden text-xs b-2 focus:bg-red focus:text-white" onClick={() => props.scrollFC(index)}  >
            <div className="text-2xl ">
            </div>
            {category.name}
        </button>
        
        
    ))

    const sections : string[] = []
    state.menu.categories.forEach((category,index) => {
        sections.push("section-"+(index+1))
    });

    const scrollToButton = () => {
        console.log("scrolling")
        if(document.getElementsByClassName("bg-blue-700")[0]){
            console.log(document.getElementsByClassName("bg-blue-700")[0])
            document.getElementsByClassName("bg-blue-700")[0].scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
              })
            }
        }

    return (
        <header  className='grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto'>
        <FontAwesomeIcon icon="search" />
    <Scrollspy
        className="scrollspy grid grid-flow-col auto-cols-max md:auto-cols-min flex flex-row gap-1 overflow-auto"
        items={sections}
        currentClassName="bg-blue-700"
        onUpdate={() => scrollToButton()}
        offset={-50}
        
      >  
            {categories}
      </Scrollspy>
      </header>)
    
}