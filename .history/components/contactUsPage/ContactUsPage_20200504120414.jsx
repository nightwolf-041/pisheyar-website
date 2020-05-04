import React from 'react'
import classes from './contactUsPage.module.scss'


const ContactUsPage = () => {
    return (
        <section className={classes.contactUsSection}>
            <div className={classes.contactUsSectionBackdrop}></div>
            <div className="container">
                <div className={classes.contactUsRow}>
                    <div className={classes.contactUsCallbox}>
                        <div className={classes.contactUsCallTop}>
                            <h4 className={classes.contactUsCallTopTitle}>تماس</h4>
                            <div className={classes.contactUsCallTopDivider}></div>
                            <p className={classes.contactUsCallTopDesc}>
                                از طریق شماره تماس و راه های ارتباطی زیر شما می توانید با ما در ارتباط باشید
                            </p>
                        </div>
                    </div>
                    <div className={classes.contactUsBottom}>
                        <div className={classes.contactUsBottomItem}>
                            <img src="/home-icon.png" alt=""
                            className={classes.contactUsBottomItemImage} />
                            <span className={classes.contactUsBottomItemSpan}>
                                +98 910 834 7428
                            </span>
                        </div>
                        <div className={classes.contactUsBottomItem}>
                            <img src="/home-icon.png" alt=""
                            className={classes.contactUsBottomItemImage} />
                            <span className={classes.contactUsBottomItemSpan}>
                                white.luciferrr@gmail.com
                            </span>
                        </div>
                        <div className={classes.contactUsBottomItem}>
                            <img src="/home-icon.png" alt=""
                            className={classes.contactUsBottomItemImage} />
                            <span className={classes.contactUsBottomItemSpan}>
                                mmd.7__kqzi
                            </span>
                        </div>
                    </div>
                    <div className={classes.contactUsContactbox}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage
