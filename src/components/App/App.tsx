
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ShowAll } from '../../pages/Menu/ShowAll';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from '../../pages/Error/NotFound';
import { LoadingMenu } from '../../pages/Menu/LoadMenu';
import { Basket } from '../../pages/Basket/basket';
import { Checkout } from '../../pages/Basket/Checkout';
import { OrderConfirmation } from '../../pages/Basket/OrderConfirmation';

library.add(fas)

export const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/menu" component={LoadingMenu} />
        <Route exact path="/categories" component={ShowAll} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/payscreen" component={Checkout} />
        <Route exact path="/orderConformation" component={OrderConfirmation} />
        <Route exact path="/">
          <Redirect to="/menu" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
