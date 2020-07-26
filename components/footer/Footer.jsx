import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faPhoneAlt, faMapMarkedAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import classes from './footer.module.scss';


const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerTop}>
                    <div className={classes.footerLogobox}>
                        <div className={classes.footerLogoKeeper}>
                            <img src="/loge_full_yellow_with_txt.svg" alt="" className={classes.footerLogo} />
                        </div>
                        <div className={classes.footerAddressbox}>
                            <div className={classes.footerAddressboxItem}>
                                <FontAwesomeIcon icon={faMapMarkedAlt} className={classes.footerAddressboxItemIcon} />
                                <span className={classes.footerAddressboxItemSpanFa}>
                                    آزادشهر، خیابان همایونی، نبش کوچه سوم، پلاک 25
                                </span>
                            </div>
                            <div className={classes.footerAddressboxItem}>
                                <FontAwesomeIcon icon={faPhoneAlt} className={classes.footerAddressboxItemIcon} />
                                <span className={[classes.footerAddressboxItemSpan, classes.footerAddressboxItemSpanMobile].join(' ')}>
                                    021-88833746
                                </span>
                            </div>
                            <div className={classes.footerAddressboxItem}>
                                <FontAwesomeIcon icon={faEnvelope} className={classes.footerAddressboxItemIcon} />
                                <span className={classes.footerAddressboxItemSpan}>
                                    info@pisheplus.com
                                </span>
                            </div>
                            <div className={classes.footerAddressboxSocialsbox}>
                                <a href="https://www.instagram.com/pisheplus">
                                    <FontAwesomeIcon icon={faInstagram} className={classes.footerAddressboxSocialIcon} />
                                </a>
                                <a href="https://wa.me/">
                                    <FontAwesomeIcon icon={faWhatsapp} className={classes.footerAddressboxSocialIcon} />
                                </a>
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
                            <Link activeClass={classes.activeLink} to="topPage" spy={true}
                            smooth={true} duration={500} className={classes.footerLinksboxLink}>
                                خانه
                            </Link>
                            <a href="#" className={classes.footerLinksboxLink}>ثبت نام / ورود</a>
                            {props.indexPage ?
                                <>
                                <Link activeClass={classes.activeLink} to="aboutUsPage" spy={true}
                                smooth={true} duration={500} className={classes.footerLinksboxLink}>
                                    درباره پیشه پلاس
                                </Link>
                                <Link activeClass={classes.activeLink} to="servicesPage" spy={true}
                                smooth={true} duration={500} className={classes.footerLinksboxLink}>
                                    خدمات
                                </Link>
                                <Link activeClass={classes.activeLink} to="appPage" spy={true}
                                smooth={true} duration={500} className={classes.footerLinksboxLink}>
                                    اپلیکیشن
                                </Link>
                                <Link activeClass={classes.activeLink} to="blogPage" spy={true}
                                smooth={true} duration={500} className={classes.footerLinksboxLink}>
                                    بلاگ
                                </Link>
                                </>
                                :null
                            }
                            <Link activeClass={classes.activeLink} to="contactUsPage" spy={true}
                            smooth={true} duration={500} className={classes.footerLinksboxLink}>
                                ارتباط با ما
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    این سایت تابع قوانین جمهوری اسلامی ایران می باشد.
                    <br />
                    حقوق این وب سایت محفوظ و متعلق به گروه پیشه یار میباشد
                </div>
            </div>
        </footer>
    )
}

export default Footer
