import React from 'react'
import { Link } from 'react-scroll'
import { Scrollbar  } from 'react-scrollbars-custom'
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt , faHome, faLayerGroup, faUsers, faCubes, faMobileAlt, faBlog, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import classes from './hamburgerMenu.module.scss'


const HamburgerMenu = (props) => {
    return (
        <div className={props.toggle ? classes.hamburgerMenuToggle : classes.hamburgerMenu}>
            {/* <Scrollbars
            autoHide
            renderThumbVertical={false}
            universal={true}
            autoHideTimeout={500}
            autoHideDuration={200}
            renderTrackHorizontal={({ style, ...props }) =>
                <div {...props} style={{ ...style }}/>
            }> */}
            <Scrollbar style={{ width: '5rem', height: '100vh' }}>
                <div className={classes.test}>

                <div className={classes.hamburgerMenuRegisterItemDiv}>
                    <FontAwesomeIcon icon={faSignInAlt} className={classes.hamburgerMenuRegisterItem} />
                </div>

                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="topPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faHome} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="categoryPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faLayerGroup} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="aboutUsPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faUsers} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="servicesPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faCubes} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="appPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faMobileAlt} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="blogPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faBlog} className={classes.hamburgerMenuItem} />
                </Link>
                <Link activeClass={classes.hamburgerMenuItemLinkActive} to="contactUsPage" spy={true}
                smooth={true} duration={500} className={classes.hamburgerMenuItemLink}>
                    <FontAwesomeIcon icon={faPhoneAlt} className={classes.hamburgerMenuItem} />
                </Link> 
                </div>
            </Scrollbar>
        </div>
    )
}

export default HamburgerMenu
