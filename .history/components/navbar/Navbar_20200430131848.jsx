import React from 'react';
import classes from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarContainer}>
                <div className={classes.navbarLinks}>
                    <a className={classes.navbarLogonLink}>ثبت نام . ورود</a>
                    <a className={classes.navbarSmoothLink}>خانه</a>
                    <a className={classes.navbarSmoothLink}>دسته بندی</a>
                    <a className={classes.navbarSmoothLink}>درباره ما</a>
                    <a className={classes.navbarSmoothLink}>خدمات</a>
                    <a className={classes.navbarSmoothLink}>اپلیکیشن</a>
                    <a className={classes.navbarSmoothLink}>بلاگ</a>
                    <a className={classes.navbarSmoothLink}>ارتباط با ما</a>
                </div>
                <img src="logo-14.png" alt="pisheyar" className={classes.navbarLogo} />
            </div>
        </nav>
    )
}

export default Navbar