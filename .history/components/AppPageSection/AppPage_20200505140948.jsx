import React from 'react';
import classes from './appPage.module.scss'


const AppPageSection = () => {
    return (
        <section name="appPage" className={classes.appPageSection}>
            <div className="container">
                <div className={classes.appPageLeft}>
                    <img src="/app-phone.svg" alt="" className={classes.appPageLeftPhoneImg} />
                    <img src="/ApplicationBackgroundShape.svg" alt=""
                    className={classes.appPageLeftEllipseImgBack} />
                </div>
                <div className={classes.appPageRight}>
                    <h4 className={classes.appPageRightTitle}><b>اپلیکیشن</b> پیشه یار</h4>
                    <h5 className={classes.appPageRightSubtitle}>
                        دو اپلیکیشن جدا با امکانات مجزا از هم
                    </h5>
                    <p className={classes.appPageRightDesc}>
                        خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلعو در صورت نیاز با مراجعه به دسته بندی خدمات مورد نیاز را پیدا کنید.
                    </p>
                    <div className={classes.appPageRightSocialbox}>
                        <img src="/app-googleplay.png" alt="" className={classes.appPageRightSocialImage} />
                        <img src="/app-applestore.png" alt="" className={classes.appPageRightSocialImage} />
                        <img src="/app-sib.png" alt="" className={classes.appPageRightSocialImage} />
                        <img src="/app-cafebazar.png" alt="" className={classes.appPageRightSocialImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppPageSection