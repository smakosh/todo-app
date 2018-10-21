import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions'
import LoginForm from './LoginForm'
import Logo from '../../../../assets/logo.svg'
import Google from './assets/google.svg'
import './style.scss'

const Login = ({ startLogin }) => (
	<div className="container-full center-text login">
		<div className="row aye">
			<div className="column xlarge-4 large-2 hide-tablet-down" />
			<div className="column xlarge-4 large-8 medium-12 small-12">
				<img src={Logo} alt="logo" className="logotodo" />
				<div className="card card-hoverable">
					<LoginForm />
					<div className="center-text">
						<h2 style={{ color: '#fff' }}>Or</h2>
					</div>
					<button type="button" className="google-button" onClick={startLogin}>
						<span className="google-button__icon">
							<img src={Google} alt="google icon" />
						</span>
						<span className="google-button__text">Sign in with Google</span>
					</button>
				</div>
			</div>
			<div className="column xlarge-4 large-2 hide-tablet-down" />
		</div>
	</div>
)

export default connect(null, { startLogin })(Login)
