import { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { useActions } from '../../overmind';
import { Example } from '../Example/Example';
import { Home } from '../Home/Home';
import { Navigation } from '../Navigation/Navigation';

export const App: React.FunctionComponent = () => {
  const { loadApp } = useActions().example

  useEffect(() => {
    loadApp()
  }, [loadApp])

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/example" component={Example} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}
