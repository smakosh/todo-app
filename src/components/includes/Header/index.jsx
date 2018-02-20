import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { SignOut } from '../../../actions/auth'

import logo from '../../../assets/logo.svg'
import logout from '../../../assets/logout.svg'
import './style.css'

const Header = ({ SignOut }) => (
    <div className="App-header container-full">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Before you sleep</h1>

        <div className="center-text routes">
            <NavLink to="/dashboard" activeClassName="active">App</NavLink>
            <button 
                className="btn btn-outlined btn-rounded purple-btn"
                onClick={SignOut}
            >
                Logout
            </button>
        </div>

        <div className="logout-mobile">
            <h4>
                Tomorrow Todo
            </h4>
            <h4 className="flexed" onClick={SignOut}>
                Logout
                <img 
                    src={logout}
                    alt="logout"
                />
            </h4>
        </div>
    </div>
)

const connectedHeader = (dispatch) => (
    {
        SignOut: () => dispatch(SignOut())
    }
)

export default connect(undefined, connectedHeader)(Header);