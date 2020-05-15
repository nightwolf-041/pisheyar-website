import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { faHome, faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import classes from './hamburgerMenu.module.scss'


const HamburgerMenu = (props) => {
    return (
        <div className={props.toggle ? classes.hamburgerMenuToggle : classes.hamburgerMenu}>
            <img src="/pisheyar-single-white.png" alt="" className={classes.hamburgerMenuLogo} />

        </div>
    )
}

export default HamburgerMenu
