
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Example } from '../../pages/Example/Example';
import { ShowAll } from '../../pages/Menu/ShowAll';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from '../../pages/Error/NotFound';
import { LoadingMenu } from '../../pages/Menu/LoadMenu';

library.add(fas)

export const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/example" component={Example} />
        <Route exact path="/menu" component={LoadingMenu} />
        <Route exact path="/categories" component={ShowAll} />
        <Route exact path="/">
          <Redirect to="/menu" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
