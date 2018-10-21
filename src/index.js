import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Spinner from 'react-spinkit'
import registerServiceWorker from './components/registerServiceWorker'
import AppRouter, { history } from './routers/AppRouters'
import configureStore from './store/configureStore'
import { startSetTasks } from './components/modules/Tasks/actions'
import { login, logout } from './components/modules/Auth/actions'
import { firebase } from './firebase/firebase'
import 'unnamed'
import './styles/App.scss'

const store = configureStore()

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

let hasRendered = false

const renderApp = () => {
	if (!hasRendered) {
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
	if (user) {
		store.dispatch(login(user.uid, user.displayName))
		store.dispatch(startSetTasks()).then(() => {
			renderApp()
			if (history.location.pathname === '/') {
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
