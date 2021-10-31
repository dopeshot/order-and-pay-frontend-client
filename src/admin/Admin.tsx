import { Route } from "react-router"

const ADMIN_PREFIX = '/admin'

export const Admin = () => {
    return (<>
      <Route exact path={`${ADMIN_PREFIX}/example`} component={() => (<h3>Example Admin</h3>)} />
      <Route exact path={`${ADMIN_PREFIX}`} component={() => (<h3>Admin</h3>)} />
    </>)
  }