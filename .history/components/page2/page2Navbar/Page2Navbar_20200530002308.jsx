import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import classes from './page2Navbar.module.scss'

const Page2Navbar = (props) => {

    return (
        <nav className={classes.page2Navbar}>
            <div className={classes.page2NavbarContainer}>
                <FontAwesomeIcon icon={faUserCircle} className={classes.page2NavbarLoginIcon} />
                <img src="/pishe.png" alt="pisheyar" className={classes.page2NavbarLogo} /> 
                <div className={classes.page2NavbarHomeImageIconBox}>
                    <img src="/factory.svg" alt="" className={classes.page2NavbarHomeImageIcon} />
                </div>
            </div>
        </nav>
    )
}

export default Page2Navbar;