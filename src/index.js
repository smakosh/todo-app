import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './components/registerServiceWorker'
import AppRouter, { history } from './routers/AppRouters'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetTasks } from './actions/tasks'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import Spinner from 'react-spinkit'
import 'unnamed'
import './styles/App.css'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}

ReactDOM.render(
    <div className="container center-text fixedHeight">
        <Spinner name="pacman" />
    </div>, document.getElementById('root')
)

firebase.auth().onAuthStateChanged(user => {
    if(user) {
		store.dispatch(login(user.uid, user.displayName))
        store.dispatch(startSetTasks()).then(() => {
            renderApp()
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
		store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

registerServiceWorker()
