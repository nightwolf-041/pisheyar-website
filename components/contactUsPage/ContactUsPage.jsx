import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ContactUsInputs from './ContactUsInputs'
import classes from './contactUsPage.module.scss'


const ContactUsPage = () => {

    return (
        <section name="contactUsPage" className={classes.contactUsSection}>
            <div className={classes.contactUsSectionBackdrop}></div>
            <div className="container">
                <div className={classes.contactUsRow}>
                    <div className={classes.contactUsCallbox}>
                        <div className={classes.contactUsCallTop}>
                            <h4 className={classes.contactUsCallTopTitle}>تماس</h4>
                            <div className={classes.contactUsCallTopDivider}></div>
                            <p className={classes.contactUsCallTopDesc}>
                                از طریق شماره تماس و راه های ارتباطی زیر شما می توانید با ما در ارتباط باشید.
                            </p>
                        </div>
                        <div className={classes.contactUsCallBottom}>
                        <div className={classes.contactUsCallBottomItem}>
                            <FontAwesomeIcon icon={faPhoneAlt}
                                className={classes.contactUsCallBottomItemImage} />
                            <span className={classes.contactUsCallBottomItemSpan}>
                                021-88833746
                            </span>
                        </div>
                        <div className={classes.contactUsCallBottomItem}>
                            <FontAwesomeIcon icon={faEnvelope}
                                className={classes.contactUsCallBottomItemImage} />
                            <span className={classes.contactUsCallBottomItemSpan}>
                                info@pisheplus.com
                            </span>
                        </div>
                        <div className={classes.contactUsCallBottomItem}>
                            <FontAwesomeIcon icon={faInstagram}
                                className={classes.contactUsCallBottomItemImage} />
                            <span className={classes.contactUsCallBottomItemSpan}>
                                pisheplus
                            </span>
                        </div>
                    </div>
                    </div>
                    <div className={classes.contactUsContactbox}>
                        <h4 className={classes.contactUsContactboxTitle}>ارتباط با ما</h4>
                        <div className={classes.contactUsContactboxDivider}></div>
                        <p className={classes.contactUsContactboxDesc}>
                            شما می توانید با پر کردن اطلاعات زیر با ادمین سایت ارتباط برقرار کرده یا از طریق شماره تلفن های داخل باکس نیز با ما در ارتباط باشید.
                        </p>
                        {/* <div className={classes.contactUsInputsbox}></div> */}
                        <ContactUsInputs />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage
