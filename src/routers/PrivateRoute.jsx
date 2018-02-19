import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/includes/Header'

const PrivateRoute = (
    {
        isLoggedin,
        component: Component,
        ...rest
    }
) => (
    <Route {...rest} component={(props) => (
        isLoggedin ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
)

const mapStateToProps = (state) => (
    {
        isLoggedin: !!state.auth.uid
    }
)

export default connect(mapStateToProps)(PrivateRoute)