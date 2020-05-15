import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { faHome, faObjectGroup, faInfoCircle, faPhoneAlt, faBlog, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import classes from './hamburgerMenu.module.scss'


const HamburgerMenu = (props) => {
    return (
        <div className={props.toggle ? classes.hamburgerMenuToggle : classes.hamburgerMenu}>
            <img src="/pisheyar-single-white.png" alt="" className={classes.hamburgerMenuLogo} />
            <FontAwesomeIcon icon={faRegistered} className={classes.hamburgerMenuItem} />
            <FontAwesomeIcon icon={faHome} className={classes.hamburgerMenuItem} />
            <FontAwesomeIcon icon={faObjectGroup} className={classes.hamburgerMenuItem} />
            <FontAwesomeIcon icon={faInfoCircle} className={classes.hamburgerMenuItem} />
            <FontAwesomeIcon icon={faServicestack} className={classes.hamburgerMenuItem} />
            <FontAwesomeIcon icon={faRegistered} className={classes.hamburgerMenuItem} />
        </div>
    )
}

export default HamburgerMenu
