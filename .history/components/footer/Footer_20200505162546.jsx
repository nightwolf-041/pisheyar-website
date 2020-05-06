import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faUserClock, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-brands-svg-icons";
import classes from './footer.module.scss';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerTop}>
                    <div className={classes.footerLogobox}>
                        <div className={classes.footerLogoKeeper}>
                            <img src="/home-icon.png" alt="" className={classes.footerLogo} />
                        </div>
                        <div className={classes.footerAddressbox}>
                            <div className={classes.footerAddressboxItem}>
                                <FontAwesomeIcon icon={faAddressCard} className={classes.footerAddressboxItemIcon} />
                                <span className={classes.footerAddressboxItemSpanFa}>
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
                                <img src="/home-icon.png" alt=""
                                className={classes.footerAddressboxSocialIcon} />
                                <img src="/home-icon.png" alt=""
                                className={classes.footerAddressboxSocialIcon} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerServicesbox}>
                        <h4 className={classes.footerServicesboxTitle}>خدمات</h4>
                        <div className={classes.footerServicesboxDivider}></div>
                        <div className={classes.footerServicesboxItem}>
                            <FontAwesomeIcon icon={faAngleLeft} className={classes.footerServicesboxItemIcon} />
                            <span className={classes.footerServicesboxItemSpan}>
                                ابزار و لوازم صنعتی
                            </span>
                        </div>
                        <div className={classes.footerServicesboxItem}>
                            <FontAwesomeIcon icon={faAngleLeft} className={classes.footerServicesboxItemIcon} />
                            <span className={classes.footerServicesboxItemSpan}>
                                مصنوعات صنعتی
                            </span>
                        </div>
                        <div className={classes.footerServicesboxItem}>
                            <FontAwesomeIcon icon={faAngleLeft} className={classes.footerServicesboxItemIcon} />
                            <span className={classes.footerServicesboxItemSpan}>
                                کالا و خدمات صنعتی
                            </span>
                        </div>
                        <div className={classes.footerServicesboxItem}>
                            <FontAwesomeIcon icon={faAngleLeft} className={classes.footerServicesboxItemIcon} />
                            <span className={classes.footerServicesboxItemSpan}>
                                مواد شیمیایی
                            </span>
                        </div>
                        <div className={classes.footerServicesboxItem}>
                            <FontAwesomeIcon icon={faAngleLeft} className={classes.footerServicesboxItemIcon} />
                            <span className={classes.footerServicesboxItemSpan}>
                                دستگاه و ماشین آلات
                            </span>
                        </div>
                    </div>
                    <div className={classes.footerLinksbox}>
                        <h4 className={classes.footerLinksboxTitle}>پیوند ها</h4>
                        <div className={classes.footerLinksboxDivider}></div>
                        <div className={classes.footerLinksboxLinkbox}>
                            <a className={classes.footerLinksboxLink}>خانه</a>
                            <a className={classes.footerLinksboxLink}>ثبتنام / ورود</a>
                            <a className={classes.footerLinksboxLink}>درباره پیشه یار</a>
                            <a className={classes.footerLinksboxLink}>خدمات</a>
                            <a className={classes.footerLinksboxLink}>اپلیکیشن</a>
                            <a className={classes.footerLinksboxLink}>بلاگ</a>
                            <a className={classes.footerLinksboxLink}>ارتباط با ما</a>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    این سایت از ظرف تیم StartDone طراحی و تکمیل شده و هر گونه کپی پیگرد قانونی دارد.
                </div>
            </div>
        </footer>
    )
}

export default Footer
