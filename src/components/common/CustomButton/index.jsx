import React from 'react'

const CustomButton = ({ typeBtn, onClick, children, className = '' }) => (
    <button type={typeBtn} onClick={onClick} className={`btn btn-rounded btn-outlined purple-btn ${className}`}>
        {children}
    </button>
)

export { CustomButton }