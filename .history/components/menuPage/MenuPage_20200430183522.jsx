import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    useEffect(() => {
        setInterval(() => {
            anime({
                targets: circleMenuMain.current,
                transform: 'rotate(45deg)'
            })
        }, 3000);
    })

    return(
        <div className={classes.circleMenuMain} ref={circleMenuMain}>
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