import { Link } from "react-router-dom"

export const Navigation: React.FunctionComponent = () => {
    return (
        <div className="">
            <ul className="flex justify-around">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/example">Example</Link>
                </li>
            </ul>
        </div>
    )
}
