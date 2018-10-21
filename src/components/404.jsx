import React from 'react'
import '../styles/help.scss'
import { Link } from 'react-router-dom'

const Notfound = () => (
	<div className="container center-text">
		<div className="card help">
			<h4>404 - Page not found, <Link to="/">Go back Home</Link></h4>
		</div>
	</div>
)

export default Notfound
