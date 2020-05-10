import React, {useState, useEffect, useRef} from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import classes from './navbar.module.scss'

const Navbar = () => {

    const navbar = useRef()

    const [onTop, setOntop] = useState(true)

	useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== onTop) {
                setOntop(isTop)
            }
        });
    }, [onTop])

    return (
        <nav className={onTop ? classes.navbar : classes.navbarToggle} ref={navbar}>
            <div className={classes.navbarContainer}>
                <div className={classes.navbarLinks}>
                    <a className={classes.navbarLogonLink}>ثبت نام . ورود</a>
                    <Link activeClass={classes.activeLink} to="topPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        خانه
                    </Link>
                    <Link activeClass={classes.activeLink} to="categoryPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        دسته بندی
                    </Link>
                    <Link activeClass={classes.activeLink} to="aboutUsPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        درباره ما
                    </Link>
                    <Link activeClass={classes.activeLink} to="servicesPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        خدمات
                    </Link>
                    <Link activeClass={classes.activeLink} to="appPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        اپلیکیشن
                    </Link>
                    <Link activeClass={classes.activeLink} to="blogPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        بلاگ
                    </Link>
                    <Link activeClass={classes.activeLink} to="contactUsPage" spy={true}
                    smooth={true} duration={500} className={classes.navbarSmoothLink}>
                        ارتباط با ما
                    </Link>
                </div>
                {onTop ? 
                <img src="/pishe.png" alt="pisheyar" className={classes.navbarLogo} /> 
                :
                <img src="/WhiteLogo.svg" alt="pisheyar" className={classes.navbarLogoToggle} />
                }
            </div>
        </nav>
    )
}

export default Navbar