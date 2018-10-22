import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { CustomButton } from '../../common'
import { SignOut } from '../../modules/Auth/actions'
import logo from '../../../assets/logo.svg'
import { ReactComponent as LogoutIcon } from '../../../assets/logout.svg'
import {
	header,
	logoStyle,
	title,
	hideMobile,
	routes,
	active,
	logoutMobile,
	flexed,
	logoutIcon
} from './Header.module.scss'

const Header = ({ SignOut, username }) => (
	<div className={`${header} container-full`}>
		<img src={logo} alt="logo" className={logoStyle} />
		<h1 className={`${title} ${hideMobile}`}>Welcome</h1>
		<h4 className={hideMobile}>{username}!</h4>
		<div className={`center-text ${routes}`}>
			<NavLink to="/dashboard" activeClassName={active}>App</NavLink>
			<CustomButton onClick={SignOut}>
                Logout
			</CustomButton>
		</div>
		<div className={logoutMobile}>
			<h4>Welcome</h4>
			<button type="button" className={flexed} onClick={SignOut}>
                Logout
				<LogoutIcon className={logoutIcon} />
			</button>
		</div>
	</div>
)

const mapStateToProps = ({ auth }) => ({
	username: auth.name
})

export default connect(mapStateToProps, { SignOut })(Header)
