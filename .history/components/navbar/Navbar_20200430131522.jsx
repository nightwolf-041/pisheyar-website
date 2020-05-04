import React from 'react';
import classes from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav>
            <a className={classes.navbarLogonLink}>ثبت نام . ورود</a>
            <a className={classes.navbarSmoothLink}></a>
        </nav>
    )
}

export default Navbar