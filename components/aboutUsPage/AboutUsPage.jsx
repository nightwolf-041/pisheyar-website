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
                    <h4 className={classes.aboutUsRightTopTitle}>درباره پیشه پلاس</h4>
                    <div className={classes.aboutUsRightTopDivider}></div>
                    <p className={classes.aboutUsRightTopDesc}>
                        ما در پیشه پلاس  برای اولین بار در ایران با هدف سهولت در ارتباط آسان و پویا میان خدمات دهندگان و خدمات گیرندگان صنعتی  توانستیم،  با ایجاد بستری مناسب قدمی هر چند کوچک در پیشرفت و سهولت خدمات دهی صنعتی برداریم.
                    </p>
                </div>
                <div className={classes.aboutUsRightBottom}>
                    <div className={classes.aboutUsRightBottomItemsbox}>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-employee.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین متخصص</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                بهترین خدمات را با بهترین متخصصین صنعتی تجربه کنید
                            </p>
                        </div>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-service.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین خدمات</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                با نظارت دقیق بر متخصصات کیفیت خدمات را تضمین میکنیم
                            </p>
                        </div>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-badge.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>بهترین کیفیت</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                بهترین کیفیت خدمات دهی را با ما تجربه کنید
                            </p>
                        </div>
                        <div className={classes.aboutUsRightBottomItem}>
                            <img src="about-clock.svg" alt="icon" className={classes.aboutUsRightBottomItemIcon} />
                            <h4 className={classes.aboutUsRightBottomItemTitle}>پاسخگویی سریع</h4>
                            <p className={classes.aboutUsRightBottomItemSubtitle}>
                                همکاران ما در هر زمان آماده پاسخ گویی به مشکلات شما هستند
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage