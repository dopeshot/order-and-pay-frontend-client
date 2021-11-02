import { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { useActions } from '../../overmind';
import { Example } from '../../pages/Example/Example';
import { Home } from '../../pages/Home/Home';
import { Menu } from '../../pages/Menu/Menu';
import { Navigation } from '../Navigation/Navigation';

export const App: React.FunctionComponent = () => {
  //const { loadClient } = useActions().example
  const { loadClient } = useActions().menu

    useEffect(() => {
      loadClient()
    }, [loadClient])
  
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/example" component={Example} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </Router>
  )
}
