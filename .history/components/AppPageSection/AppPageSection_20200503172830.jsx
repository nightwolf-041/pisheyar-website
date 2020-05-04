import React from 'react';
import classes from './appPageSection.module.scss'


const AppPageSection = () => {
    return (
        <section className={classes.appPageSection}>
            <div className="container">
                <div className={classes.appPageLeft}>
                    <img src="/hero-img.png" alt="" className={classes.appPageLeftImg} />
                </div>
                <div className={classes.appPageRight}>
                    <h4 className={classes.appPageRightTitle}><b>اپلیکیشن</b> پیشه یار</h4>
                </div>
            </div>
        </section>
    )
}

export default AppPageSection