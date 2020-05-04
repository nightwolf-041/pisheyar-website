import React from 'react'
import classes from './footer.module.scss';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerLogobox}>
                <img src="/home-icon.png" alt="" className={classes.footerLogo} />
                <div className={classes.footerAddresbox}></div>
            </div>
            <div className={classes.footerLinksbox}></div>
            <div className={classes.footerServicesbox}></div>
        </footer>
    )
}

export default Footer
