import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    useEffect(() => {
        let deg = 0
        setInterval(() => {
            deg + 45
            anime({
                keyframes: [
                    {rotate: '45deg'},
                    {rotate: '90deg'},
                    {rotate: '135deg'},
                    {rotate: '180deg'},
                    {rotate: '225deg'},
                  ],
                  duration: 4000,
                  easing: 'easeOutElastic(1, .8)',
                  loop: true
            })
        }, 2000);
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