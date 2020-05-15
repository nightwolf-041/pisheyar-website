import React from 'react'
import classes from './hamburgerMenu.module.scss'


const HamburgerMenu = (props) => {
    return (
        <div className={props.toggle ? classes.hamburgerMenuToggle : classes.hamburgerMenu}>
            <img src="/pisheyar-single-white.png" alt="" className={classes.hamburgerMenuLogo} />
            
        </div>
    )
}

export default HamburgerMenu
