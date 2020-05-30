import React from 'react';
// import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-solid-svg-icons";
import classes from './navbar.module.scss'

const Page2Navbar = (props) => {

    return (
        <nav className={classes.page2Navbar}>

            <div className={classes.page2NavbarContainer}>
                <FontAwesomeIcon icon={} className={classes.page2NavbarLoginIcon} />
                <img src="/pishe.png" alt="pisheyar" className={classes.page2NavbarLogo} /> 
                <FontAwesomeIcon icon={} className={classes.page2NavbarHomeIcon} />
            </div>
        </nav>
    )
}

export default Page2Navbar