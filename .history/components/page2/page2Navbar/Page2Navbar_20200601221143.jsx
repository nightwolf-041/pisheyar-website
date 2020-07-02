import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import classes from './page2Navbar.module.scss'

const Page2Navbar = (props) => {

    const navbar = useRef()

    const [onTop, setOntop] = useState(true)

	useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 65;
            if (isTop !== onTop) {
                setOntop(isTop)
            }
        });
    }, [onTop])

    return (
        <nav className={classes.page2Navbar}>
            <div className={classes.page2NavbarContainer}>
                <div className={classes.page2NavbarLoginIconBox}>
                    <FontAwesomeIcon icon={faUserCircle} className={classes.page2NavbarLoginIcon}
                    title="ورود" />
                </div>
                {onTop ? 
                    <img src="/pishe.png" alt="pisheyar" className={classes.page2NavbarLogo} />
                    : null
                }
                <Link href="/">
                    <div className={classes.page2NavbarHomeImageIconBox} title="خانه">
                        <img src="/factory.svg" alt="" className={classes.page2NavbarHomeImageIcon} />
                    </div>
                </Link> 
            </div>
        </nav>
    )
}

export default Page2Navbar;