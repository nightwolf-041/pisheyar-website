import React from 'react'
import classes from './aboutUs.module.scss'

const AboutUsPage = () => {
    return (
        <section className={classes.aboutUsSection}>
            <div className="container">
                <div className={classes.aboutUsLeft}>
                    <img src="/Background.png" alt="back" className={classes.aboutUsLeftImage} />
                </div>
                <div className={classes.aboutUsRightTop}>
                    <h2 className={classes.aboutUsRightTopTitle}>درباره پیشه یار</h2>
                    <div className={classes.aboutUsRightTopDivider}></div>
                    <p className={classes.aboutUsRightTopDesc}>
                        با یکی از بهترین سایت های خدماتی در سراسر ایران آشنا شوید.
                        <br />
                        پیشه یار خدمات صنعتی متنوعیدر اختیار کاربران خودقرار میدهد تا آنان از بین انبوهی از این خدمات، خدمت مورد نیاز خود را انتخاب کنند.
                    </p>
                </div>
                <div className={classes.aboutUsRightBottom}></div>
            </div>
        </section>
    )
}

export default AboutUsPage