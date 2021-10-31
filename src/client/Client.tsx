import { useEffect } from "react"
import { Route } from "react-router"
import { Navigation } from "../components/Navigation/Navigation"
import { useActions } from "../overmind"
import { Example } from "./pages/Example/Example"
import { Home } from "./pages/Home/Home"

// Client Frontend with Routes for Client
export const Client = () => {
    const { loadClient } = useActions().example

    useEffect(() => {
      loadClient()
    }, [loadClient])
  
    return (<>
        <Navigation />
        <Route exact path="/example" component={Example} />
        <Route exact path="/" component={Home} />
    </>)
}