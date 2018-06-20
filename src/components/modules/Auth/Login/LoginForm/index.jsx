import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit'
import { CustomInput, CustomButton } from '../../../../common'
import { logInWithEmail } from '../../../../../actions/auth'
import NProgress from 'react-nprogress'
import 'react-nprogress/nprogress.css'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        error: null
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        const { dispatch } = this.props
        
        if(!email || !password) {
            this.setState(() => ({ error: 'Fill in all the fields' }))
        } else {
            NProgress.start()
            dispatch(logInWithEmail(email, password))
            .then(() => {
                    this.onLoginSuccess()
                    NProgress.done()
                }
            )
            .catch(() => this.onLoginFailure())
        }
    }

    onLoginFailure() {
        this.setState({ loading: false, error: "Authentication failed" })
        NProgress.done()
    }

    onLoginSuccess() {
        this.setState({ loading: false, email: '', password: '' })
        NProgress.done()
    }

    render() {
        const {email, password, error, loading} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div className="left-text login-inputs">
                    <CustomInput
                        icon="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email" 
                        autoComplete="on"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <CustomInput
                        icon="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password" 
                        autoComplete="on"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>
                {error &&
                    <div className="center-text">
                        <p style={{color: 'red'}}>{error}</p>
                    </div>
                }
                {loading ? (
                    <div className="center-text">
                        <Spinner name="pacman" />
                    </div>
                ) : (
                    <div className="login-btn">
                        <CustomButton typeBtn="submit">Login</CustomButton>
                    </div>
                    
                )}
            </form>
        )
    }
}

export default connect()(LoginForm)