import { Link } from "react-router-dom"

export const DropDown: React.FunctionComponent = () => {
    return (
        <div className="shadow-md mt-2 absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg h-70"style={{width:'95vw',height:'75vh',position: 'fixed'}}>
           <a className="block p-4">Dish1</a>
           <a className="block p-4">Dish2</a>
           <a className="block p-4">Dish3</a>
        </div>
    )
}