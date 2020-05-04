import React, {useState, useEffect, useRef} from 'react';
import classes from './menuPage.module.scss'

const MenuPage = () => {

    return(
        <div className={classes.circleMenuMain}>
            <div className={classes.circleMenuItem1}>
                <div className={classes.circleMenuItemIconbox}></div>
            </div>
            <div className={classes.circleMenuItem2}>
                <div className={classes.circleMenuItemIconbox}></div>
            </div>
            <div className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox}></div>
            </div>
        </div>
    )
}

export default MenuPage