import React from 'react';
import classes from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav>
            <a className={classes.navbarLogonLink}>ثبت نام . ورود</a>
            <a className={classes.navbarSmoothLink}>خانه</a>
            <a className={classes.navbarSmoothLink}>دسته بندی</a>
            <a className={classes.navbarSmoothLink}>درباره ما</a>
            <a className={classes.navbarSmoothLink}>خدمات</a>
            <a className={classes.navbarSmoothLink}>اپلیکیشن</a>
            <a className={classes.navbarSmoothLink}>بلاگ</a>
        </nav>
    )
}

export default Navbar