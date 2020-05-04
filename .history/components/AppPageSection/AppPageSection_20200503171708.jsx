import React from 'react';
import classes from './appPageSection.module.css'


const AppPageSection = () => {
    return (
        <section className={classes.appPageSection}>
            <img src="/hero-img.png" alt="" className={appPageLeftImg} />
            <div className={appPageRight}>
                <h3 className={appPageRightTitle}>اپلیکیشن پیشه یار</h3>
            </div>
        </section>
    )
}

export default AppPageSection