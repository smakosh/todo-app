import React from 'react'

const CustomButton = ({ typeBtn = 'button', onClick, children, className = '' }) => (
	/* eslint-disable react/button-has-type */
	<button
		type={typeBtn}
		onClick={onClick}
		className={`btn btn-rounded btn-outlined purple-btn ${className}`}
	>
		{children}
	</button>
	/* eslint-disable react/button-has-type */
)

export { CustomButton }
