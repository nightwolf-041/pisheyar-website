import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import classes from './page2Navbar.module.scss'

const Page2Navbar = (props) => {

    return (
        <nav className={classes.page2Navbar}>
            <div className={classes.page2NavbarContainer}>
                <FontAwesomeIcon icon={} className={classes.page2NavbarLoginIcon} />
                <img src="/pishe.png" alt="pisheyar" className={classes.page2NavbarLogo} /> 
                <img src="/factory.svg" alt="" className={classes.page2NavbarHomeImageIcon} />
            </div>
        </nav>
    )
}

export default Page2Navbar;