import React from "react";
import './button.css';

const STYLES = [
    'btn--solid--primary--light',
    'btn--solid--primary--dark',
    'btn--solid--primary--disabled',
    'btn--primary--light',
    'btn--primary--dark',
    'btn--primary--disabled',
    'btn--primary--light--outlined',
    'btn--primary--dark--outlined',
    'btn--primary--disabled--outlined'
];

const SIZES = ['btn-medium', 'btn-large'];

const Button = ({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize,
        title

    }) => {

        const btnClass = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

            return ( 
            <button className={`btn ${btnClass} ${btnSize}`} onClick={onClick} type={type}> 
              {title}
            </button>
            );
     };

     export default Button;