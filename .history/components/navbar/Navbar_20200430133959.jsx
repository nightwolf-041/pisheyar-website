import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './navbar.module.scss'

const Navbar = () => {

    const navbar = useRef()

    const [onTop, setOntop] = useState(true)

	useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 80;
            if (isTop !== onTop) {
                setOntop(isTop)
                anime({
                    targets: navbar.current,
                    position: 'fixed',
                    backgroundColor: '#0b1033'
                })
            }
        });
    }, [onTop])

    return (
        <nav className={onTop ? classes.navbar : classes.navbarToggle} ref={navbar}>
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
                <img src={onTop ? "/pishe.png" : "/logo-bottom.png"} alt="pisheyar" className={classes.navbarLogo} />
            </div>
        </nav>
    )
}

export default Navbar