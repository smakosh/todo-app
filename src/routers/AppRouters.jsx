import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import App from '../components/App'
import Notfound from '../components/404'
import Create from '../components/modules/Create'
import Edit from '../components/modules/Edit'
import Login from '../components/modules/Auth/Login'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={App} />
                <PrivateRoute path="/create" component={Create} />
                <PrivateRoute path="/edit/:id" component={Edit} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter