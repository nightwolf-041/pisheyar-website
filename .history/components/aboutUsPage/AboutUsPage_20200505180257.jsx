import React from 'react'
import classes from './aboutUs.module.scss'

const AboutUsPage = () => {
    return (
        <section name="aboutUsPage" className={classes.aboutUsSection}>
            <div className="container">
                <div className={classes.aboutUsLeft}>
                    <img src="/Background.png" alt="back" className={classes.aboutUsLeftImage} />
                </div>
                <div className={classes.aboutUsRightTop}>
                    <h4 className={classes.aboutUsRightTopTitle}>درباره پیشه یار</h4>
                    <div className={classes.aboutUsRightTopDivider}></div>
                    <p className={classes.aboutUsRightTopDesc}>
                        با یکی از بهترین سایت های خدماتی در سراسر ایران آشنا شوید.
                        <br />
                        پیشه یار خدمات صنعتی متنوعیدر اختیار کاربران خودقرار میدهد تا آنان از بین انبوهی از این خدمات، خدمت مورد نیاز خود را انتخاب کنند.
                    </p>
                </div>
                <div className={classes.aboutUsRightBottom}>
                    <div className={classes.aboutUsRightBottomItemsbox}>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-badge.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین متخصصین</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                            </p>
                        </div>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-service.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین خدمات</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                            </p>
                        </div>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-badge.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین کیفیت</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                            </p>
                        </div>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="icon-close.png" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>پاسخگویی سریع</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage