import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { faHome, faObjectGroup, faInfoCircle, faPhoneAlt, faBlog, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import classes from './hamburgerMenu.module.scss'


const HamburgerMenu = (props) => {
    return (
        <div className={props.toggle ? classes.hamburgerMenuToggle : classes.hamburgerMenu}>
            <img src="/pisheyar-single-white.png" alt="" className={classes.hamburgerMenuLogo} />
            
            <FontAwesomeIcon icon={faRegistered} className={classes.hamburgerMenuItem} />

            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="topPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faHome} className={classes.hamburgerMenuItem} />
            </Link>
            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="categoryPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faObjectGroup} className={classes.hamburgerMenuItem} />
            </Link>
            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="aboutUsPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faInfoCircle} className={classes.hamburgerMenuItem} />
            </Link>
            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="servicesPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faServicestack} className={classes.hamburgerMenuItem} />
            </Link>
            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="appPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faPhoneAlt} className={classes.hamburgerMenuItem} />
            </Link>
            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="blogPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faBlog} className={classes.hamburgerMenuItem} />
            </Link>
            <Link activeClass={classes.hamburgerMenuItemLinkActive} to="contactUsPage" spy={true}
            smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                <FontAwesomeIcon icon={faCommentAlt} className={classes.hamburgerMenuItem} />
            </Link> 
        </div>
    )
}

export default HamburgerMenu
