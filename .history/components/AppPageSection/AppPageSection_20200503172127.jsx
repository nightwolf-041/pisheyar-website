import React from 'react';
import classes from './appPageSection.module.scss'


const AppPageSection = () => {
    return (
        <section className={classes.appPageSection}>
            <div className="container">
                <img src="/hero-img.png" alt="" className={classes.appPageLeftImg} />
                <div className={classes.appPageRight}>
                    <h3 className={classes.appPageRightTitle}><b>اپلیکیشن</b> پیشه یار</h3>
                </div>
            </div>
        </section>
    )
}

export default AppPageSection