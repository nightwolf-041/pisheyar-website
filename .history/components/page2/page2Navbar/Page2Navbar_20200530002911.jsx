import React, {useState, useEffect, useRef} from 'react';
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
                <FontAwesomeIcon icon={faUserCircle} className={classes.page2NavbarLoginIcon} />
                {onTop ? 
                    <img src="/pishe.png" alt="pisheyar" className={classes.page2NavbarLogo} />
                    : null
                }
                <div className={classes.page2NavbarHomeImageIconBox}>
                    <img src="/factory.svg" alt="" className={classes.page2NavbarHomeImageIcon} />
                </div>
            </div>
        </nav>
    )
}

export default Page2Navbar;