import React from 'react'
import classes from './aboutUs.module.scss'

const AboutUsPage = () => {
    return (
        <section className={classes.aboutUsSection}>
            <div className={classes.aboutUsLeft}>
                <img src="/Background.png" alt="back" className={classes.aboutUsLeftImage} />
            </div>
            <div className={classes.aboutUsRightTop}>
                <h2 className={aboutUsRightTopTitle}></h2>
                <div className={aboutUsRightTopDivider}></div>
                <p className={aboutUsRightTopDesc}></p>
            </div>
            <div className={classes.aboutUsRightBottom}></div>
        </section>
    )
}

export default AboutUsPage