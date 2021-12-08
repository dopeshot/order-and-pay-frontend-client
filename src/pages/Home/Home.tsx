import { Link } from "react-router-dom"

export const Home: React.FunctionComponent = () => {
    return (
        <div className="container mt-2">
            <h3 className="text-2xl font-bold">Home</h3>
            <Link to="/menu">Go to Menu</Link>
        </div>
    )
}