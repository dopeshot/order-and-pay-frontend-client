import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { Admin } from '../../admin/Admin';
import { Client } from '../../client/Client';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Client} />
      </Switch>
    </Router>
  )
}
