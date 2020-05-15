import React from 'react'
import { Link } from 'react-scroll'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { faHome, faObjectGroup, faInfoCircle, faPhoneAlt, faBlog, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import classes from './hamburgerMenu.module.scss'


const HamburgerMenu = (props) => {
    return (
        <div className={props.toggle ? classes.hamburgerMenuToggle : classes.hamburgerMenu}>
            {/* <Scrollbars
            autoHide
            universal={true}
            autoHideTimeout={500}
            autoHideDuration={200}
            renderTrackHorizontal={({ style, ...props }) =>
                <div {...props} style={{ ...style }}/>
            }> */}
            <PerfectScrollbar>
                <img src="/pisheyar-single-white.png" alt="" className={classes.hamburgerMenuLogo} />

                <FontAwesomeIcon icon={faRegistered} className={classes.hamburgerMenuRegisterItem} />

                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="topPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink1}>
                    <FontAwesomeIcon icon={faHome} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="categoryPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink2}>
                    <FontAwesomeIcon icon={faObjectGroup} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="aboutUsPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink3}>
                    <FontAwesomeIcon icon={faInfoCircle} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="servicesPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink4}>
                    <FontAwesomeIcon icon={faServicestack} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="appPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink5}>
                    <FontAwesomeIcon icon={faPhoneAlt} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="blogPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink6}>
                    <FontAwesomeIcon icon={faBlog} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="contactUsPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink7}>
                    <FontAwesomeIcon icon={faCommentAlt} className={classes.hamburgerMenuItem} />
                </Link> 
            {/* </Scrollbars> */}
            </PerfectScrollbar>
        </div>
    )
}

export default HamburgerMenu
