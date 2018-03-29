import React from 'react'

const CustomButton = ({typeBtn, onClick, children}) => (
    <button type={typeBtn} onClick={onClick} className="btn btn-rounded btn-outlined purple-btn">
        {children}
    </button>
)

export { CustomButton }