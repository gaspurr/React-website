import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkbuttonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/sign-up" className="btn-mobile">
            <Button
             className={`btn ${checkbuttonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>

            {children}
            </Button>

        </Link>
    )
};