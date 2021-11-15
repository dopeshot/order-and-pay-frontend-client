
import { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { useActions } from '../../overmind';
import { Example } from '../../pages/Example/Example';
import { Menu } from '../../pages/Menu/Menu';
import { ShowAll } from '../../pages/Menu/ShowAll';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)


export const App: React.FunctionComponent = () => {
  //const { loadClient } = useActions().example
  const { loadMenu } = useActions().menu

    useEffect(() => {
      loadMenu()
      
    })
  
  return (
    <Router>
      <Switch>
        <Route exact path="/example" component={Example} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/categories" component={ShowAll}/>
      </Switch>
    </Router>
  )
}
