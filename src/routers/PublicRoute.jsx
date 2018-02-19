import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = (
    {
        isLoggedin,
        component: Component,
        ...rest
    }
) => (
    <Route {...rest} component={(props) => (
        isLoggedin ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    )} />
)

const mapStateToProps = (state) => (
    {
        isLoggedin: !!state.auth.uid
    }
)

export default connect(mapStateToProps)(PublicRoute)