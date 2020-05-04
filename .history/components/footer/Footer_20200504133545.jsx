import React from 'react'
import classes from './footer.module.scss';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerTop}>
                <div className={classes.footerLogobox}>
                <img src="/home-icon.png" alt="" className={classes.footerLogo} />
                <div className={classes.footerAddressbox}>
                    <div className={classes.footerAddressboxItem}>
                        <img src="/home-icon.png" alt=""
                        className={classes.footerAddressboxItemIcon} />
                        <span className={classes.footerAddressboxItemSpan}>
                            آزادشهر، خیابان همایونی، نبش کوچه سوم، پلاک 25
                        </span>
                    </div>
                    <div className={classes.footerAddressboxItem}>
                        <img src="/home-icon.png" alt=""
                        className={classes.footerAddressboxItemIcon} />
                        <span className={classes.footerAddressboxItemSpan}>
                            +98 910 834 7428
                        </span>
                    </div>
                    <div className={classes.footerAddressboxItem}>
                        <img src="/home-icon.png" alt=""
                        className={classes.footerAddressboxItemIcon} />
                        <span className={classes.footerAddressboxItemSpan}>
                            white.luciferrr@gmail.com
                        </span>
                    </div>
                    <div className={classes.footerAddressboxSocialsbox}>
                        <img src="/home-icon.png" alt="" className={footerAddressboxSocialIcon} />
                        <img src="/home-icon.png" alt="" className={footerAddressboxSocialIcon} />
                    </div>
                </div>
            </div>
            <div className={classes.footerLinksbox}></div>
            <div className={classes.footerServicesbox}></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
