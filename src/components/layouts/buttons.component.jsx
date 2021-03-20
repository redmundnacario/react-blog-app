import React from 'react'
import { Button as ButtonB } from 'react-bootstrap'

const Button = ({className, variant, type, size, onClick, text }) => {
    return (
        <ButtonB
            className={className}
            variant={variant}
            type={type}
            size={size}
            onClick={(e) => onClick(e)}
            >
            {text}
        </ButtonB>
    )
}

export default Button