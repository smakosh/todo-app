import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { CustomButton } from '../../common'
import { SignOut } from '../../../actions/auth'
import logo from '../../../assets/logo.svg'
import logout from '../../../assets/logout.svg'
import './style.css'

const Header = ({ SignOut, username }) => (
    <div className="App-header container-full">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title dn-m">Welcome</h1>
        <h4 className="dn-m">{username} !</h4>
        <div className="center-text routes">
            <NavLink to="/dashboard" activeClassName="active">App</NavLink>
            <CustomButton onClick={SignOut}>
                Logout
            </CustomButton>
        </div>
        <div className="logout-mobile">
            <h4>Welcome</h4>
            <h4 className="flexed" onClick={SignOut}>
                Logout
                <img src={logout} alt="logout"/>
            </h4>
        </div>
    </div>
)

const mapStateToProps = ({ auth }) => ({
    username: auth.name
})

export default connect(mapStateToProps, { SignOut })(Header)
