import React from 'react';

const Burger = ({burgerClass, onClick}) => {

    return (
        <button  className={burgerClass} aria-label="Открыть меню" onClick={ onClick } >
                <span className="burger__icon burger__line"></span>
            </button>
    )
}
export { Burger }