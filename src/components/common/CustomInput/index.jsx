import React from 'react'

const CustomInput = ({icon, type, placeholder, autoComplete, value, name, onChange}) => (
    <div className="input-field purple-input">
        <span className={`${icon}-icon`}></span>
        <input 
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            name={name}
        />
    </div>
)

export { CustomInput }