import React from 'react';
import classes from './appPageSection.module.scss'


const AppPageSection = () => {
    return (
        <section className={classes.appPageSection}>
            <div className="container"></div>
                <img src="/hero-img.png" alt="" className={classes.appPageLeftImg} />
                <div className={classes.appPageRight}>
                    <h3 className={classes.appPageRightTitle}>اپلیکیشن پیشه یار</h3>
                </div>
        </section>
    )
}

export default AppPageSection