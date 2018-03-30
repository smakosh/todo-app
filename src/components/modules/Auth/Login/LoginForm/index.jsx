import React, { Component } from 'react'
import firebase from 'firebase'

import { CustomInput, CustomButton, Loader } from '../../../../common'

import NProgress from 'react-nprogress'
import 'react-nprogress/nprogress.css'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        error: null
    }

    onEmailChange = (e) => {
        const email = e.target.value
        this.setState({ email })
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState({ password })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        
        if(!email || !password) {
            this.setState(() => ({ error: 'Fill in all the fields' }))
        } else {
            NProgress.start()
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailure.bind(this))
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
        return (
            <form onSubmit={this.onSubmit}>
                <div className="left-text login-inputs">
                    <CustomInput
                        icon="email"
                        type="email"
                        placeholder="Enter your email" 
                        autoComplete="on"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <CustomInput
                        icon="password"
                        type="password"
                        placeholder="Enter your password" 
                        autoComplete="on"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                </div>
                {
                    this.state.error ? (
                        <div className="center-text">
                            <p style={{color: 'red'}}>{this.state.error}</p>
                        </div>
                    ) : null
                }
                {
                    this.state.loading ? (
                        <div className="center-text">
                            <Loader />
                        </div>
                    ) : (
                        <div className="login-btn">
                            <CustomButton
                                typeBtn="submit"
                            >
                                Login
                            </CustomButton>
                        </div>
                        
                    )
                }
            </form>
        )
    }
}

export default LoginForm