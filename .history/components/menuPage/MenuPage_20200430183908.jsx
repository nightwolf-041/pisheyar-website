import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    useEffect(() => {
        setInterval(() => {
            anime({
                targets: '#circleMenuMain',
                rotate: '45deg'
            })
        }, 1000);
    })

    return(
        <div id="circleMenuMain" className={classes.circleMenuMain} ref={circleMenuMain}>
            <div className={classes.circleMenuItem1} ref={circleMenuItem1}>
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