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
                <div className={classes.aboutUsRightBottom}>
                    <div className={classes.aboutUsRightBottomItem}>
                        <img src="icon-close.png" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                        <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین متخصصین</h4>
                        <h4 className={classes.aboutUsRightBottomItemSubtitle}>
                            فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                        </h4>
                    </div>
                    <div className={classes.aboutUsRightBottomItem}>
                        <img src="icon-close.png" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                        <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین خدمات</h4>
                        <h4 className={classes.aboutUsRightBottomItemSubtitle}>
                            فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                        </h4>
                    </div>
                    <div className={classes.aboutUsRightBottomItem}>
                        <img src="icon-close.png" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                        <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین کیفیت</h4>
                        <h4 className={classes.aboutUsRightBottomItemSubtitle}>
                            فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                        </h4>
                    </div>
                    <div className={classes.aboutUsRightBottomItem}>
                        <img src="icon-close.png" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                        <h4 className={classes.aboutUsRightBottomItemTitle}>پاسخگویی سریع</h4>
                        <h4 className={classes.aboutUsRightBottomItemSubtitle}>
                            فراهم آورنده ی بهترین خدمات صنعتی برای متقاضیان
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage