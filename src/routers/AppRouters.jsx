import React from 'react'
import App from '../components/App'
import Notfound from '../components/404'
import Create from '../components/task/create-task'
import EditTask from '../components/task/edit-task'
import Login from '../components/auth/login'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={App} />
                <PrivateRoute path="/create" component={Create} />
                <PrivateRoute path="/edit/:id" component={EditTask} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter